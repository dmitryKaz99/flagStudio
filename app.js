"use strict";

// const
const countries = document.querySelectorAll(".country"),
  selectorCountries = document.querySelectorAll(".select-name_country"),
  arrOfficeMarks = [],
  arrFeatures = [];

// destructuring
const coordinates = {
    destinations: {
      RU: [61.34523577, 66.49433826],
      BLR: [53.90921515, 27.65551003],
    },
    zooms: {
      RU: 4,
      BLR: 6,
    },
  },
  { destinations, zooms } = coordinates;

// function helper
function hideContent(selector, activeClass) {
  selector.forEach((elem) => elem.classList.remove(activeClass));
}

// wait function
window.addEventListener("load", () => {
  loadMarks();
});

// load marks (async)
async function loadMarks() {
  try {
    const res = await fetch("./marks.json"),
      resData = await res.json();

    createOfficeMarks(resData);
    createItemsCountry(resData);
  } catch (e) {
    console.log(e);
  }
}

// click btn country
function handleButtonCountry(map) {
  countries.forEach((country) => {
    country.addEventListener("click", (e) => {
      e.preventDefault();

      const clickId = country.getAttribute("data-country"),
        currentId = document.querySelector(clickId);

      if (!country.classList.contains("country-active")) {
        hideContent(countries, "country-active");
        hideContent(selectorCountries, "select-active");

        country.classList.add("country-active");
        currentId.classList.add("select-active");

        clickId === "#RU"
          ? map.setCenter(destinations.RU, zooms.RU)
          : map.setCenter(destinations.BLR, zooms.BLR);
      }
    });
  });

  countries[0].click();
}

// create and push officeMarks (call ymaps)
function createOfficeMarks(data) {
  ymaps.ready(init);

  const arrMarks = [...data.marksRU, ...data.marksBLR];
  arrMarks.forEach((mark) => {
    const objMark = {
      id: mark.id,
      latitude: mark.latitude,
      longitude: mark.longitude,
      hintContent: `<div class="map-hint""><span>г. ${mark.city}</span><span>${mark.street}</span></div>`,
      balloonContent: [
        `<div>`,
        `<a href="#" class="about-name map-about_orange">${mark.office}</a>`,
        `<div class="about-author map-about_white">${mark.agent}</div>`,
        `<div class="about-tel map-about_white">`,
        `<a href="tel:12345678">${mark.telOne}</a>`,
        `<a href="tel:12345678">${mark.telTwo}</a>`,
        `</div>`,
        `<a class="about-email"`,
        `href="${mark.hrefOrEmail}">${mark.hrefOrEmail}</a>`,
        `</div>`,
      ],
    };

    arrOfficeMarks.push(objMark);
  });

  saveFeatures(arrOfficeMarks);
}

// save features for ymaps
function saveFeatures(marks) {
  for (let i = 0; i < marks.length; i++) {
    arrFeatures.push({
      type: "Feature",
      id: marks[i].id,
      geometry: {
        type: "Point",
        coordinates: [marks[i].latitude, marks[i].longitude],
      },
      properties: {
        balloonContent: marks[i].balloonContent.join(""),
        hintContent: marks[i].hintContent,
      },
    });
  }
}

// create items by sity (2 stages)
function createItemsCountry(data) {
  countries.forEach((country) => {
    const countryId = country.getAttribute("data-country");

    countryId === "#RU"
      ? getItems(data.marksRU, countryId)
      : getItems(data.marksBLR, countryId);
  });
}

// get items
function getItems(marks, id) {
  const countryEl = document.querySelector(id);

  const arrCity = marks.map((mark) => mark.city),
    newArrCity = new Set([...arrCity]);

  newArrCity.forEach((city) => {
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");
    itemEl.innerHTML = `
    <div class="item-menu">
      <div class="item-name">${city}</div>
      <div class="item-arrow"></div>
    </div>
    <div class="about"></div>
    `;

    const itemNameEl = itemEl.querySelector(".item-name"),
      aboutEl = itemEl.querySelector(".about");
    getItemsAbout(marks, itemNameEl, aboutEl);

    countryEl.insertAdjacentElement("beforeend", itemEl);
  });

  handleBurgerMenu();
}

// get about for items
function getItemsAbout(marks, itemNameEl, aboutEl) {
  marks.forEach((mark) => {
    if (itemNameEl.innerHTML === mark.city) {
      const aboutInner = `
      <div>
        <a href="#" class="about-name" data-objectId="${mark.id}" title="Приблизить метку">${mark.office}</a>
        <div class="about-author">${mark.agent}</div>
        <div class="about-tel">
          <a href="tel:12345678">${mark.telOne}</a>
          <a href="tel:12345678">${mark.telTwo}</a>
        </div>
        <a class="about-email"
          href="${mark.hrefOrEmail}">${mark.hrefOrEmail}</a>
      </div>
      `;

      aboutEl.insertAdjacentHTML("beforeend", aboutInner);
    }
  });
}

// click burger menu
function handleBurgerMenu() {
  const itemMenu = document.querySelectorAll(".item-menu"),
    aboutElems = document.querySelectorAll(".about");

  for (let i = 0; i < itemMenu.length; i++) {
    itemMenu[i].addEventListener("click", function (e) {
      e.stopImmediatePropagation();

      itemMenu[i].classList.toggle("active");
      aboutElems[i].classList.toggle("active");
    });
  }
}

// init ymaps
function init() {
  const myMap = new ymaps.Map("map", {
      center: destinations.RU,
      zoom: zooms.RU,
      controls: [],
    }),
    objectManager = new ymaps.ObjectManager({
      clusterize: true,
      clusterIcons: [
        {
          href: "./img/circleBlue.png",
          size: [28, 28],
          offset: [-14, -14],
        },
      ],
    });

  objectManager.objects.options.set({
    iconLayout: "default#image",
    iconImageHref: "./img/circleBlue.png",
    iconImageSize: [14, 14],
    iconImageOffset: [-7, -7],
  });

  myMap.geoObjects.add(objectManager);
  objectManager.add({
    type: "FeatureCollection",
    features: arrFeatures,
  });

  // view for object
  function viewObject(objectId) {
    trackActiveObject(objectId);

    objectManager.objects.each(function (item) {
      objectManager.objects.setObjectOptions(item.id, {
        iconImageHref: "./img/circleBlue.png",
      });
    });
    objectManager.objects.setObjectOptions(objectId, {
      iconImageHref: "./img/circleRed.png",
    });
  }

  // if click on map
  objectManager.objects.events.add("click", function (e) {
    const objectId = e.get("objectId");
    viewObject(objectId);
  });

  // if click on menu
  [].forEach.call(document.querySelectorAll("[data-objectId]"), function (el) {
    el.addEventListener("click", function () {
      const objectId = el.getAttribute("data-objectId");
      viewObject(objectId);

      myMap.setCenter(
        objectManager.objects.getById(objectId).geometry.coordinates,
        18,
        {
          checkZoomRange: true,
        }
      );
      // .then(() => {
      //   objectManager.objects.balloon.open(objectId);
      // });
    });
  });

  handleButtonCountry(myMap);
}

// track for object, add active class
function trackActiveObject(objectId) {
  const currentObj = document.querySelector(`[data-objectId=${objectId}]`),
    objParent = currentObj.closest(".about"),
    obpParentPrev = objParent.previousElementSibling,
    currentObjCountry = currentObj
      .closest(".select-name_country")
      .getAttribute("id");

  // click on current country (control)
  document.querySelector(`[data-country="#${currentObjCountry}"]`).click();

  hideContent(document.querySelectorAll("[data-objectId]"), "active");
  hideContent(document.querySelectorAll(".about"), "active");
  hideContent(document.querySelectorAll(".item-menu"), "active");

  currentObj.classList.add("active");
  objParent.classList.add("active");
  obpParentPrev.classList.add("active");
}

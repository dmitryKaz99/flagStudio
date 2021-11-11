'use strict';

// const 
const selectCountry = document.querySelectorAll('.country'),
    selectName = document.querySelectorAll(".select-name_country"),
    itemMenu = document.querySelectorAll('.item-flex'),
    aboutMenu = document.querySelectorAll('.about');

// f(currentCountry)
let getCurrentCountry = function () {
    selectCountry.forEach(country => {
        country.addEventListener('click', () => {
            let currentClick = country,
                clickId = currentClick.getAttribute("data-country"),
                currentId = document.querySelector(clickId);

            if (!currentClick.classList.contains('country-active')) {
                selectCountry.forEach(country => {
                    country.classList.remove('country-active');
                });

                selectName.forEach(name => {
                    name.classList.remove('select-active');
                });

                currentClick.classList.add('country-active');
                currentId.classList.add('select-active');
            }
        });
    });
};
getCurrentCountry();

// f(burgerMenu)
let getBurgerMenu = function () {
    for (let i = 0; i < itemMenu.length; i++) {
        itemMenu[i].addEventListener('click', onClickMenu);

        function onClickMenu() {
            itemMenu[i].classList.toggle('flex-active');
            aboutMenu[i].classList.toggle('about-active');
        }
    }
};
getBurgerMenu();

// marksRU
let officeMarksRU = [
    {
        latitude: 55.75922734,
        longitude: 37.59887580,
        hintContent: `<div class="map-hint"><span>г. Москва</span><span>Тверской бульв., 7</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис МОСКВА</a>`,
            `<div class="about-author map-about_white">Петров Алексей Антонович</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 55.75305616,
        longitude: 37.63143782,
        hintContent: `<div class="map-hint"><span>г. Москва</span><span>ул. Варка, 9</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис МОСКВА ЦЕНТР</a>`,
            `<div class="about-author map-about_white">Антонов Юрий Николаевич</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 56.83854743,
        longitude: 60.59389357,
        hintContent: `<div class="map-hint"><span>г. Екатеринбург</span><span>ул. Вайнера, 4</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис ЕКАТЕРИНБУРГ</a>`,
            `<div class="about-author map-about_white">Петров Алексей Антонович</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 56.82986091,
        longitude: 60.62291507,
        hintContent: `<div class="map-hint"><span>г. Екатеринбург</span><span>ул. Куйбышева, 97</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис ЕКАТЕРИНБУРГ ЦЕНТР</a>`,
            `<div class="about-author map-about_white">Ситников Дмитрий Андреевич</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 54.73962884,
        longitude: 55.96889619,
        hintContent: `<div class="map-hint"><span>г. Уфа</span><span>бульв. Ибрагимова, 86</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис УФА</a>`,
            `<div class="about-author map-about_white">Терентьева Вероника Владиславовна</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 56.03409679,
        longitude: 92.88591985,
        hintContent: `<div class="map-hint"><span>г. Красноярск</span><span>ул. Мужества, 8</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис КРАСНОЯРСК</a>`,
            `<div class="about-author map-about_white">Легушкин Иван Сергеевич</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 69.34619018,
        longitude: 88.21612958,
        hintContent: `<div class="map-hint"><span>г. Норильск</span><span>ул. Ломоносова, 5</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис НОРИЛЬСК</a>`,
            `<div class="about-author map-about_white">Зубенко Михаил Петрович</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
];

// marksBLR
let officeMarksBLR = [
    {
        latitude: 53.90736892,
        longitude: 27.54191635,
        hintContent: `<div class="map-hint"><span>г. Минск</span><span>ул. Мельникайте, 9</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис МИНСК</a>`,
            `<div class="about-author map-about_white">Токарева София Максимовна</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 53.88736416,
        longitude: 27.57485305,
        hintContent: `<div class="map-hint"><span>г. Минск</span><span>ул. Аранская, 13</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис МИНСК ЦЕНТР</a>`,
            `<div class="about-author map-about_white">Адриченко Марк Антонович</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 55.48663752,
        longitude: 28.78526198,
        hintContent: `<div class="map-hint"><span>г. Полоцк</span><span>ул. Войкова, 27</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис ПОЛОЦК</a>`,
            `<div class="about-author map-about_white">Птушкина Алена Владимировна</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 55.48633231,
        longitude: 28.76677571,
        hintContent: `<div class="map-hint"><span>г. Полоцк</span><span>Замковый пр-д, 2</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис ПОЛОЦК ЦЕНТР</a>`,
            `<div class="about-author map-about_white">Ионова Анна Дмитриевна</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 55.18349837,
        longitude: 30.22964289,
        hintContent: `<div class="map-hint"><span>г. Витебск</span><span>Смаленская вул., 55А</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис ВИТЕБСК</a>`,
            `<div class="about-author map-about_white">Вовк Матвей Константинович</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 52.09632563,
        longitude: 23.70418410,
        hintContent: `<div class="map-hint"><span>г. Брест</span><span>ул. Папанина, 8</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис БРЕСТ</a>`,
            `<div class="about-author map-about_white">Цимаковский Александр Викторович</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
    {
        latitude: 53.67880282,
        longitude: 23.83598013,
        hintContent: `<div class="map-hint"><span>г. Гродно</span><span>ул. Кирова, 26</span></div>`,
        balloonContent: [
            `<div>`,
            `<a href="#" class="about-name map-about_orange">Офис ГРОДНО</a>`,
            `<div class="about-author map-about_white">Берсенев Никита Сергеевич</div>`,
            `<div class="about-tel map-about_white">`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `<a href="tel:12345678">+7 (999) 222 22 22</a>`,
            `</div>`,
            `<a class="about-email"`,
            `href="mailto:useraname@flagstudio.ru">useraname@flagstudio.ru</a>`,
            `</div>`
        ]
    },
];

// f(officeMarks)
function getOfficeMarks(country) {
    function init() {
        let myMap = new ymaps.Map("map", {
            center: [61.60962035, 55.64761033],
            zoom: 4,
            controls: []
        });

        getCircle();

        let clusterWhiteNumber = ymaps.templateLayoutFactory.createClass(
            `<div style="color: #FFFFFF; font-weight:
           bold;">{{ properties.geoObjects.length }}</div>`);

        let officeCluster = new ymaps.Clusterer({
            clusterIcons: [
                {
                    href: 'сircle.png',
                    size: [24, 24],
                    offset: [-12, -12]
                }
            ],
            clusterIconContentLayout: clusterWhiteNumber
        });

        officeCluster.events.add('click', e => {
            e.get('target').options.set('iconImageHref', 'сircleBorder.png');
        });

        myMap.geoObjects.add(officeCluster);
        officeCluster.add(country);
    }

    function getCircle() {
        for (let i = 0; i < country.length; i++) {
            country[i] = new ymaps.Placemark([country[i].latitude, country[i].longitude],
                {
                    hintContent: country[i].hintContent,
                    balloonContent: country[i].balloonContent.join(''),
                    preset: 'islands#blueIcon'
                },
                {
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: 'сircle.png',
                    iconImageSize: [15, 15],
                    iconImageOffset: [-8, -10],
                    hideIconOnBalloonOpen: false,
                }
            );
        }
    }
    ymaps.ready(init);
}

// CHANGE country: officeMarksRU or officeMarksBLR
getOfficeMarks(officeMarksRU);

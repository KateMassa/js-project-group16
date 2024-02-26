import resources from './resources.js';

function createResourceCard(resource, index) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const link = document.createElement('a');
    link.href = resource.url;
    link.target = '_blank';

    const icon = document.createElement('img');
    icon.src = resource.imgSrc;
    icon.srcset = resource.imgSrcset;
    icon.alt = resource.alt;

    const title = document.createElement('div');
    title.textContent = resource.title;

    const number = document.createElement('div');
    number.textContent = index + 1;

    link.appendChild(icon);
    link.appendChild(title);
    slide.appendChild(number);
    slide.appendChild(link);

    return slide;
}

function appendResourcesToSwiper() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    resources.forEach((category, categoryIndex) => {
        const categoryContainer = document.createElement('div');
        category.forEach((resource, resourceIndex) => {
            const card = createResourceCard(resource, resourceIndex);
            categoryContainer.appendChild(card);
        });
        swiperWrapper.appendChild(categoryContainer);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    appendResourcesToSwiper();

    const swiperContainer = document.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

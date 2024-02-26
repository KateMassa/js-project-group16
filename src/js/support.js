import resources from './resources.js';

function createResourceCard(resource) {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const link = document.createElement('a');
    link.href = resource.url;
    link.textContent = resource.title;
    link.target = '_blank';

    slide.appendChild(link);
    return slide;
}

function appendResourcesToSwiper() {
    const resourceList = document.getElementById('resource-list');
    const swiperWrapper = resourceList.parentElement;
    resources.forEach(category => {
        const categoryContainer = document.createElement('div');
        category.forEach(resource => {
            const card = createResourceCard(resource);
            categoryContainer.appendChild(card);
        });
        swiperWrapper.appendChild(categoryContainer);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    appendResourcesToSwiper();

    const swiperContainer = document.getElementById('swiper-container');
    const swiper = new Swiper(swiperContainer, {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// item carousel for service page

const carousel2 = document.querySelector('.carousel-service');
const prevButton2 = carousel2.parentElement.querySelector('.prev');
const nextButton2 = carousel2.parentElement.querySelector('.next');

let currentIndex2 = 0;

function updateItemWidth() {
    const itemCount = window.innerWidth <= 600 ? 1 : 3; 
    return carousel2.offsetWidth / itemCount;
}

let itemWidth2 = updateItemWidth();
window.addEventListener('resize', () => {
    itemWidth2 = updateItemWidth();

    carousel2.style.transform = `translateX(-${currentIndex2 * itemWidth2}px)`;
});

nextButton2.addEventListener('click', () => {
    const maxIndex = window.innerWidth <= 600 ? carousel2.children.length - 1 : carousel2.children.length - 3;
    if (currentIndex2 < maxIndex) {
        currentIndex2++;
        carousel2.style.transform = `translateX(-${currentIndex2 * itemWidth2}px)`;
    }
});

prevButton2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
        carousel2.style.transform = `translateX(-${currentIndex2 * itemWidth2}px)`;
    }
});

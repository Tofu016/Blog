const container = document.querySelector('.container');

const images = [
    'images/background/a380.jpg',
    'images/background/AASIA.jpg',
    'images/background/CEB.jpg',
    'images/background/cloud-1.jpg',
    'images/background/MALAY.jpg',
    'images/background/PAL.jpg',
    'images/background/sky-1.jpg',
    'images/background/stars-1.jpg',
    'images/background/taal-1.jpg',
    'images/background/taal-2.jpg',
    'images/background/taal-3.jpg',
    'images/background/UNITE.jpg',
];

let currentIndex = 0;

function changeBackground() {
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.backgroundImage = `url('${images[currentIndex]}')`;
        container.style.opacity = 1;
        currentIndex = (currentIndex + 1) % images.length;
    }, 5000);
}

setInterval(changeBackground, 10000);

changeBackground();
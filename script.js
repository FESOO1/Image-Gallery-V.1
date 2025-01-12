const imageSources = ['https://images.unsplash.com/photo-1735809489088-ead6b62e5ac5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1736187273021-037146cd4258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1736164446087-cb6a49da51ae?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1736622893190-ed431dc6a2c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1735116356965-ad5b323d1af8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const imagesContainer = document.querySelector('.image-gallery-itself');
let imageCounter = 0;
let imageMargin = 0;

// DISPLAY IMAGES

function displayImages() {
    for (let i = 0; i < imageSources.length; i++) {
        const image = document.createElement('img');
        image.classList.add('image-source');
        image.src = imageSources[i];

        imagesContainer.appendChild(image);
    };

    imagesContainer.firstElementChild.classList.add('image-source-active');
};

// PREVIOUS PICTURE

prevButton.addEventListener('click', () => {
    const firstImage = imagesContainer.querySelector('img:first-child');
    const images = imagesContainer.querySelectorAll('img');
    imageMargin += 400;
    firstImage.style.marginLeft = imageMargin + 'px';
    images[imageCounter].classList.remove('image-source-active');
    imageCounter--;
    images[imageCounter].classList.add('image-source-active');
    nextButton.disabled = false;
    

    if (imageCounter === 0) {
        prevButton.disabled = true;
    };
});

// NEXT PICTURE

nextButton.addEventListener('click', () => {
    const firstImage = imagesContainer.querySelector('img:first-child');
    const images = imagesContainer.querySelectorAll('img');
    imageMargin -= 400;
    firstImage.style.marginLeft = imageMargin + 'px';
    images[imageCounter].classList.remove('image-source-active');
    imageCounter++;
    images[imageCounter].classList.add('image-source-active');
    prevButton.disabled = false;
    

    if (imageCounter === images.length - 1) {
        nextButton.disabled = true;
    };
});

// 
const firstImage = imagesContainer.querySelector('img:first-child');
imagesContainer.addEventListener('click', e => {
    e.target.classList.add('image-source-active');
});

// INITIALIZE BUTTONS
window.addEventListener('DOMContentLoaded', displayImages);
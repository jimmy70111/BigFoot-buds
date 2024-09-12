// JavaScript for Image Slider
let currentIndex = 0; // This variable keeps track of the currently displayed image index.
const images = document.querySelectorAll('.image-slider img'); // Select all the images in the slider

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active'); // Remove the 'active' class from all images
        if (i === index) {
            img.classList.add('active'); // Add the 'active' class to the current image
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Increment the currentIndex and loop back to 0 if it exceeds the last image
    showImage(currentIndex); // Call showImage to update the displayed image
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement the currentIndex and loop to the last image if it goes below 0
    showImage(currentIndex); // Call showImage to update the displayed image
}

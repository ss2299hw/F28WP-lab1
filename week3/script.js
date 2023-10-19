// 1. Declare a variable to track the current image index
let currentIndex = 0;

// 2. Declare an empty array for images
const images = [];

// 3. Set the time interval (in milliseconds)
const intervalTime = 2000; // Change this to your desired time interval

// 4. Create a function that populates the images array with image paths
function createImageList() {
  // Add image paths to the 'images' array
  images.push('image1.jpg');
  images.push('image2.jpg');
  images.push('image3.jpg');
  images.push('image4.jpg');
  // Add more image paths as needed
}

// Call the function to create the image list
createImageList();

// 5. Create a function to change the image source and toggle display
function changeImage() {
  // Get the 'slide' element by name
  const slide = document.getElementsByName('slide')[0];
  
  // Toggle display property to show/hide images
  slide.style.display = 'none'; // Hide the current image
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
  slide.style.display = 'block'; // Show the next image
}

// 6. Create a function to start the image slider
function startImageSlider() {
  changeImage(); // Display the first image
  setInterval(changeImage, intervalTime); // Change images at specified intervals
}

// 7. Run the function when the page loads
window.addEventListener('load', startImageSlider);

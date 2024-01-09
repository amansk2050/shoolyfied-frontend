// Select all input fields with the class "input-field"
const inputs = document.querySelectorAll(".input-field");

// Select all elements with the class "toggle"
const toggle_btn = document.querySelectorAll("#toggle");

// Select the main container element
const main = document.querySelector("main");

// Select all bullet elements within the class "bullets"
const bullets = document.querySelectorAll(".bullets span");

// Select all image elements with the class "image"
const images = document.querySelectorAll(".imagePop");

const box = document.querySelectorAll(".box");

// Add event listeners for input fields to add/remove the "active" class
inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

// Add event listeners to toggle buttons to switch sign-up and sign-in modes
toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("here")
    // var togle = document.querySelectorAll("#toggle");
    // toggle_btn.classList.remove("sign-up-mode");
    main.classList.toggle("sign-up-mode");
  });
});

// Function to move the slider and update the content based on bullet clicks
function moveSlider() {
  let index = this.dataset.value;

  // Select the current image based on the clicked bullet
  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  // Select the text slider and adjust its position based on the clicked bullet
  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  // Remove the "active" class from all bullets and add it to the clicked bullet
  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

// Add click event listeners to all bullet elements
bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});




// SCRIPTS FOR CAROUSAL AUTO CHANGE IMAGE
document.addEventListener("DOMContentLoaded", function () {
  // Define variables
  const images = document.querySelectorAll(".imagePop");
  const textGroups = document.querySelectorAll(".text-group h2");
  const bullets = document.querySelectorAll(".bullets span");

  let currentIndex = 0;

  // Function to show the current slide
  function showSlide(index) {
      // Hide all images and bullets
      images.forEach(image => image.classList.remove("show"));
      bullets.forEach(bullet => bullet.classList.remove("active"));
      textGroups.forEach(text => text.classList.remove("show"));

      // Show the current image, text, and update the bullet
      images[index].classList.add("show");
      textGroups[index].classList.add("show");
      bullets[index].classList.add("active");
  }

  // Function to switch to the next slide
  function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);
  }

  // Automatically switch slides every 0.5 seconds
  setInterval(nextSlide, 1500);

  // Event listener for bullet clicks
  bullets.forEach((bullet, index) => {
      bullet.addEventListener("click", function () {
          currentIndex = index;
          showSlide(currentIndex);
      });
  });
});

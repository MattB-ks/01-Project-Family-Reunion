const images = [
    "Images/Tree.jpg",
    "Images/Family group.jpg",
    "Images/Family meal.jpg",
  ];
  
const imageContainer = document.querySelector(".carousel-inner .active img");
const prevButton = document.querySelector(".carousel-control-prev");
const nextButton = document.querySelector(".carousel-control-next");
  
let currentIndex = 0;
  
const updateImage = () => {
    imageContainer.src = images[currentIndex];
  };
  
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image if needed
    updateImage();
  });
  
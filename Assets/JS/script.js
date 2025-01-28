/*----This Section of the script.js file is for NewsLetter Signup----*/

//setting up the variables
const signupBtn = document.querySelector('.btn');
const signupArray = [];


//this is a function to check if the email is valid pulled from google
function validateEmail(signupEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(signupEmail);
}

//this is the function to handle the prompt

//This is the event listener for the signupBtn, it is covered in Module 4 Activity 11
signupBtn.addEventListener('click', function () {
    //This is covered in Module 4 Activity 07
    let signupName = prompt('Please enter your full name to sign up for our newsletter', 'Name');
    let signupEmail = prompt('Please enter your email address to sign up for our newsletter', 'Email Address');

    
    if (!validateEmail(signupEmail)) {
        alert("Invalid email");
        return;
    }
    
    const user = {
        name: signupName,
        email: signupEmail
    }
    
    signupArray.push(user);

    localStorage.setItem('signupArray', JSON.stringify(signupArray));

    alert("Thank you for signing up for our newsletter");
    

});


//This is the function to add the signupName and signupEmail to the signupArray

const images = [
  "Assets/Images/Tree.jpg",
  "Assets/Images/1.jpg",
  "Assets/Images/Family group.jpg",
  "Assets/Images/2.jpg",
  "Assets/Images/Family meal.jpg",
  "Assets/Images/3.jpg",
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
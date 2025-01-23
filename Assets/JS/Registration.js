const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const plus1Input = document.querySelector('#plus1');
const submissionResponseEl = document.querySelector('#response');

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  const response =
    'Thank you for registering your party of ' +
    plus1Input.value +
    ', ' +
    nameInput.value +
    '! We will reach out to you at ' +
    emailInput.value +
    '.';
  submissionResponseEl.textContent = response;
}

// Add listener to submit element
submitEl.addEventListener('click', showResponse);
const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const plus1Input = document.querySelector('#plus1');
const submissionResponseEl = document.querySelector('#response');




function showResponse(event) {
  
  event.preventDefault();
  console.log(event);
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || plus1Input.value.trim()  === '') {
    alert('All fields are required.'); 
    return
  }
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

function clearFields() {
  
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("plus1").value = '';
  
}


submitEl.addEventListener('click', showResponse);

submitEl.addEventListener('click', clearFields);
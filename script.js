// selecting html elements
// attaching 'click listener'
// getting user entered value
// javascript validation

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if(emailValue.includes('e')) {
        // all good
        alert('thank you for your message');
    } else {
        alert('This does not look like a valid email address, please try again');
    }

})

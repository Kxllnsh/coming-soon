const form = document.querySelector('.landing-form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    //checking for invalid inputs
        if (email.value === '') {
            errorMessage.style.visibility = 'visible';
            return false;
        } else {
            errorMessage.style.visibility = 'hidden';
            return true;
        }
    //if all inputs are true submit data to the server
});




const emailInput = document.getElementById('email')
const submitButton = document.getElementById('submit')

function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

submitButton.addEventListener('click', () => {
    const email = emailInput.value;

    if(validateEmail(email) === false){
        emailInput.classList.add('invalid')
    }else{
        emailInput.classList.remove('invalid')
    }
})

email.addEventListener('input', () => {
    const email = emailInput.value;

    if(validateEmail(email) === false){
        emailInput.classList.add('invalid')
    }else{
        emailInput.classList.remove('invalid')
    }
})
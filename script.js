//SELECTORS
const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//EVENT LISTENERS
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswords(password, password2);
});


//FUNCTIONS

//Check Required Fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value ===''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

//Check input length
function checkLength(input, min, max){
   if(input.value.length < min){
       showError(input, `${getFieldName(input)} must be at least ${min} characters`);
   }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be shorter than ${max} characters`);
   }else{
       showSuccess(input);
   }
}

//Checking passwords match
function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match');
    }
}

//Validate email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid");
    }
}

//Get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//ShowError
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className ='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//ShowSuccess
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success';
}



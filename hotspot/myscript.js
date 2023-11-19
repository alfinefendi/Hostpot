let usernameField = document.querySelector('.username-field');
let passwordField = document.querySelector('.password-field');
let connectBtn = document.getElementById('connect-btn');

let username = document.querySelector('.username-input');
let password = document.querySelector('.password-input');


connectBtn.addEventListener('click', function(){
    

    username.value = usernameField.value;
    password.value = passwordField.value;

});







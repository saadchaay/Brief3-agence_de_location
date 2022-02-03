var inputs = Array.from(document.getElementsByClassName('input-sec'));
var small_cls = document.getElementsByClassName('small-cls');

var first_name = inputs[0];
var last_name = inputs[1];
var email = inputs[2];
var phone = inputs[3];
var message = inputs[4];

var popup_sec = document.getElementById('popup');
var info_form = document.getElementsByClassName('info-form');

// popup_sec.className = 'close-popup';

function displayInfo(e) {
    e.preventDefault();
    if(inputs[0].value != "" && 
        inputs[1].value != "" && 
            inputs[2].value != "" && 
                inputs[3].value != "" && 
                    inputs[4].value != "")
    { 
        info_form[0].textContent = first_name.value ;
        info_form[1].textContent = last_name.value ;
        info_form[2].textContent = email.value ;
        info_form[3].textContent = phone.value ;
        info_form[4].textContent = message.value ;
        popup_sec.className = 'popup-block' ;
    }
    else {
        alert('some field is empty !!');
    }
    
}

function closePopup() {
    popup_sec.className = 'Form_info-disabled' ;
    location.reload();
}

first_name.addEventListener('change', function() {
    validFname(this);
});

last_name.addEventListener('change', function() {
    validLname(this);
});

email.addEventListener('change', function() {
    validEmail(this);
});

phone.addEventListener('change', function() {
    validPhone(this);
});

const validPhone = function(phone) {
    let phoneRgx = new RegExp('^[0]{1}[5-8]{1}[0-9]{8}$','g');
    let testPhone = phoneRgx.test(phone.value);
    if(testPhone) {
        small_cls[3].innerHTML = "Phone number valid" ;
        small_cls[3].setAttribute('style','color: green;font-size:.6em;') ;
    }
    else {
        small_cls[3].innerHTML = "Phone number invalid" ;
        small_cls[3].setAttribute('style','color: red;font-size:.6em;') ;
    }
}

const validFname = function(first_name) {
    const regex = /\d/;
    let testNumbers = regex.test(first_name.value);
    return testNumbers ;
}

const validLname = function(last_name) {
    const regex = /\d/;
    let testNumbers = regex.test(last_name.value);
    return testNumbers ;
}

const validMessage = function(message) {
    const regex = new RegExp('^[a-zA-Z]{50,255}$','g');
    let testMsg = regex.test(message.textContent);
    return testMsg ;
}

const validEmail = function(email) {
    let emailRgx = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-z]{2,10}$','g');
    let testEmail = emailRgx.test(email.value);
    if(testEmail) {
        small_cls[2].innerHTML = "Email valid" ;
        small_cls[2].setAttribute('style','color: green;font-size:.6em;') ;
    }
    else {
        small_cls[2].innerHTML = "Email invalid" ;
        small_cls[2].setAttribute('style','color: red;font-size:.6em;') ;
    }
}

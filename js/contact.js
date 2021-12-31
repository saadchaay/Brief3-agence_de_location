var inputs = Array.from(document.getElementsByClassName('input-sec'));

var popup_sec = document.getElementById('popup');
var info_form = document.getElementsByClassName('info-form');

popup_sec.className = 'close-popup';

function displayInfo() {
    info_form[0].textContent = inputs[0].value ;
    info_form[1].textContent = inputs[2].value ;
    info_form[2].textContent = inputs[1].value ;
    info_form[3].textContent = inputs[3].value ;
    info_form[4].textContent = inputs[4].value ;
    popup_sec.className = 'inside-cont' ;
}

function closePopup() {
    popup_sec.className = 'close-popup' ;
}

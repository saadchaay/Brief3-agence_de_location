var inputs = Array.from(document.getElementsByClassName('input-sec'));

var popup_sec = document.getElementById('popup');
var info_form = document.getElementsByClassName('info-form');

popup_sec.className = 'close-popup';

function displayInfo() {
    if(inputs[0].value != "" && 
        inputs[1].value != "" && 
            inputs[2].value != "" && 
                inputs[3].value != "" && 
                    inputs[4].value != "")
    { 
        info_form[0].textContent = inputs[0].value ;
        info_form[1].textContent = inputs[2].value ;
        info_form[2].textContent = inputs[1].value ;
        info_form[3].textContent = inputs[3].value ;
        info_form[4].textContent = inputs[4].value ;
        popup_sec.className = 'inside-cont' ;
    }
    else {
        let new_elm = document.getElementById('error-elm');
        // new_elm.className = 'error-element' ;
    }
    
}

function closePopup() {
    let new_elm = document.getElementById('error-elm');
    new_elm.className = 'close-popup' ;
    popup_sec.className = 'close-popup' ;
}

window.alert("hello world");

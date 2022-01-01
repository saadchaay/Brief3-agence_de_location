const content = document.getElementById('content');
const compact = document.getElementById('compact-cars');
const utilit = document.getElementById('utilitaire-cars');
const moto = document.getElementById('moto-type');
const camion = document.getElementById('camion-cars');
const e_chantier = document.getElementById('e-chantier-cars');
const citadine = document.getElementById('citadine-cars');
const berline = document.getElementById('berline-cars');


let type_title = Array.from(document.getElementsByClassName('types'));

content.innerHTML = compact.innerHTML ;
type_title[0].className = 'list-cta';

type_title.map(type_cars => {
    type_cars.addEventListener('click', (ev) => {
        switch (ev.target.innerText) {
            case 'Compact':
                content.innerHTML = compact.innerHTML;
                type_title[1].className = '';
                type_title[2].className = '';
                type_title[3].className = '';
                type_title[4].className = '';
                type_title[5].className = '';
                type_title[6].className = '';
                type_title[0].className = 'list-cta';
                break;
            case 'Utility':
                content.innerHTML = utilit.innerHTML;
                type_title[0].className = '';
                type_title[2].className = '';
                type_title[3].className = '';
                type_title[4].className = '';
                type_title[5].className = '';
                type_title[6].className = '';
                type_title[1].className = 'list-cta';
                break;
            case 'Berlin':
                content.innerHTML = berline.innerHTML;
                type_title[0].className = '';
                type_title[1].className = '';
                type_title[3].className = '';
                type_title[4].className = '';
                type_title[5].className = '';
                type_title[6].className = '';
                type_title[2].className = 'list-cta';
                break;
            case 'Citadine':
                content.innerHTML = citadine.innerHTML;
                type_title[0].className = '';
                type_title[1].className = '';
                type_title[2].className = '';
                type_title[4].className = '';
                type_title[5].className = '';
                type_title[6].className = '';
                type_title[3].className = 'list-cta';
                break;
            case 'Construction machine':
                content.innerHTML = e_chantier.innerHTML;
                type_title[0].className = '';
                type_title[1].className = '';
                type_title[2].className = '';
                type_title[3].className = '';
                type_title[5].className = '';
                type_title[6].className = '';
                type_title[4].className = 'list-cta';
                break;
            case 'Trucks':
                content.innerHTML = camion.innerHTML;
                type_title[0].className = '';
                type_title[1].className = '';
                type_title[2].className = '';
                type_title[3].className = '';
                type_title[4].className = '';
                type_title[6].className = '';
                type_title[5].className = 'list-cta';
                break;
            case 'MotoCycle':
                content.innerHTML = moto.innerHTML;
                type_title[0].className = '';
                type_title[1].className = '';
                type_title[2].className = '';
                type_title[3].className = '';
                type_title[4].className = '';
                type_title[5].className = '';
                type_title[6].className = 'list-cta';
                break;
        }
    });
});



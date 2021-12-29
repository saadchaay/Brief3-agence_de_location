const content = document.getElementById('content');
const compact = document.getElementById('compact-cars');
const utilit = document.getElementById('utilitaire-cars');
const moto = document.getElementById('moto-type');
const camion = document.getElementById('camion-cars');
const e_chantier = document.getElementById('e-chantier-cars');
const citadine = document.getElementById('citadine-cars');
const berline = document.getElementById('berline-cars');


const type_cars = [compact, utilit, berline, citadine, e_chantier, camion, moto] ;
let type_title = Array.from(document.getElementsByClassName('types'));

content.innerHTML = type_cars[0].innerHTML ;

type_title.map(type_cars => {
    type_cars.addEventListener('click', (ev) => {
        switch (ev.target.innerText) {
            case 'Compact':
                content.innerHTML = compact.innerHTML;
                break;
            case 'Utilitaire':
                content.innerHTML = utilit.innerHTML;
                break;
            case 'Berline':
                content.innerHTML = berline.innerHTML;
                break;
            case 'Citadine':
                content.innerHTML = berline.innerHTML;
                break;
            case 'Engine de chantier':
                content.innerHTML = berline.innerHTML;
                break;
            case 'Camion':
                content.innerHTML = berline.innerHTML;
                break;
            case 'Moto':
                content.innerHTML = berline.innerHTML;
                break;
        }
    });
});

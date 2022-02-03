const icon_list = document.getElementById("icon-list");
const list = document.getElementById('list-cars');
const close_list = document.getElementById('close-list');

function displayListCars() {
    icon_list.className = "type-cars";
    list.className = "display-list";
    close_list.className = "open-list";
}

close_list.addEventListener('click', () => {
    icon_list.className = "cta-list";
    list.className = "type-cars";
    close_list.className = "close-cta";
})
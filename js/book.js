var price_vehicle = 0;
var fuel_val = 0 ;
var gearbox = "";
var res = 0;


var manual_gearbox = document.getElementById('manual_class');
var auto_gearbox = document.getElementById('auto_class');
var moto_gearbox = document.getElementById('moto_class');

var input_days = document.getElementById('num-days');
var vehicle_type = Array.from(document.getElementsByName('vehicle-type'));

// console.log(vehicles[0].textContent);

vehicle_type.map(cars => {
    cars.addEventListener('click', (ev) => {
        switch (ev.target.value) {
            case 'compact-box':
                if(vehicle_type[0].checked) {
                    // vehicle = cars.value ;
                    price_vehicle = 14;
                    gearbox = 'manual';
                    manual_gearbox.className = 'chose-gearbox' ;
                    auto_gearbox.className = '' ;
                    moto_gearbox.className = '' ;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'utility-box':
                if(vehicle_type[1].checked) {
                    // vehicle = cars.value ;
                    price_vehicle = 16;
                    gearbox = 'manual';
                    manual_gearbox.className = 'chose-gearbox' ;
                    auto_gearbox.className = '' ;
                    moto_gearbox.className = '' ;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'berline-box':
                if(vehicle_type[2].checked) {
                    // vehicle = cars.value ;
                    price_vehicle = 20;
                    gearbox = 'automatic';
                    auto_gearbox.className = 'chose-gearbox' ;
                    manual_gearbox.className = '' ;
                    moto_gearbox.className = '' ;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'citadine-box':
                if(vehicle_type[3].checked) {
                    // vehicle = cars.value ;
                    price_vehicle = 12;
                    gearbox = 'manual';
                    manual_gearbox.className = 'chose-gearbox' ;
                    auto_gearbox.className = '' ;
                    moto_gearbox.className = '' ;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'c-machine-box':
                if(vehicle_type[4].checked) {
                    // vehicle = cars.value ;
                    price_vehicle = 900;
                    gearbox = 'manual';
                    manual_gearbox.className = 'chose-gearbox' ;
                    auto_gearbox.className = '' ;
                    moto_gearbox.className = '' ;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'trucks-box':
                if(vehicle_type[5].checked) {
                    // vehicle = cars.value ;
                    price_vehicle = 250;
                    gearbox = 'automatic';
                    auto_gearbox.className = 'chose-gearbox' ;
                    manual_gearbox.className = '' ;
                    moto_gearbox.className = '' ;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'moto-box':
                if(vehicle_type[6].checked) {
                    // vehicle = cars.value ;
                    price_vehicle = 10;
                    gearbox = 'moto-cycle';
                    moto_gearbox.className = 'chose-gearbox' ;
                    auto_gearbox.className = '' ;
                    manual_gearbox.className = '' ;
                } else {
                    console.log("ERROR");
                }
                break;
        }
    });
});

var fuel_type = Array.from(document.getElementsByName('fuel-type'));

fuel_type.map(fuel => {
    fuel.addEventListener('click', (ev) => {
        switch (ev.target.value) {
            case 'electric':
                if(fuel_type[0].checked) {
                    fuel_val = 5;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'hybrid':
                if(fuel_type[1].checked) {
                    fuel_val = 9;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'gasoline':
                if(fuel_type[2].checked) {
                    fuel_val = 14;
                } else {
                    console.log("ERROR");
                }
                break;
            case 'diesel':
                if(fuel_type[3].checked) {
                    fuel_val = 21;
                } else {
                    console.log("ERROR");
                }
                break;
        }
    });
});

// var days_all = parseInt(input_days.value);

function getTotal(gearbox) {

    var total_price = 0;
    var res = 0;
    switch (gearbox) {
        case 'manual':
            total_price = price_vehicle + ( (price_vehicle * fuel_val) / 100 );
            // res = (total_price * parseInt(input_days.value));
            break;
        case 'automatic':
            total_price = price_vehicle + ( (price_vehicle * fuel_val) / 100 ) + ( (price_vehicle * 19) / 100);
            // res = (total_price * parseInt(input_days.value));
            break;    
        case 'moto-cycle':
            total_price = price_vehicle + ( (price_vehicle * fuel_val) / 100 );
            // res = (total_price * parseInt(input_days.value));
            break;
    }
    res = (total_price * parseInt(input_days.value));
    return res ;
};


function displayResult(){
    let result = document.getElementById('result');
    result.innerHTML = getTotal(gearbox) + "€";
    result.className = 'result-part';
};




const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    menu.style.display='flex';
    menu.style.top='0';
    menu.style.right='0';
}

function close() {
    menu.style.top='-100%';
}

// current date

let today = new Date();
let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`;
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let year = today.getFullYear();
let fullDate = year + ". " + month + ". " + day + ".";
document.getElementById("date-today").innerHTML = (fullDate);

// current weather

//http://api.weatherapi.com/v1/current.json?key=ff18cdecca3b4e9cb4e221043210812&q=Budapest&api=no

let target = 'Budapest';

const fetchResults = async(targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=ff18cdecca3b4e9cb4e221043210812&q=${targetLocation}&api=no`;
    
    const res = await fetch(url);

    const data = await res.json();
    
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    
}

fetchResults(target);


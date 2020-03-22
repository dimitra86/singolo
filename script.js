const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

let images = document.querySelectorAll('.infinity-slider img');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');


}

slider();

document.querySelector('.btn-infinity-left').onclick = function() {
    if (current - 1 == -1) {
        current = images.length - 1;

    } else { current--; }
    slider();
    displayon();
}
document.querySelector('.btn-infinity-right').onclick = function() {
    if (current + 1 == images.length) {
        current = 0;

    } else { current++; }
    slider();
    displayon();
}


let pic = document.querySelectorAll('.black-screen img');
let number = 0;
let n1 = 0;


function displayoff() {
    for (let j = 0; j < pic.length; j++) {
        pic[j].classList.add('opacity1');
        n1++;
    }
}

function displayon() {
    for (let j = 0; j < pic.length; j++) {
        pic[j].classList.remove('opacity1');

    }
    n1 = 0;
}

function displaynone() {
    for (let j = 0; j < pic.length; j++) {
        pic[j].classList.add('displaynone');

    }
}

function displaynoneremove() {
    for (let j = 0; j < pic.length; j++) {
        pic[j].classList.remove('displaynone');

    }
}


document.querySelector('.bd-vertical').onclick = function() {
    if (n1 == 0) {
        displayoff();
    } else { displayon(); }
}

document.querySelector('.bd-horizontal').onclick = function() {
    if (n1 == 0) {
        displayoff();
    } else { displayon(); }
}
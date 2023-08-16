const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

let images = document.querySelectorAll('.infinity-slider div');
let imagesBlack = document.querySelectorAll('.black-screen');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
}

let btnInfinityLeft=document.querySelector('.btn-infinity-left');
let btnInfinityRight=document.querySelector('.btn-infinity-right');
let slider1=document.querySelector('.slider__1');



document.querySelector('.btn-infinity-left').onclick = function () {
    if (current - 1 == -1) {
        current = images.length - 1;

    } else { current--; }
    slider();
    displayon();
}
document.querySelector('.btn-infinity-right').onclick = function () {
    if (current - 1 == -1) {
        current = images.length - 1;

    } else { current--; }
    slider();
    displayon();
}

btnInfinityLeft.addEventListener('click', function (e) {
    // console.log(slider2.classList[1]);
    if (slider1.classList[1]=="opacity0"){
      pic[0].classList.add('displaynone');
      pic[1].classList.add('displaynone');
    }
    else{
        pic[0].classList.remove('displaynone');
        pic[1].classList.remove('displaynone');
    }
  });

  btnInfinityRight.addEventListener('click', function (e) {
    // console.log(slider2.classList[1]);
    if (slider1.classList[1]=="opacity0"){
      pic[0].classList.add('displaynone');
      pic[1].classList.add('displaynone');
    }
    else{
        pic[0].classList.remove('displaynone');
        pic[1].classList.remove('displaynone');
    }
  });
  

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


document.querySelector('.bd-vertical').onclick = function () {
    if (n1 == 0) {
        displayoff();
    } else { displayon(); }
}

document.querySelector('.bd-horizontal').onclick = function () {
    if (n1 == 0) {
        displayoff();
    } else { displayon(); }
}

const TAGS = document.getElementById('portolio__tags');

TAGS.addEventListener('click', (event) => {
    TAGS.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
    event.target.classList.add('tag_selected');
})

const PIC = document.getElementById('layout-4-column');

PIC.addEventListener('click', (event) => {
    PIC.querySelectorAll('img').forEach(el => el.classList.remove('foto_active'));
    event.target.classList.add('foto_active');
})

document.querySelector('#web').onclick = function () {

    replacedNode = PIC.replaceChild(PIC.children[1], PIC.children[0]);
    PIC.appendChild(replacedNode);

    replacedNode = PIC.replaceChild(PIC.children[8], PIC.children[4]);
    PIC.appendChild(replacedNode);
}

document.querySelector('#all').onclick = function () {

    replacedNode = PIC.replaceChild(PIC.children[4], PIC.children[8]);
    PIC.appendChild(replacedNode);

    replacedNode = PIC.replaceChild(PIC.children[1], PIC.children[6]);
    PIC.appendChild(replacedNode);
}

document.querySelector('#graphic').onclick = function () {

    replacedNode = PIC.replaceChild(PIC.children[2], PIC.children[10]);
    PIC.appendChild(replacedNode);

    replacedNode = PIC.replaceChild(PIC.children[7], PIC.children[2]);
    PIC.appendChild(replacedNode);
}

document.querySelector('#artwork').onclick = function () {

    replacedNode = PIC.replaceChild(PIC.children[5], PIC.children[11]);
    PIC.appendChild(replacedNode);

    replacedNode = PIC.replaceChild(PIC.children[12], PIC.children[9]);
    PIC.appendChild(replacedNode);
}

let send = document.querySelector('#send');
let subject = document.getElementById('subject').value;
let describe = document.getElementById('describe').value;

let work = 'work';
send.onclick = function (event) {
    event.preventDefault();
    if (document.getElementById('subject').value == '') {
        if (document.getElementById('describe').value == '') {
            alert(`Письмо отправлено \nБез темы\nБез описания`);
        } else {
            alert(`Письмо отправлено \nБез темы\nОписание:` + document.getElementById('describe').value);


        }
    } else if (document.getElementById('describe').value == '') {
        alert(`Письмо отправлено \nТема:` + document.getElementById('subject').value + '\nБез описания');
    } else { alert(`Письмо отправлено \nТема:` + document.getElementById('subject').value + '\nОписание:' + document.getElementById('describe').value); }


    // alert(`Письмо отправлено \nТема:\nОписание:` + subject);

}
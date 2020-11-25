function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


let info = document.querySelectorAll('.info');
let skills = document.querySelectorAll('.skills');
let certificate = document.querySelectorAll('.certificate');
let mail = document.querySelector('.mail');

mail.addEventListener('mouseover', function() {
    let myPopup = document.querySelector('.popuptext');
    myPopup.classList.add('show');
});

mail.addEventListener('mouseout', function() {
    let myPopup = document.querySelector('.popuptext');
    myPopup.classList.remove('show');
});

function hoverShow() {
    for (let i = 0; i < info.length; i++) {
        info[i].classList.toggle('hover');
    }
    for (let i = 0; i < skills.length; i++) {
        skills[i].classList.toggle('hover');
    }
    for (let i = 0; i < certificate.length; i++) {
        certificate[i].classList.toggle('hover');
    }
}


let mypicture = document.querySelectorAll('.mypicture');
let about = document.querySelector('.mypicture__about');


function removeClass() {
    for (let i = 0; i < mypicture.length; i++) {
        mypicture[i].classList.toggle('center');
    }
}


about.addEventListener('click', removeClass);
about.addEventListener('click', hoverShow);
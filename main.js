let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let image = document.querySelector('img');

image.onclick = function() {
    let src = image.getAttribute('src');
    if (src === 'images/firefox-icon.png') {
        image.setAttribute('src', './img/stock-photo-kiev-ukraine-april-firefox-logotype-printed-on-paper-firefox-operating-system-for-281363948.jpg');
    } else {
        image.setAttribute('src', './img/logo-firefox.png');
    }
}

let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function SetUserName() {
    let myName = prompt('Please, enter your name:');
    if (!myName) {
        SetUserName();
    }
    else {
        localStorage.setItem('name', myName);
        heading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

btn.onclick = function() {
    SetUserName();
}

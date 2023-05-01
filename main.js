let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let image = document.querySelector('img');

image.onclick = function() {
    let src = image.getAttribute('src');
    if (src === 'images/firefox-icon.png') {
        image.setAttribute('src', 'images/chrome-icon.png');
    } else {
        image.setAttribute('src', 'images/firefox-icon.png');
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

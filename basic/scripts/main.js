const puppiesImage = document.querySelector('img');

puppiesImage.onclick = () => {
    const src = puppiesImage.getAttribute('src');
    if(src === 'images/golden-puppies.webp') {
        puppiesImage.setAttribute('src', 'images/english-bulldogs.jpg');
    } else {
        puppiesImage.setAttribute('src', 'images/golden-puppies.webp');
    }
}

const title = document.querySelector('h1');
const button = document.querySelector('button');

function setUserName () {
    const name = prompt('Enter your name:');
    if(name) {
        localStorage.setItem('name', name);
        title.textContent = `Welcome to the Puppy Gallery, ${name}!`;
    } else {
        title.textContent = 'Welcome to the Puppy Gallery!';
    }
}

var username = localStorage.getItem('name');
if(username) {
    title.textContent = `Welcome to the Puppy Gallery, ${username}!`;
}

button.onclick = setUserName
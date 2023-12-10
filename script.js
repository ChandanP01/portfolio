// Setup and start animation!
var typed = new Typed('.text-1', {
    strings: ['Chandan Kumar Parida'],
    typeSpeed: 80,
});
var typed = new Typed('.text-2', {
    strings: ['A Learning Programmer', 'A Passionate Web Developer'],
    typeSpeed: 80,
});

// Function to the about section
let tabLinks = document.getElementsByClassName('tab-links')
let tabContents = document.getElementsByClassName('tab-contents')
function opentab(tabName) {
    for (const tabLink of tabLinks) {
        tabLink.classList.remove('active-link')
    }
    for (const tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add('active-tab');
}

// Function for the menu icon
let sidemenu = document.querySelector('#sidemenu')
function openMenu() {
    sidemenu.style.right = "0"
}
function closeMenu() {
    sidemenu.style.right = "-200px"
}


// Script for google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYiEFN1r7vW4khCzXTf_bvGT4IF3KKXwqS1lZ1w8YHXqFnq_B4LBFiEh6v633SsXCs/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.style.display = "block"
            setTimeout(() => {
                msg.style.display = "none"
            }, 6000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

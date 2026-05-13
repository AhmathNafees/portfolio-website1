let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const texts = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer'];
let index = 0;       // which string
let charIndex = 0;   // which character
let isDeleting = false;
const span = document.querySelector('.multiple-text');

function typeEffect() {
  const currentText = texts[index];

  if (isDeleting) {
    span.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % texts.length; // move to next string
    }
  } 
  else {
    span.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); //deleting vs typing speed , this line making a loop
}

typeEffect();

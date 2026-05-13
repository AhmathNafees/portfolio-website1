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
// Multitext Effect
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

// Readmore btn toggle

const shortText = `Full‑stack developer with hands‑on experience in building responsive web and mobile applications using modern technologies like HTML/CSS, JavaScript, PHP, React, Node.js, and Firebase. Skilled in UI/UX design, debugging, and project collaboration, with a strong academic foundation from Rajarata University of Sri Lanka.`;

const longText = `I am a motivated full‑stack developer with a Bachelor’s degree in Information and Communication Technology from Rajarata University of Sri Lanka, experienced in both web and mobile application development. My internship at NEOM Global Group allowed me to design and customize WordPress‑based systems, create responsive interfaces with HTML, CSS, and JavaScript, and contribute to UI/UX design and troubleshooting. I have successfully built projects such as a Student Management System (PHP/MySQL), a Customer Management System (MERN stack with JWT authentication), and a Pharmacy Mobile App (Firebase integration). With technical expertise in React, Node.js, SQL, and Bootstrap, combined with certifications in DevOps, Flutter, and Java OOP, I bring strong problem‑solving, teamwork, and project management skills to every project.`;

const aboutText = document.getElementById('about-text');
const toggleBtn = document.getElementById('toggle-btn-about');

toggleBtn.addEventListener('click', () => {
  if (toggleBtn.textContent === 'Read More') {
    aboutText.textContent = longText;
    aboutText.classList.remove('collapsed');
    aboutText.classList.add('expanded');
    toggleBtn.innerHTML = '&#9650;'; // ▲ up arrow
  } else {
    aboutText.textContent = shortText;
    aboutText.classList.remove('expanded');
    aboutText.classList.add('collapsed');
    toggleBtn.textContent = 'Read More';
  }
});


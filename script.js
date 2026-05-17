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

// About me Readmore btn toggle

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

// Web development Readmore btn toggle

const web_shortText=`I build responsive, secure, and scalable websites using modern technologies like HTML, CSS, JavaScript, PHP, and React.`;

const web_longtext=`I specialize in creating dynamic web applications tailored to client needs, from simple landing pages to complex CRUD systems. My expertise includes front‑end frameworks (React, Bootstrap), back‑end development with PHP/MySQL, and integration with Firebase for real‑time functionality. I focus on clean code, performance optimization, and security best practices, ensuring every project is both user‑friendly and maintainable.`;

const webText = document.getElementById('web-dev-text');
const webBtn = document.getElementById('toggle-btn-web-dev');

webBtn.addEventListener('click',() => {
  if(webBtn.textContent === 'Read More'){
    webText.textContent = web_longtext;
    webText.classList.remove('collapsed');
    webText.classList.add('expanded');
    webBtn.innerHTML = '&#9650';
  }
  else{
    webText.textContent = web_shortText;
    webText.classList.remove('expanded');
    webText.classList.add('collapsed');
    webBtn.innerHTML = 'Read More';
  }

});

// UI/UX Readmore btn toggle
const ui_shortext = `I design intuitive, user‑focused interfaces that enhance usability and deliver engaging digital experiences.`;
const ui_longtext= `My UI/UX design process combines creativity with research to craft interfaces that are visually appealing and easy to navigate. I work on wireframes, prototypes, and responsive layouts, ensuring consistency across devices. With a strong eye for detail, I balance aesthetics and functionality, applying principles of accessibility and user psychology to improve interaction flow. The result is a seamless experience that keeps users engaged and satisfied.`;

const uiText = document.getElementById('ui-ux-text');
const uiBtn = document.getElementById('toggle-btn-ui');

uiBtn.addEventListener('click',()=>{
  if(uiBtn.textContent === 'Read More'){
    uiText.textContent= ui_longtext;
    uiText.classList.remove('collapsed');
    uiText.classList.add('expanded');
    uiBtn.innerHTML = '&#9650';
  }
  else{
    uiText.textContent = ui_shortext;
    uiText.classList.remove('expanded');
    uiText.classList.add('collapsed');
    uiBtn.innerHTML= 'Read More';
  }
});
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  
  body.classList.toggle('dark');
  
  // Change the icon based on the current theme
  if (body.classList.contains('dark')) {
      themeIcon.src = 'sun-icon-url.png';  // Replace with the URL for your sun icon
  } else {
      themeIcon.src = 'moon-icon-url.png'; // Replace with the URL for your moon icon
  }
}





const dynamicText1 = document.querySelector("p span");
const words1 = ["Full Stack Web Devloper","Coffe Lover","System Designer","Vloger"];
let wordIndex1 = 0;
let charIndex1 = 0;
let isDeleting1 = false;


const typeEffec1 = () => {
  const currentWor1 = words1[wordIndex1];
  const currentChar1 = currentWor1.substring(0,charIndex1);
  dynamicText1.textContent = currentChar1;

  if(!isDeleting1  && charIndex1 < currentWor1.length) {
    charIndex1 ++;
    setTimeout(typeEffec1,60);
  } else if(isDeleting1  && charIndex1 > 0) {
    charIndex1 --;
    setTimeout(typeEffec1,100);
  } else {
    isDeleting1 = !isDeleting1;
    wordIndex1 = !isDeleting1 ? (wordIndex1 + 1) % words1.length : wordIndex1; 
    setTimeout(typeEffec1,400);
  }
} 

typeEffec1();
const dynamicText = document.querySelector("h3 span");

const words = ["Full Stack Web Devloper","Coffe Lover","System Designer","Vloger"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0,charIndex);
  dynamicText.textContent = currentChar;

  if(!isDeleting  && charIndex < currentWord.length) {
    charIndex ++;
    setTimeout(typeEffect,60);
  } else if(isDeleting  && charIndex > 0) {
    charIndex --;
    setTimeout(typeEffect,100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex; 
    setTimeout(typeEffect,300);
  }
} 

typeEffect();


const dynamicTextt = document.querySelector("h6 span");

const wordsss = ["#GitHub","#linkdIn ","#Instagram","#Facebook","#Twitter"];
let wordIndexx = 0;
let charIndexx = 0;
let isDeletingg = false;


const typeEffectt = () => {
  const currentWordd = wordsss[wordIndexx];
  const currentCharr = currentWordd.substring(0,charIndexx);
  dynamicTextt.textContent = currentCharr;

  if(!isDeletingg  && charIndexx < currentWordd.length) {
    charIndexx ++;
    setTimeout(typeEffectt,200);
  } else if(isDeletingg  && charIndexx > 0) {
    charIndexx --;
    setTimeout(typeEffectt,100);
  } else {
    isDeletingg = !isDeletingg;
    wordIndexx = !isDeletingg ? (wordIndexx + 1) % wordsss.length : wordIndexx; 
    setTimeout(typeEffectt,300);
  }
} 

typeEffectt();
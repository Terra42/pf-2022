const pfElm = document.querySelector('.pf');
const containerElm = document.querySelector('#container');
const buttonElm = document.querySelector('#button');
const beamElm = document.querySelector('#beam');
const newYearElm = document.querySelector('#new-year');
const oldYearElm = document.querySelector('#old-year');
const messageElm = document.querySelector('#message');

const startAnimation = () => {
  beamElm.classList.add('beam-rotate');
  newYearElm.classList.add('new-year-animate');
  oldYearElm.classList.add('old-year-animate');
  setTimeout(() => {
    confetti({ spread: 180 });
    pfElm.classList.add('color-mode');
    buttonElm.style.visibility = 'hidden';
    messageElm.style.visibility = 'visible';
  }, 2000);
};

buttonElm.addEventListener('click', startAnimation);

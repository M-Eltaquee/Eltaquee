// statics number filling on scroll
const stats = document.getElementById('stats');
const elems = document.querySelectorAll('#stats .content .box h3');
let proceed = false;

window.addEventListener('scroll', function () {
  if (this.scrollY >= stats.offsetTop && !proceed) {
    elems.forEach((elem) => fillIn(elem));
    proceed = true;
  }
});
function fillIn(elem) {
  let max = elem.dataset.goal;
  let setint = setInterval(function () {
    elem.textContent++;
    if (elem.textContent === max) {
      clearInterval(setint);
    }
  }, 1000 / max);
}
// skills bars on scrolling
const skillsSection = document.getElementById('skills');
const skillElements = document.querySelectorAll('#skills .skill');
window.addEventListener('scroll', function () {
  if (this.scrollY >= skillsSection.offsetTop) {
    skillElements.forEach((elem) => fillBar(elem));
  }
});
function fillBar(elem) {
  let progress = elem.firstElementChild.dataset.progress;
  elem.lastElementChild.firstElementChild.style.width = progress;
}

// counter time
const timerSection = document.getElementById('events');
const daysCounter = document.getElementById('days-counter');
const hoursCounter = document.getElementById('hours-counter');
const minutesCounter = document.getElementById('minutes-counter');
const secondsCounter = document.getElementById('seconds-counter');

// end OF Year
let countTill = new Date('12-31-2022 23:59:59').getTime();
// set interval to counter
let setCounter = setInterval(function () {
  // count from time of viewing the page
  let countFrom = new Date().getTime();
  let difference = countTill - countFrom;
  //   // seconds
  //   let seconds = Math.floor(difference / 1000);

  // days
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  daysCounter.textContent = days < 10 ? '0' + days : days;
  // hours
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hoursCounter.textContent = hours < 10 ? '0' + hours : hours;
  // minutes
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  minutesCounter.textContent = minutes < 10 ? '0' + minutes : minutes;
  // seconds
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  secondsCounter.textContent = seconds < 10 ? '0' + seconds : seconds;
  if (difference > 0) {
    clearInterval(setCounter);
  }
}, 1000);

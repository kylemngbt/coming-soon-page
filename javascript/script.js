let countDownDate = new Date("Nov 24, 2025 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days").textContent = days;
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#seconds").textContent = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#days").textContent = "00";
    document.querySelector("#hours").textContent = "00";
    document.querySelector("#minutes").textContent = "00";
    document.querySelector("#seconds").textContent = "00";
  }

}, 1000)
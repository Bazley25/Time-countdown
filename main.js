const final_date = "25 Jun 2022";
const daysdiv = document.getElementById("days");
const hoursdiv = document.getElementById("hours");
const minutesdiv = document.getElementById("minutes");
const secoundsdiv = document.getElementById("secounds");

function countdown() {
  const expect_date = new Date(final_date);
  const currentdate = new Date();

  const time_count = (expect_date - currentdate) / 1000;

  const days = Math.floor(time_count / 3600 / 24);
  const hours = Math.floor((time_count / 3600) % 24);
  const minutes = Math.floor((time_count / 60) % 60);
  const seconds = Math.floor(time_count) % 60;

  daysdiv.innerHTML = days;
  hoursdiv.innerHTML = hours;
  minutesdiv.innerHTML = minutes;
  secoundsdiv.innerHTML = seconds;

  console.log(days, hours, minutes, secounds);
}

countdown();
setInterval(countdown, 1000);

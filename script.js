const background = document.getElementById("background");

function Clock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;

  change_background(hours);
}

function change_background(hours) {
  let gradient;

  if (hours >= 5 && hours < 11) {
    gradient = "linear-gradient(to right, #ff7e5f, #feb47b)";
  } else if (hours >= 11 && hours < 16) {
    gradient = "linear-gradient(to bottom, #4e54c8, #8f94fb, #ffffff)";
  } else if (hours >= 16 && hours < 19) {
    gradient = "linear-gradient(to right, #ff9966, #ff5e62)";
  } else {
    gradient = "linear-gradient(to bottom, #141e30, #243b55)";
  }

  background.style.background = gradient;
}

setInterval(Clock, 1000);
Clock();
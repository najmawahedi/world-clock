function settingintervalNewYork() {
  let NewYorkDate = document.querySelector("#NewYorkDate");
  NewYorkDate.innerHTML = moment.tz("America/New_York").format("MMMM Do YYYY");

  let NewYorkTime = document.querySelector("#NewYorkTime");
  NewYorkTime.innerHTML = moment.tz("America/New_York").format("h:mm:ss");

  let NewYorkAMPM = document.querySelector("#NewYorkAMPM");
  NewYorkAMPM.innerHTML = moment.tz("America/New_York").format("A");
}

setInterval(settingintervalNewYork, 1000);

function updateClock(timezone, userTimezone) {
  let now = moment.tz(timezone);

  document.getElementById("displayCity").textContent = timezone.includes("/")
    ? timezone.split("/")[1].replace("_", " ")
    : "Current Location";

  document.getElementById("displayDate").textContent =
    now.format("MMMM Do YYYY");
  document.getElementById("displayTime").textContent = now.format("h:mm:ss");
  document.getElementById("displayAMPM").textContent = now.format("A");

  let currentTimeContainer = document.getElementById("currentTime");

  if (timezone !== userTimezone) {
    currentTimeContainer.style.backgroundColor = "#f0f0f0";
    currentTimeContainer.style.border = "1px solid #ccc";
    currentTimeContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

    currentTimeContainer.style.padding = "5px 30px";
    currentTimeContainer.style.borderRadius = "5px";
  } else {
    currentTimeContainer.style.backgroundColor = "";
    currentTimeContainer.style.border = "";
    currentTimeContainer.style.boxShadow = "";
    currentTimeContainer.style.padding = "";
    currentTimeContainer.style.borderRadius = "";
  }
}

function initializeClock() {
  let userTimezone = moment.tz.guess();
  updateClock(userTimezone, userTimezone);

  setInterval(() => {
    let selectedTimezone = document.getElementById("citySelect").value;
    updateClock(
      selectedTimezone === "default" ? userTimezone : selectedTimezone,
      userTimezone
    );
  }, 1000);
}

document.getElementById("citySelect").addEventListener("change", () => {
  let selectedTimezone = document.getElementById("citySelect").value;
  updateClock(
    selectedTimezone === "default" ? moment.tz.guess() : selectedTimezone,
    moment.tz.guess()
  );
});

window.onload = initializeClock;

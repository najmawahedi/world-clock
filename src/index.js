function settingintervalNewYork() {
  let newyork = document.querySelector("#newYork");
  newyork.innerHTML = moment.tz("America/New_York").format("MMMM Do YYYY");

  let newYorktime = document.querySelector("#newYorktime");
  newYorktime.innerHTML = moment.tz("America/New_York").format("h:mm:ss");

  let amnewYorktime = document.querySelector("#amnewYorktime");
  amnewYorktime.innerHTML = moment.tz("America/New_York").format("A");
}

setInterval(settingintervalNewYork, 1000);

function settingintervalBerlin() {
  let berlin = document.querySelector("#berlin");
  berlin.innerHTML = moment.tz("Europe/Berlin").format("MMMM Do YYYY");

  let berlintime = document.querySelector("#berlintime");
  berlintime.innerHTML = moment.tz("Europe/Berlin").format("h:mm:ss");

  let amberlintime = document.querySelector("#amberlintime");
  amberlintime.innerHTML = moment.tz("Europe/Berlin").format("A");
}

setInterval(settingintervalBerlin, 1000);

function settingintervalSoul() {
  let seoul = document.querySelector("#seoul");
  seoul.innerHTML = moment.tz("Asia/Seoul").format("MMMM Do YYYY");

  let seoultime = document.querySelector("#seoultime");
  seoultime.innerHTML = moment.tz("Asia/Seoul").format("h:mm:ss");

  let amseoultime = document.querySelector("#amseoultime");
  amseoultime.innerHTML = moment.tz("Asia/Seoul").format("A");
}

setInterval(settingintervalSoul, 1000);

function updatetime(event) {
  let selectedcity;

  if (event) {
    selectedcity = event.target.value;
  } else {
    selectedcity = document.querySelector("#cities").value;
  }

  // Ensure the selected city is valid before updating the time
  if (selectedcity && selectedcity !== "Select a city") {
    let cityname = selectedcity.replace("_", " ").split("/")[1];
    let citytime = moment.tz(selectedcity);
    let cityelement = document.querySelector("#innerhtml");
    cityelement.innerHTML = `<div id="firstcity">
          <h2>
            ${cityname}
            <div id="newYork" class="date">${citytime.format(
              "MMMM Do YYYY"
            )}</div>
          </h2>

          <div class="clock">
            <span id="citytime">${citytime.format("h:mm:ss")}</span>
            <span id="amnewYorktime" class="am">${citytime.format("A")}</span>
          </div>
        </div>`;
  }
}

let cityselectelement = document.querySelector("#cities");
cityselectelement.addEventListener("change", updatetime);

// Update the time every second only if a valid city is selected
setInterval(() => {
  updatetime();
}, 1000);

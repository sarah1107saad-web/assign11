const aPiUrl = "https://api.nasa.gov/planetary/apod?api_key=VH0JGXBzFYiBLPnWKaLvS1wp5fc7XeA5lVgId7zB";
fetch(aPiUrl)
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        document.getElementById("apod-image").src = data.url;
        document.getElementById("apod-title").textContent = data.title;
        document.getElementById("apod-date").textContent = data.date;
        document.getElementById("apod-date-detail").src = data.date;
        document.getElementById("apod-explanation").textContent = data.explanation;
        document.getElementById("apod-copyright").textContent = data.copyright || "NASA"
        document.getElementById("apod-date-info").textContent = data.date;
document.getElementById("apod-media-type").textContent = data.media_type;
const dateInput = document.getElementById("apod-date-input");
const loadDateBtn = document.getElementById("load-date-btn");
loadDateBtn.addEventListener("click", () => 
  const selectedDate = dateInput.value;
  const dateApiUrl = `https://api.nasa.gov/planetary/apod?api_key=YOUR_NEW_API_KEY&date=${selectedDate}`;
  fetch(dateApiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById("apod-image").src = data.url;
    document.getElementById("apod-title").textContent = data.title;
    document.getElementById("apod-date").textContent = data.date;
    document.getElementById("apod-date-detail").textContent = data.date;
    document.getElementById("apod-explanation").textContent = data.explanation;
    document.getElementById("apod-copyright").textContent =
      data.copyright || "NASA";
    document.getElementById("apod-date-info").textContent = data.date;
    document.getElementById("apod-media-type").textContent = data.media_type;



const launchesApiUrl =
  "https://ll.thespacedevs.com/2.3.0/launches/upcoming/?limit=10";

const featuredLaunch = document.getElementById("featured-launch");

fetch(launchesApiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const launches = data.results;

    featuredLaunch.innerHTML = "";

    launches.forEach(launch => {
      console.log(launch);
    });
  })
  .catch(error => {
    console.log("Launches Error:", error);
    const card = featuredLaunch.firstElementChild.cloneNode(true);

const title = card.querySelector("h3");

if (title) {
  title.textContent = launch.name;
}

const spans = card.querySelectorAll("span");

if (spans.length > 1) {
  spans[1].textContent = launch.status?.name || "Unknown";
}

const image = card.querySelector("img");

if (image && launch.image) {
  image.src = launch.image;
}

const description = card.querySelector("p");

if (description && launch.mission?.description) {
  description.textContent = launch.mission.description;
}

featuredLaunch.appendChild(card);
  });
    });

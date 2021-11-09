import Map from "./src/map.js";
import getLocation from "./src/geolocation.js";
import Vendors from "./src/data.js";
import config from "./config.js";

import "./node_modules/bulma/css/bulma.min.css";
import "./node_modules/leaflet/dist/leaflet.css";
import "./src/css/styles.css";

const appConfig = config();
const ACCESS_TOKEN = appConfig.access_token;

// add latitude and longitude results to
// the form fields
getLocation("name", "latitude", "longitude");

let locations = [];
const markers = locations.length > 0 ? locations : Vendors;

const leafletMap = Map(ACCESS_TOKEN, "map", 15);
// make Victoria, BC the default centre of the map
// since the datd is for food trucks in that city
leafletMap.init([48.4284, -123.3656], markers);

//
const addMarker = (e) => {
  locations.push({
    name: document.getElementById("name").value,
    lat: document.getElementById("latitude").value,
    lon: document.getElementById("longitude").value,
  });
  leafletMap.update(locations);
  document.getElementById("name").value = "";
  document.getElementById("latitude").value = "";
  document.getElementById("longitude").value = "";
};

const resetMap = () => {
  locations = [];
  getLocation("name", "latitude", "longitude");
  leafletMap.reset([48.4284, -123.3656], 15);
};

const getCurrentLocation = () => {
  getLocation("name", "latitude", "longitude");
};

document.querySelector("#app").innerHTML = `
  <div class="field is-grouped">
    <div class="control">
      <button id="add" class="button is-link">Add Marker</button>
    </div>
    <div class="control">
      <button id="reset" class="button is-link is-light">Reset</button>
    </div>
    <div class="control">
      <button id="getLocation" class="button is-link is-success">Get Location</button>
    </div>
  </div>
`;

// Add Marker and Reset Buttons
document.getElementById("add").addEventListener("click", addMarker);
document.getElementById("reset").addEventListener("click", resetMap);
document
  .getElementById("getLocation")
  .addEventListener("click", getCurrentLocation);

import Map from "./src/map.js";
import getLocation from "./src/geolocation.js";
import Vendors from "./src/data.js";
import config from "./config.js";

import "./node_modules/bulma/css/bulma.min.css";
import "./node_modules/leaflet/dist/leaflet.css";
import "./src/css/styles.css";

const appConfig = config();
const ACCESS_TOKEN = appConfig.access_token;

getLocation("latitude", "longitude");
let locations = [];
const markers = locations.length > 0 ? locations : Vendors;

const leafletMap = Map(ACCESS_TOKEN, "map", [48.4284, -123.3656], 15);
leafletMap.init(markers);

//
const addMarker = (e) => {
  locations.push({
    name: document.getElementById("name").value,
    lat: document.getElementById("latitude").value,
    lon: document.getElementById("longitude").value,
  });
  console.log(locations);
};

const resetMap = (e) => {
  locations = [];
  getLocation("latitude", "longitude");
  leafletMap.reset();
};

document.querySelector("#app").innerHTML = `
  <div class="field is-grouped">
    <div class="control">
      <button id="add" class="button is-link">Add Marker</button>
    </div>
    <div class="control">
      <button id="reset" class="button is-link is-light">Reset</button>
    </div>
  </div>
`;

document.getElementById("add").addEventListener("click", addMarker);
document.getElementById("reset").addEventListener("click", resetMap);

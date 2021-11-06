import Map from "./src/map.js";
import Vendors from "./src/data.js";
import config from "./config.js";

import "./node_modules/bulma/css/bulma.min.css";
import "./node_modules/leaflet/dist/leaflet.css";
import "./src/css/styles.css";

const appConfig = config();
const ACCESS_TOKEN = appConfig.access_token;

let vendors = Vendors;

// Instantiate Map
const leafletMap = Map;
leafletMap(ACCESS_TOKEN, "map", 48.4284, -123.3656, 15, vendors);

//
const addMarker = (e) => {
  console.log("add a marker");
  let lat = document.getElementById("latitude").value;
  console.log(lat);
};

document.querySelector("#app").innerHTML = `
<button id="add" class="button is-link">
Add Marker
</button>
`;

document.getElementById("add").addEventListener("click", addMarker);

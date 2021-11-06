import L from "leaflet";

const Map = (token, el, lat, lon, zoom, vendors) => {
  // set up map with centering coordinates
  const map = L.map(el).setView([lat, lon], zoom);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: token,
    }
  ).addTo(map);

  // add markers at locations specified in vendors array
  let marker = function () {
    for (let index = 0; index < vendors.length; index++) {
      L.marker([vendors[index].lat, vendors[index].lon])
        .bindPopup(vendors[index].name)
        .addTo(map);
    }
  };
  marker();

  return `this is a ${typeof map}`;
};

export default Map;

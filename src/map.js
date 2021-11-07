import L from "leaflet";

/**
 * Leaflet Map
 *
 * @param {string} token // access token from Mapbox
 * @param {string} el // element id to use for the map container
 * @param {array} coords // latitude and longitude for the map center
 * @param {number} zoom // zoom level of the map
 * @param {object} locations // locations to use as markers
 * @returns Map Object
 */
const Map = (token, el, coords, zoom) => {
  const map = L.map(el).setView(coords, zoom);
  const centreIcon = L.divIcon({ className: "centre-icon" });
  // marker for centre of map
  L.marker(coords, { icon: centreIcon }).addTo(map);

  return {
    init: (locations) => {
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

      // add markers at locations specified in locations array
      locations.map((location) => {
        L.marker([location.lat, location.lon])
          .bindPopup(location.name)
          .addTo(map);
      })
    },
    reset: () => {
      map.setView(coords, zoom);
    },
  };
};

export default Map;

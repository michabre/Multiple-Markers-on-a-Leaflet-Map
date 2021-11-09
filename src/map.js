import L from "leaflet";

/**
 * Leaflet Map
 *
 * @param {string} token // access token from Mapbox
 * @param {string} el // element id to use for the map container
 * @returns Map Object
 */
const Map = (token, el, zoom) => {
  const map = L.map(el);
  const layerGroup = L.layerGroup().addTo(map);
  //console.log(map.distance(coords, [11.0049836, 122.5372741]) / 1000);

  return {
    init: (coords, locations) => {
      map.setView(coords, zoom);
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
          .addTo(layerGroup);
      });
    },
    reset: (coords, zoom) => {
      layerGroup.clearLayers();
      map.setView(coords, zoom);
    },
    update: (locations) => {
      // make the last location added the centre of the map
      let centre = [
        locations[locations.length - 1].lat,
        locations[locations.length - 1].lon,
      ];
      map.setView(centre, zoom);
      locations.map((location) => {
        L.marker([location.lat, location.lon])
          .bindPopup(location.name)
          .addTo(layerGroup);
        map.panTo([location.lat, location.lon]);
      });
    },
  };
};

export default Map;

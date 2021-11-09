# Multiple Markers on a Map using LeafletJS

A Leaflet map displaying multiple markers. Tried to keep it fairly vanilla, so it could be integrated
into whatever application requires it. 

On load, it will render the locations food trucks based in Victoria, BC. The locations are
requested from a local JSON object called data.js

Clicking Reset will remove all markers from the map, allowing you to start fresh and add locations
with the form. If navigator.geolocation is available, the form will initialize with your current location.

## Getting Started

```bash
# clone the repo
git clone https://github.com/michabre/Multiple-Markers-on-a-Leaflet-Map.git

# install dependencies
npm install

# run application
npm run start

```

You will need to get a Mapbox access token when deploying to your own site. 

The access token would be added into the sample.config.js file, which currently is using the access token from the [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/).

For testing out the map, I used locations from here: [www.latlong.net](https://www.latlong.net/latest-places.html)

## Built With

* [Leaflet](http://leafletjs.com/) - an open-source JavaScript library for mobile-friendly interactive maps
* [Visual Studio Code](https://code.visualstudio.com/) - Code editing. Redefined.


## Authors

* **Michael C. Breuer** - *Initial work* - [michabre](https://github.com/michabre)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

// set up map with centering coordinates
var mymap = L.map('map').setView([48.4284, -123.3656], 13);

// list of foods truck vendors with latitude and longitude 
var vendors = [
    {"id": "coast-lunch-box", "name":"Coast Lunch Box", "lat": 48.42345285, "lon": -123.37000818},
    {"id": "crispy-fish", "name":"The Crispy Fish", "lat": 48.44698739, "lon": -123.49527423},
    {"id": "donut-delights", "name":"Donut Delights", "lat": 48.42832036, "lon": -123.36487619},
    {"id": "ginger-bros", "name":"Ginger Bros Burritos", "lat": 48.41455492, "lon": -123.35608036},
    {"id": "indecent-risotto", "name":"Indecent Risotto", "lat": 48.42406265, "lon": -123.37078926},
    {"id": "grilled-to-the-mac", "name":"Grilled to the Mac", "lat": 48.42641954, "lon": -123.46224212},
    {"id": "hungry-rooster", "name":"Hungry Rooster Food Truck", "lat": 48.42302608, "lon": -123.37071398}
];

// build Leaflet map using example from http://leafletjs.com/
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// add markers at locations specified in vendors array
var marker = (function() {
    for (let index = 0; index < vendors.length; index++) {
        L.marker([vendors[index].lat, vendors[index].lon])
        .bindPopup(vendors[index].name)
        .addTo(mymap);
    }
})(); 
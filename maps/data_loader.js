let map = L.map('map', {
    center: [22.4, 114.1],
    minZoom: 2,
    zoom: 10
});

L.tileLayer( 'http://127.0.0.1/tile/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo( map )

let myURL = jQuery('script[src$="data_loader.js"]').attr('src').replace('data_loader.js', '');
console.debug(myURL);

let myIcon = L.icon({
    iconUrl: myURL + 'images/pin24.png',
    iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

function onEachFeature(feature, layer) {

    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        //layer.bindPopup(feature.properties.popupContent);
        let do_something_if=1;
    }
}

function LoadMyData(){
    // Load the data
    var json_data = $.getJSON("maps/data.markers.json", function (geojsonFeature) {
        L.geoJSON(geojsonFeature, {
            onEachFeature: onEachFeature
        }).addTo(map);
    });

}

setInterval(LoadMyData, 100 * 60); // Every 6 seconds



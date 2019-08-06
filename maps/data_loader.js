let map = L.map('map', {
    center: [22.4, 114.1],
    minZoom: 2,
    zoom: 10
});

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
L.tileLayer( 'http://127.0.0.1:5000/tile/{z}/{x}/{y}.png', {
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
    console.log("Added");
    layer.bindPopup("<h3>"+feature.properties['name']+"</h3>");
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        //layer.bindPopup(feature.properties.popupContent);
        let do_something_if=1;
    }
}

function clear(feature, layer){
    console.log("clear called");
    //layer.removeControl(feature);
}


function LoadMyData(){
    // Load the data
    console.log("LoadMyData");
    var json_data;
    json_data = $.getJSON("http://127.0.0.1:8080/data.json", function (geojsonFeature) {
        var junk;
        L.geoJSON(geojsonFeature, {
            onEachFeature: onEachFeature
    }).addTo(map);

    });
    console.log("LoadMyData Ended")

}

setInterval(LoadMyData, 100 * 3); // Every 6 seconds

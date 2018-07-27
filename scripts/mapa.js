var mapContainer = document.getElementById('map-container');

var platform = new H.service.Platform({
  app_id: 'Wim5FCRXM0Wv7qjkxcwM', // <-- ENTER YOUR APP ID HERE
  app_code: 'x0R_HZsAhCbZAdYdx1yqDg', // <-- ENTER YOUR APP CODE HERE
  // Only necessary if served over HTTPS:
  // useHTTPS: true
});

var HEREHQcoordinates = {
  lat: -33.4190411, //  Recoleta - SANTIAGO, Chile
  lng: -70.6439544
};

// Displaying the map
var mapOptions = {
  center: HEREHQcoordinates,
  zoom: 14
};

var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions);

// Resize the map when the window is resized
window.addEventListener('resize', function () {
  map.getViewPort().resize();
});

// Basic behavior: Zooming and panning
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Marker with custom icon
var iconUrl = '../img/f25778f30e29a96c44c4f72ef645aa63.png';

var iconOptions = {
  size: new H.math.Size(26, 34),
  anchor: new H.math.Point(14, 34)
};

var markerOptions = {
   icon: new H.map.Icon(iconUrl, iconOptions)
};

var marker = new H.map.Marker(HEREHQcoordinates, markerOptions);
map.addObject(marker);
// Create a map:
var map = new H.Map();

// Create a marker icon from an image URL:
var icon = new H.map.Icon('../img/368797-200.png');

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker({ lat: 52.5, lng: 13.4 }, { icon: icon });

// Add the marker to the map:
map.addObject(marker);


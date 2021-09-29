let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -22.273354521072637, lng: -46.36636484492063 },
    zoom: 18,
  });
}

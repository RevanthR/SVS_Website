function initMap() {
  var center = {lat: 24.5, lng: 78.01};
  var locations = [
    ['SVS Refcomp Pvt Limited<br>\
    Q86J+X8F<br>\
    Maharashtra 412210<br>\
   <a href="https://goo.gl/maps/M5pdCDzTYQp3rVoF6">Get Directions</a>',   18.762665778713465, 74.33082795501],

    ['SVS Refcomp<br>\
      Hyderbad, Narsapur Rd, Telangana<br>\
   <a href="https://goo.gl/maps/cvvN8tjsBQTBf7qb9">Get Directions</a>', 17.697733904470695, 78.3520581972884],

    ['CS Wires Pvt Ltd.<br>\
      IDA Jeedimetla, Hyderabad, Telangana 500054<br>\
    <a href="https://goo.gl/maps/VRejn2Xh5vvc17ts7">Get Directions</a>', 17.510414827886642, 78.45106778379176],

    ['SVS Wires Pvt Ltd.<br>\
      Plot No. D-37, Phase IV Extension, Jeedimetla, Hyderabad, Telangana 500055<br>\
    <a href="https://goo.gl/maps/qLUWqSVT4jGpAS7c8">Get Directions</a>',17.521910800205536, 78.44033726845059],

    ['SVS Novatech PVT LTD<br>\
      Ahmedabad, Gujarat 382110<br>\
    <a href="https://goo.gl/maps/PzYkd5s7SmxGS4Yn6">Get Directions</a>', 22.998119433186954, 72.3332010774617],

    ['SVS Refcomp Pvt. Ltd.<br>\
      Sikandrabad, Bulandshahr, Uttar Pradesh 203206<br>\
   <a href="https://goo.gl/maps/MP1TZpDePgykHdEq8">Get Directions</a>', 28.46548456102284, 77.66452509748649],

   ['SVS Wires Pvt. Ltd<br>\
      Talabpur Urf hathipur, Uttar Pradesh 203207<br>\
   <a href="https://goo.gl/maps/LJPRNVYn3XpKvUus6">Get Directions</a>', 28.618278856779103, 77.49293100493945]
  ];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: center
  });
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
};

function hashchanged(){
  var hash = location.hash.replace( /^#/, '' );
  $('#nav-profile').tab('show');
}

window.addEventListener("hashchange", hashchanged, false);
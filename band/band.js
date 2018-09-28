var map;
var infoWindow;
var locations = [
  {lat:46.41736, lng:-117.007385, name:'Three Doors Down', address:'1702 main street'},
  {lat: 46.41276, lng:-117.002385, name:'The Wrangler', address:'750 21st street'},
  {lat: 46.4231975, lng: -117.0333547, name: 'Boomers Garden', address:'301 2nd street'}
];
       
function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(46.42,-117.005),
      zoom: 12,
   };

   map = new google.maps.Map(document.getElementById('map'), mapOptions);


   infoWindow = new google.maps.InfoWindow();

   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });


   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);

function displayMarkers(){

 
   var bounds = new google.maps.LatLngBounds();

  
   for (var i = 0; i < locations.length; i++){

      var latlng = new google.maps.LatLng(locations[i].lat, locations[i].lng);
      var name = locations[i].name;
      var address = locations[i].address;


      createMarker(latlng, name, address);

     
      bounds.extend(latlng); 
   }

   map.fitBounds(bounds);

 }

 function createMarker(latlng, name, address){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name
   });

   google.maps.event.addListener(marker, 'click', function() {
      
  
      var iwContent = '<div id="iw_container">' +
      '<div class="iw_title">' + name + '</div>' +
      '<div class="iw_content">' + address + '<br />' + '</div></div>';
      
    
      infoWindow.setContent(iwContent);

   
      infoWindow.open(map, marker);
   });
}
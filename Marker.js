
GPSMap.Marker = {

createLocationArrow: function (map) {
    var marker = null;
    var circle = null;

    function update (lat, long, accuracy) {
        var latlng = new google.maps.LatLng(lat, long);
        marker.setPosition(latlng);

        circle.setVisible(false);
        circle.setCenter(latlng);
        circle.setRadius(accuracy); 
        circle.setVisible(true);
    }; /* update */

    var image = {
        url: 'js/gpsmap/img/location-arrow32.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the pixel in the middle.
        anchor: new google.maps.Point(19, 12)
    };
    var marker = new google.maps.Marker({
        icon: image,
        title: 'Mi Ubicacion'
    });
    marker.setMap(map);

    var cOptions = {
        strokeColor: '#8494D1',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#ADBBEE',
        fillOpacity: 0.35,
        map: marker.getMap()
    };
    circle = new google.maps.Circle(cOptions);

    var locArrowMrkr = {update: update};

    return locArrowMrkr;
} /* createLocationArrow */

}; /* GPSCtrl.Marker */

/*EOF*/

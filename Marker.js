'use strict';

GPSMap.Marker = {

createLocationArrow: function (map) {

    function update (lat, long, accuracy, heading) {
        marker.setVisible(false);
        circle.setVisible(false);

        var latlng = new google.maps.LatLng(lat, long);
        marker.setPosition(latlng);
        symbol.rotation = heading;
        marker.setIcon(symbol);

        circle.setCenter(latlng);
        circle.setRadius(accuracy); 

        marker.setVisible(true);
        circle.setVisible(true);
    }; /* LocationArrow.update */

    function isVisibleOnMap() {
        var pos = marker.getPosition();
        return marker.getMap().getBounds().contains( pos );
    }

    var symbol = {
        anchor: new google.maps.Point(32, 0),
        fillColor: "#ff0000",
        fillOpacity: 0.5,
        path: 'M 32,0 L 0,64 Q 32,24 64,64 z',
        scale: 0.5,
        strokeColor: '#0000ff',
        strokeOpacity: 0.7,
        strokeWeight: 3
    };
    var marker = new google.maps.Marker({
        icon: symbol,
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
    var circle = new google.maps.Circle(cOptions);

    var locArrowMrkr = {isVisibleOnMap: isVisibleOnMap,
                        update: update};

    return locArrowMrkr;
} /* createLocationArrow */

}; /* GPSCtrl.Marker */

/*EOF*/


GPSMap.Control = {

createGeolocate: function () {
    var controlDiv = $('<div>')
                     .attr('class', 'controlDiv')
                     .get(0);

    var controlUI$ = $('<div>')
                     .attr('id', 'geolocate_ctrl')
                     .attr('title', 'Current Location')
                     .appendTo(controlDiv);

    $('<img>').attr('src', 'js/gpsmap/img/geolocate64.png')
              .appendTo(controlUI$);

    return controlDiv;
}

} /* GPSMap.Control */

/*EOF*/

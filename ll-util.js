/**
 * Utilities for Lat and Lng
 *
 */

/**
 * A helper function destinationPoint() which allows you to
 * calulate a new LatLng (for a marker.position) from any given LatLng
 *
 * Example via destinationPoint():
 *
 *
 * Example via google.maps.LatLng:
 *
 *   var pointA = new google.maps.LatLng(25.48, -71.26);
 *   var radiusInKm = 10;
 *   var pointB = pointA.destinationPoint(90, radiusInKm);
 *
 * @link http://stackoverflow.com/questions/2637023/how-to-calculate-the-latlng-of-a-point-a-certain-distance-away-from-another
 */
Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

Number.prototype.toDeg = function() {
  return this * 180 / Math.PI;
}

Number.prototype.kmToMi = function() {
  return this * .6214;
}

Number.prototype.miToKm = function() {
  return this * 1.609;
}

LL = {
  // Radius of the earth in km
  R: 6371,

  /**
   * make a new destination() from a given point, on bearing, at distance
   *
   * @param object from
   *                 number lat  (in deg) eg: 98.5795
   *                 number lng  (in deg) eg: 39.8282
   * @param number brng (bearing) [0-359]
   * @param number km (distance in km) [0-?]
   * @return object { lat: Number, lng: Number }
   */
  getDestination: function(from, brng, km) {
    from = _.extend({lat: 0, lng: 0}, from);
    var km = km / this.R,
    brng = brng.toRad(),
    lat1 = from.lat.toRad(),
    lng1 = from.lng.toRad();

    var lat2 = Math.asin(
      Math.sin(lat1) * Math.cos(km) +
      Math.cos(lat1) * Math.sin(km) * Math.cos(brng)
    );

    var lng2 = lng1 + Math.atan2(
      Math.sin(brng) * Math.sin(km) * Math.cos(lat1),
      Math.cos(km) - Math.sin(lat1) * Math.sin(lat2)
    );

    if (isNaN(lat2) || isNaN(lng2)) return null;

    return {
      lat: lat2.toDeg(),
      lng: lng2.toDeg()
    };

  },

  /**
   * This calculates great-circle distances between the two points – that is,
   * the shortest distance over the earth’s surface – using the ‘Haversine’ formula.
   *
   * @param object from
   *                 number lat  (in deg) eg: 98.5795
   *                 number lng  (in deg) eg: 39.8282
   * @param object to
   *                 number lat  (in deg) eg: 98.5733
   *                 number lng  (in deg) eg: 39.8233
   * @return number km (distance in km)
   */
  getDistance: function(from, to) {
    var dLat = to.lat.toRad() - from.lat.toRad();
    var dLon = to.lng.toRad() - from.lng.toRad();
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(from.lat.toRad()) * Math.cos(to.lat.toRad()) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var km = this.R * c;
    return km;
  },

  /**
   * Calculate the bearing between two positions as a value from 0-360
   *
   * @param object from
   *                 number lat  (in deg) eg: 98.5795
   *                 number lng  (in deg) eg: 39.8282
   * @param object to
   *                 number lat  (in deg) eg: 98.5733
   *                 number lng  (in deg) eg: 39.8233
   * @return number bearing The bearing between 0 and 360
   */
  getBearing: function(from, to) {
    var dLon = (from.lng - to.lng).toRad();
    var y = Math.sin(dLon) * Math.cos(to.lat);
    var x = Math.cos(from.lat.toRad()) * Math.sin(to.lat.toRad()) -
      Math.sin(from.lat.toRad()) * Math.cos(to.lat.toRad()) * Math.cos(dLon);
    var brng = Math.atan2(y, x);
    return 360 - ((brng.toDeg() + 360) % 360);
  }

};

/**
 * google maps LatLng wrapper for destinationPoint()
 *
 * @this LatLng object
 * @param number brng (bearing) [0-359]
 * @param number km (distance in km) [0-?]
 * @return object newLatLngObj
 *...an example of how you might integrate...
google.maps.LatLng.prototype.destinationPoint = function(brng, km) {
  var ll = destinationPoint({
    lat: this.lat(),
    lng: this.lng(),
    brng: brng,
    km: km
  });
  if (_.isNull(ll)) {
    return null;
  }
  return new google.maps.LatLng(ll.lat, ll.lng);
};
*/


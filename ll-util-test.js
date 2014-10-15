Tinytest.add('LL-Util: init', function (test) {
  test.equal(
    typeof LL,
    "object",
    "LL is an object"
  );
  test.equal(
    typeof LL.getDestination,
    "function",
    "LL.getDestination is a function"
  );
  test.equal(
    typeof LL.getDistance,
    "function",
    "LL.getDistance is a function"
  );
  test.equal(
    typeof LL.getBearing,
    "function",
    "LL.getBearing is a function"
  );
});
Tinytest.add('LL-Util: getDestination', function (test) {
  test.equal(
    LL.getDestination(
      {
        lat: 38.25896183393495,
        lng: -85.74673791953198
      },
      90,
      10
    ),
    {
     lat: 38.258906175821174,
     lng: -85.63220682666228
    },
    "LL.getDestination from Lou Waterfront 10 km East"
  );
});
Tinytest.add('LL-Util: getDistance', function (test) {
  test.equal(
    LL.getDistance(
      {
        lat: 38.25896183393495,
        lng: -85.74673791953198
      },
      {
        lat: 38.258906175821174,
        lng: -85.63220682666228
      }
    ),
    9.999999999998517,
    "LL.getDistance from Lou Waterfront should be 10 km"
  );
});
Tinytest.add('LL-Util: getBearing', function (test) {
  test.equal(
    LL.getBearing(
      {
        lat: 38.25896183393495,
        lng: -85.74673791953198
      },
      {
        lat: 38.258906175821174,
        lng: -85.63220682666228
      }
    ),
    90,
    "LL.getBearing from Lou Waterfront should be 90 deg (East)"
  );
});


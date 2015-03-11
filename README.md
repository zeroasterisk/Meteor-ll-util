# Meteor Latitute and Longitude Utilities

There are many other, more rhobust LatLon tools out there... but if you want
VERY simple utilites with a small footprint, this is a good option.

## Thanks!

This is a smaller/simpler (and less featured) implementation of:
http://www.movable-type.co.uk/scripts/latlong.html

Which can be found here:
https://github.com/chrisveness/geodesy

Do you need more functionality?

You could switch to the Meteor packaged version of above: `garrilla:geodesy-libraries`
https://github.com/garrilla/geodesy-libraries-for-Meteor

### Install

```
$ meteor add zeroasterisk:ll-util
```

### Usage

```
    // LL.getDestination(from, bearing, km)
    to = LL.getDestination(
      // from lat/lng
      {
        lat: 38.25896183393495,
        lng: -85.74673791953198
      },
      // bearing [0-360], 90 = East
      90,
      // km, distance to travel
      10
    );

    to == {
     lat: 38.258906175821174,
     lng: -85.63220682666228
    };


    // LL.getDistance(from, to)
    km = LL.getDistance(
      // from
      {
        lat: 38.25896183393495,
        lng: -85.74673791953198
      },
      // to
      {
        lat: 38.258906175821174,
        lng: -85.63220682666228
      }
    );

    km == 9.999999999998517;


    // LL.getBearing(from, to)
    bearing = LL.getBearing(
      // from
      {
        lat: 38.25896183393495,
        lng: -85.74673791953198
      },
      // to
      {
        lat: 38.258906175821174,
        lng: -85.63220682666228
      }
    );

    bearing == 90;
```




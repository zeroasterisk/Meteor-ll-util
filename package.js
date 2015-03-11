Package.describe({
  name: "zeroasterisk:ll-util",
  summary: "Utilities for Latitude and Longitude",
  version: "0.0.2",
  git: "https://github.com/zeroasterisk/Meteor-ll-util.git"
});

Package.onUse(function (api) {
  api.versionsFrom("0.9.0");
  api.use('underscore', ['server', 'client']);
  // Export the object 'LL'
  api.export('LL', ['server', 'client']);
  api.addFiles('ll-util.js', ['server', 'client']);
});

Package.onTest(function (api) {
  api.use("zeroasterisk:ll-util");
  api.use('tinytest@1.0.0');
  api.addFiles('ll-util-test.js', ['server', 'client']);
});

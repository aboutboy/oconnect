# oconnect
OpenWRT router management at your finger tips


# What's going on?
 * Android Support Only
 * Pre Alpha State
 
# Developement Setup

###Prequesites
 * Apache Cordova 5.x
 * Node JS 10.x
 * Bower
 * Android SDK
 * Gulp

###Setup
```
npm i && bower i
cordova prepare
```

###Build
Devolopement Live reload server
```
gulp watch
```

Build a debug version
```
gulp clean && gulp --cordova "build"
```

Build a run in device
```
gulp clean && gulp --cordova "run android --device
```

For used libaries and frameworks please have a look at bower.json file.

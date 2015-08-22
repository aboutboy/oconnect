# oConnect
OpenWRT router management at your finger tips


# What's going on?
 * Android Support Only
 * Pre Alpha State
  
# Public release

There is no public release available yet. If you are interested at testing please build one your self or drop a mail at ocbeta at vert.agency

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

#License

oConnect

Copyright (C) 2015  Vert Interactive <copyright@vert.agency>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
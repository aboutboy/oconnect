# oConnect 

[![Build Status](http://img.shields.io/travis/vertinteractive/oconnect.svg)](https://travis-ci.org/vertinteractive/oconnect)

OpenWRT router management at your finger tips.

# What's going on?
 * Android Support Only
 * Pre Alpha State

# Sneak Peek

![](http://i.imgur.com/KP4vJ3v.png?s) ![](http://i.imgur.com/F3KG88w.png?s) ![](http://i.imgur.com/XaM0935.png?s)


# Public release

There is no public release available yet. If you are interested at testing please build one your self or drop a mail at <ocbeta@vert.agency>

# Development Setup

###Prequesites
 * Apache Cordova 5.x
 * Node JS 10.x
 * Bower
 * Android SDK
 * Gulp
 * OpenWRT based system

*For used libraries and frameworks please refer to bower.json file in this repository.*

###Setup
```
npm i && bower i
cordova prepare
```

###Build
Development live reload server
```
npm start
```

Build a debug version
```
npm run build
```

Build a run in device
```
npm run device
```

###Router
```
opkg update
opkg install luci-mod-rpc
```

#License

oConnect

Copyright (C) 2015  Vert Interactive <copyright@vert.agency>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

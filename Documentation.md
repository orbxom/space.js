# API Documentation

## Table of Contents
* [Client](#client)
* [Database](#database)
* [Object Types](#object-types)
* [Server](#server)
* [Other](#other)


## Client

### Required Libraries

* `socket.io`
* `cookie.js`
* `jquery 2.0`

### Properties

### Methods

## Database

### Required Libraries

### Methods

### Properties

## Object Types
**Data types listed are valid data types for [mongoose](http://mongoosejs.com/docs/schematypes.html)**
```
spaceObject = {
  type:           Number, // enum for types [planet, galaxy, ship, universe, asteroid] -- type determines depth in grid
  radius:         Number, // float, radius of object
  velocity:       Number, // float
  centerOfObject: Mixed,  // center point of object, stored as {x: float, y: float}
  centerOfOrbit:  Mixed,  // center point of orbit, stored as {x: float, y: float}
  direction:      Number, // float, degree offset from 0, 0 being straight up on screen increasing clockwise.
}
```

## Server

### Required Libraries
* `socket.io`
* `colors.js`
* `mongoose.js`
* `node-logger.js`
* `http`

### Properties

### Methods

## Other

### Properties

### Methods

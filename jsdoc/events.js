/**
 * @fileoverview Illustrates how to annotate events with JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.1
 * @license LGPL-3.0
 */


var events = require('events');
var util = require('util');

/**
 * A constructor function for instance of the type <tt>Car</tt>.
 * @classdesc A type representing a car that is able to honk.
 *
 * @public
 * @constructor
 * @extends module:events.EventEmitter
 */
function Car () {
    events.EventEmitter.call(this);
}

util.inherits(Car, events.EventEmitter);

/**
 * An internal variable that holds the loudness level of the honking signal.
 *
 * @private
 * @type {number}
 */
Car.prototype._honkingLevel = 0;

/**
 * A getter that indicates whether the <tt>Car</tt> instance is honking or not.
 *
 * @public
 * @type {!boolean}
 * @name Car#isHonking
 */
Object.defineProperty(Car.prototype, 'isHonking',
                      { get: function() {
                          return this._honkingLevel !== 0;
                      }});

/**
 * Sets the <tt>Car</tt> instance in honking state.
 *
 * @public
 * @throws {Error} Thrown if <tt>honkingLevel</tt> is not a number.
 * @throws {Error} Thrown if <tt>honkingLevel</tt> is <= 0.
 * @emits Car#startHonking
 *
 * @param {!number} honkingLevel The loudness level of the honking signal.
 */
Car.prototype.startHonking = function (honkingLevel) {
    if (typeof honkingLevel !== 'number') throw new Error('honkingLevel must be a number');
    if (honkingLevel <= 0) throw new Error('honkingLevel must be > 0');
    this._honkingLevel = honkingLevel;
    /**
     * States that the honking process was started.
     *
     * @event Car#startHonking
     * @param {number} honkingLevel The loudness level of the honking signal.
     */
    this.emit('startHonking', this._honkingLevel);
}

/**
 * Sets the <tt>Car</tt> instance in non-honking state.
 *
 * @public
 * @emits Car#stopHonking
 */
Car.prototype.stopHonking = function () {
    var oldHonkingLevel = this._honkingLevel;
    this._honkingLevel = 0;
    /**
     * States that the honking process was stopped.
     *
     * @event Car#stopHonking
     * @param {number} honkingLevel The loudness level of the honking signal that was set before the honking process
     *        was stopped.
     */
    this.emit('stopHonking', oldHonkingLevel);
}


/**
 * A constructor function for intances of the type <tt>CarOwner</tt>.
 * @classdesc Represents a car owner that may own multiple instances of the type {@link Car}.
 *
 * @public
 * @constructor
 */
function CarOwner () { }

/**
 * An internal property that holds the {@link Car} instances that belongs to the <tt>CarOwner</tt>.
 *
 * @private
 * @type {Array<Car>}
 */
CarOwner.prototype._cars = [];

/**
 * An internal property that holds the accumulated loudness level of all honks of all registered {@link Car}s that are currently running.
 *
 * @private
 * @type {number}
 */
CarOwner.prototype._totalHonkingLoudness = 0;

/**
 * An getter that holds the accumulated loudness level of all honks of all registered {@link Car}s that are currently running.
 *
 * @public
 * @name CarOwner#totalHonkingLoudness
 * @type {number}
 */
Object.defineProperty(CarOwner.prototype, 'totalHonkingLoudness',
                      { get: function () {
                          return this._totalHonkingLoudness;
                      }});

/**
 * Creates the relation between a <tt>CarOwner</tt> and a {@link Car}.
 *
 * @public
 * @throws {Error} Thrown if car is not an instance of {@link Car}.
 * @listens Car#startHonking
 * @listens Car#stopHonking
 *
 * @return {number} The number of registered {@link Car}s.
 *
 * @param {Car} car The car instance that is registered to the <tt>CarOwner</tt>.
 */
CarOwner.prototype.addCar = function (car) {
    if (car === undefined || car === null) return this._cars.length;
    if (!(car instanceof Car)) throw new Error('car must be an instance of Car');

    var self = this;
    car.on('startHonking', function (level) {
        self._totalHonkingLoudness += level;
    });
    car.on('stopHonking', function (level) {
        self._totalHonkingLoudness -= level;
    });

    this._cars.push(car);
    return this._cars.length;
}

import { Color } from "./Color";

export class Car {
      constructor (color: Color, weight: number) {
      		  this._color = color;

		  if (weight <= 0) throw new Error(`weight must be > 0 but is ${weight}`);
      	  this._weight = weight;
	  this._speed = 0;
	  this._isRunning = false;
      }

      get color () {
      	  return this._color;
      }

      get weight () {
      	  return this._weight;
      }

      get currentSpeed () {
      	  return this._speed;
      }

      get isRunning () {
      	  return this._isRunning;
      }

      switchOff () {
          if (!this.isRunning) throw new Error("Car::switchOff cannot be called when Car::isRunning is false");
	  if (this.currentSpeed) this.stop();
	  this._isRunning = false;
      }

      switchOn () {
      	   if (this.isRunning) throw new Error("Car::switchOn cannot be called when Car::isRunning is true");
	   this._isRunning = true;
      }

      drive (speed: number) {
      	    if (!speed) throw new Error("Car::drive requires speed to be non-zero");
	    if (!this.isRunning) throw new Error("Car::drive cannot be called when Car::isRunning is false");
	    this._speed = speed;
      }

      stop () {
      	   if (!this.isRunning) throw new Error("Car::stop cannot be called when Car::isRunning is false");
	   if (!this.currentSpeed) throw new Error("Car::stop cannot be called when Car::currentSpeed is 0");
	   this._speed = 0;
      }

      private _speed: number;
      private _isRunning: boolean;
      private _color: Color;
      private _weight: number;
}

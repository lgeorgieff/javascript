import { Car } from "./Car";
import { Color } from "./Color";

let car = new Car(Color.Green, 1432);
car.switchOn();
car.drive(256);
console.log(car);

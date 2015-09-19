/**
 * @fileoverview Illustrates how to use annotated modules in JSDoc.
 * @author Lukas Georgieff <lukas.georgieff@hotmail.com>
 * @version 1.0.0
 * @license LGPL-3.0
 * @requires module:modules/module
 */


var module = require('./module');

var assert = require('assert');


/**
 * The entry point for this script that tests the classes {@link module:modules/module.Car} and
 * {@link module:modules/module.Person} and the functions {@link module:modules/module.isCar} and
 * {@link module:modules/module.isPerson}.
 */
function main () {
    var car = new module.Car();
    var person = new module.Person('Max Mustermann');

    assert(car);
    assert(person);
    assert.strictEqual(module.isCar(car), true);
    assert.strictEqual(module.isCar(null), false);
    assert.strictEqual(module.isCar(), false);
    assert.strictEqual(module.isCar(person), false);
    assert.strictEqual(car.isDriving, false);
    car.drive();
    assert.strictEqual(car.isDriving, true);
    car.stop();
    assert.strictEqual(car.isDriving, false);
    assert(person);
    assert.strictEqual(module.isPerson(person), true);
    assert.strictEqual(module.isPerson(null), false);
    assert.strictEqual(module.isPerson(), false);
    assert.strictEqual(module.isPerson(car), false);
    assert.strictEqual(person.name, 'Max Mustermann');
}

main();

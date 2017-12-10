import { expect } from "chai";
import { Car } from "../../../../src/Car";
import { Color } from "../../../../src/Color";

let chai = require('chai');
let spies = require('chai-spies');
chai.use(spies);

describe("Class Car", () => {
    const COLOR = Color.Orange;
    const WEIGHT = 1400;

    describe("instantiation", () => {
	it("fails if weight is smaller than or equal 0", () => {
	    expect(() => new Car(Color.Red, 0)).to.throw(Error);
	    expect(() => new Car(Color.Red, -1)).to.throw(Error);
	});

	it("succeeds if arguments are correct", () => {
	    expect(new Car(COLOR, WEIGHT)).to.be.an("object");
	});
    });

    let bmw: Car;
    beforeEach(() => {
	bmw = new Car(COLOR, WEIGHT);
    });

    describe("getter", () => {
	it("color is valid", () => {
      	    expect(bmw.color).to.equal(COLOR);
	});

	it("weight is valid", () => {
      	    expect(bmw.weight).to.equal(WEIGHT);
	});

	it("currentSpeed is valid", () => {
      	    expect(bmw.currentSpeed).to.equal(0);
	});

	it("isRunning is valid", () => {
	    expect(bmw.isRunning).to.be.false;
	});
    });

    describe("method switchOn", () => {
	it("works correctly", () => {
	    bmw.switchOn();
	    expect(bmw.isRunning).to.be.true;
	});

	it("throws in case the car is already switched on", () => {
	    bmw.switchOn();
	    expect(() => bmw.switchOn()).to.throw(Error);
	});
    });

    describe("method switchOff", () => {
	beforeEach(() => bmw.switchOn());

	it("works correctly", () => {
	    bmw.switchOff();
	    expect(bmw.isRunning).to.be.false;
	});

	it("works correctly if in driving state", () => {
	    bmw.drive(5);
            chai.spy.on(bmw, 'stop');
	    bmw.switchOff();
	    expect(bmw.stop).to.have.been.called.once;
	    expect(bmw.isRunning).to.be.false;
	});

	it("throws in case the car is already switched off", () => {
	    bmw.switchOff();
	    expect(() => bmw.switchOff()).to.throw(Error);
	});
    });

    describe("method drive", () => {
	beforeEach(() => bmw.switchOn());
	
	it("works correct with positive speed", () => {
	    bmw.drive(1);
	    expect(bmw.currentSpeed).to.equal(1)
	    bmw.drive(248);
	    expect(bmw.currentSpeed).to.equal(248);
	});

	it("works correct with negative speed", () => {
	    bmw.drive(-1);
	    expect(bmw.currentSpeed).to.equal(-1)
	    bmw.drive(-248);
	    expect(bmw.currentSpeed).to.equal(-248);
	});

	it("throws in case of 0 speed", () => {
	    expect(() => bmw.drive(0)).to.throw(Error);
	});

	it("throws in case car is switched off", () => {
	    bmw.switchOff();
	    expect(() => bmw.drive(2)).to.throw(Error);
	});
    });

    describe("method stop", () => {
	beforeEach(() => {
	    bmw.switchOn();
	    bmw.drive(51);
	});

	it("works correctly", () => {
	    bmw.stop();
	    expect(bmw.currentSpeed).to.equal(0);
	    expect(bmw.isRunning).to.be.true;
	});

	it("throws in case the car is switched off", () => {
	    bmw.switchOff();
	    expect(() => bmw.stop()).to.throw(Error);
	});

	it("throws in case the car is already stopped", () => {
	    bmw.stop();
	    expect(() => bmw.stop()).to.throw(Error);
	});
    });
});

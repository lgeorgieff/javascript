import { Car } from "../../../../src/Car";
import { Color } from "../../../../src/Color";

describe("Class Car", () => {
    const COLOR = Color.Orange;
    const WEIGHT = 1400;

    describe("instantiation", () => {
	it("fails if weight is smaller than or equal 0", () => {
	    expect(() => new Car(Color.Red, 0)).toThrow(jasmine.any(Error));
	    expect(() => new Car(Color.Red, -1)).toThrow(jasmine.any(Error));
	});

	it("succeeds if arguments are correct", () => {
	    expect(new Car(COLOR, WEIGHT)).toEqual(jasmine.any(Car));
	});
    });

    let bmw: Car;
    beforeEach(() => {
	bmw = new Car(COLOR, WEIGHT);
    });

    describe("getter", () => {
	it("color is valid", () => {
      	    expect(bmw.color).toBe(COLOR);
	});

	it("weight is valid", () => {
      	    expect(bmw.weight).toBe(WEIGHT);
	});

	it("currentSpeed is valid", () => {
      	    expect(bmw.currentSpeed).toBe(0);
	});

	it("isRunning is valid", () => {
	    expect(bmw.isRunning).toBeFalsy();
	});
    });

    describe("method switchOn", () => {
	it("works correctly", () => {
	    bmw.switchOn();
	    expect(bmw.isRunning).toBeTruthy()
	});

	it("throws in case the car is already switched on", () => {
	    bmw.switchOn();
	    expect(() => bmw.switchOn()).toThrow(jasmine.any(Error));
	});
    });

    describe("method switchOff", () => {
	beforeEach(() => bmw.switchOn());

	it("works correctly", () => {
	    bmw.switchOff();
	    expect(bmw.isRunning).toBeFalsy();
	});

	it("works correctly if in driving state", () => {
	    bmw.drive(5);
            spyOn(bmw, 'stop').and.callThrough();
	    bmw.switchOff();
	    expect(bmw.stop).toHaveBeenCalled();
	    expect(bmw.isRunning).toBeFalsy();
	});

	it("throws in case the car is already switched off", () => {
	    bmw.switchOff();
	    expect(() => bmw.switchOff()).toThrow(jasmine.any(Error));
	});
    });

    describe("method drive", () => {
	beforeEach(() => bmw.switchOn());
	
	it("works correct with positive speed", () => {
	    bmw.drive(1);
	    expect(bmw.currentSpeed).toBe(1)
	    bmw.drive(248);
	    expect(bmw.currentSpeed).toBe(248);
	});

	it("works correct with negative speed", () => {
	    bmw.drive(-1);
	    expect(bmw.currentSpeed).toBe(-1)
	    bmw.drive(-248);
	    expect(bmw.currentSpeed).toBe(-248);
	});

	it("throws in case of 0 speed", () => {
	    expect(() => bmw.drive(0)).toThrow(jasmine.any(Error));
	});

	it("throws in case car is switched off", () => {
	    bmw.switchOff();
	    expect(() => bmw.drive(2)).toThrow(jasmine.any(Error));
	});
    });

    describe("method stop", () => {
	beforeEach(() => {
	    bmw.switchOn();
	    bmw.drive(51);
	});

	it("works correctly", () => {
	    bmw.stop();
	    expect(bmw.currentSpeed).toBe(0);
	    expect(bmw.isRunning).toBeTruthy();
	});

	it("throws in case the car is switched off", () => {
	    bmw.switchOff();
	    expect(() => bmw.stop()).toThrow(jasmine.any(Error));
	});

	it("throws in case the car is already stopped", () => {
	    bmw.stop();
	    expect(() => bmw.stop()).toThrow(jasmine.any(Error));
	});
    });
});

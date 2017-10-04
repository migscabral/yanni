import {Weight} from '../yanni/core/Weight';

describe('Weight, upon instantation', function() {
    let weight = new Weight(0.30);

    it('has value set to the value passed to the constructor', function() { 
        expect(weight.value).toBe(0.30)
    });

    it('has previous value set to null', function() {
        expect(weight.previousValue).toBeNull();
    });

    it('has next value set to null', function() {
        expect(weight.nextValue).toBeNull();
    });
});


describe('Weight, upon instantation with no parameter passed', function() {
    let weight = new Weight();
    
    it('create a weight with a random value', function() {
        expect(weight.value).toBeGreaterThanOrEqual(0.0);
        expect(weight.value).toBeLessThan(1.0);
    });
});

describe('The value of weight when modified', function() {
    let weight = new Weight(1.0);
    
    it('will not be modified unless update is called', function() {
        weight.adjust(-0.5);
        expect(weight.value).toBe(1.0);
    });

    it('unsaved value will be stored in nextValue', function() {
        weight.adjust(-0.5);
        expect(weight.nextValue).toBe(0.5);
    });

    it('will be modified when update is called', function() {
        weight.adjust(-0.5);
        weight.update();
        expect(weight.value).toBe(0.5);
    });

    it('previous value before update will be stored in previousValue', function() {
        expect(weight.previousValue).toBe(1.0);
    });

    it('next value will be set to null', function() {
        expect(weight.nextValue).toBeNull();
    });
});

describe('Weight, when adjusted', function() {
    it('will decrement when given a negative value', function() {
        let weight = new Weight(1.0);
        weight.adjust(-0.5);
        weight.update();
        expect(weight.value).toBe(0.5);
    });

    it('will increment when given a positive value', function() {
        let weight = new Weight(1.0);
        weight.adjust(0.5);
        weight.update();
        expect(weight.value).toBe(1.5);        
    });    
});

describe('Weight, when adjusted', function() {
    it('will decrement when given a negative value', function() {
        let weight = new Weight(1.0);
        weight.adjust(-0.5);
        weight.update();
        expect(weight.value).toBe(0.5);
    });

    it('will increment when given a positive value', function() {
        let weight = new Weight(1.0);
        weight.adjust(0.5);
        weight.update();
        expect(weight.value).toBe(1.5);        
    });    
});

describe('Weight, on reset', function() {
    it('will set values back to its default state', function() {
        let weight = new Weight(1.0);
        weight.reset(1.0);
        weight.update();
        expect(weight.value).toBe(1.0);
        expect(weight.previousValue).toBeNull();
        expect(weight.nextValue).toBeNull();
    });

    it('will set values back to its default state, and set a random value if called without a parameter', function() {
        let weight = new Weight(1.0);
        weight.reset();
        weight.update();
        expect(weight.value).toBeGreaterThanOrEqual(0.0);
        expect(weight.value).toBeLessThan(1.0);
        expect(weight.previousValue).toBeNull();
        expect(weight.nextValue).toBeNull();
    });    
});

describe('Weight, on randomize', function() {
    it('value will have an arbitrary value', function() {
        let weight = new Weight(1.0);
        weight.randomize();
        weight.update();
        expect(weight.value).toBeGreaterThanOrEqual(0.0);
        expect(weight.value).toBeLessThan(1.0);
    });
});

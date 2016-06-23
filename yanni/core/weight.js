/**
* Weight - represents the weight of a connection
*
**/

class Weight {
  /**
  * Default constructor.
  * @param {decimal} [value] - The value to be assigned to the weight.
  *
  **/
  constructor(value) {
    this.value = value;
    this.previousValue = null;
  }

  /**
  * Increments or decrements the current weight value given a signed input. Save current value as previous value.
  * @param {decimal} [value] - The value to be added or subtracted from the current weight value.
  *
  **/
  adjust(value) {
    this.previousValue = this.value;
    this.value += amount;
  }

  /**
  * Replaces the current weight value with the given input. Save current value as previous value.
  * @param {decimal} [value] - The value to replace the current weight value.
  *
  **/
  change(value) {
    this.previousValue = this.value;
    this.value = value;
  }

  /**
  * Replaces the current weight value with the given input. Save current value as previous value.
  * @param {decimal} [value] - The value to replace the current weight value.
  *
  **/
  getValues() {
    this.previousValue = this.value;
    this.value = value;
  }

  /**
  * Set a random weight. Save current value to previous value.
  *
  **/
  randomize() {
    this.previousValue = this.value;
    this.value = null; //TODO: should initialize this to a random value
  }

  /**
  * Set a random weight. Set previous value to null.
  *
  **/
  reset() {
    this.previousValue = null;
    this.value = null; //TODO: should initialize this to a random value
  }

  /**
  * Set weight value to given value. Set previous value to null.
  * @param {decimal} [value] - The value to replace the current weight value.
  *
  **/
  reset(value) {
    this.previousValue = null;
    this.value = value;
  }
}

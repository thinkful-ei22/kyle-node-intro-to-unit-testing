'use strict';

const chai = require('chai');

const fizzBuzzer = require('../fizzBuzzer');

const expect = chai.expect;

describe('fizzBuzzer', function() {

  it('should throw an error if input is not a number', function() {
    const invalidInputs = [
      '1',
      true,
      function(){},
      [2]
    ];

    invalidInputs.forEach(function(input){
      expect(function(){
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

  it('should return \'fizz-buzz\' when input is divisible by 15', function() {
    const multiplesOf15 = [15, 30, 45];

    multiplesOf15.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal('fizz-buzz');
    });
  });

  it('should return \'buzz\' when input is divisible by 5', function() {
    const multiplesOf5 = [5, 10, 20];

    multiplesOf5.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal('buzz');
    });
  });

  it('should return \'fizz\' when input is divisible by 3', function() {
    const multiplesOf3 = [3, 6, 9];

    multiplesOf3.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal('fizz');
    });
  });

  it('should return the number when input is not divisible by 3, 5, or 15', function() {
    const nonMultiples = [7, 13, 22];

    nonMultiples.forEach(function(num) {
      expect(fizzBuzzer(num)).to.equal(num);
    });
  });

});
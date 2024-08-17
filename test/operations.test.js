const {assert}  = require('chai');
// const assert = require('assert');

const { multiply, asyncSumm } = require('../operations');
const { it } = require('mocha');

describe('Math operations tests', () => {

	it('should multiply be equal expected', () => {
		const expected = 21;
		const result = multiply(3, 7);
		assert.equal(result, expected, `${result} not equal ${expected}`);
	});

  it('should async summ two numbers', (done) => {
    const expected = 20;
    asyncSumm(12, 8, (result) => {
      assert.equal(result, expected);
      done();
    })
  })

	// it('should multiply be equal expected', () => {
	// 	const expected = 20;
	// 	const result = multiply(3, 7);
	// 	if(result !== expected){
  //     throw new Error(`${result} not equal ${expected}`)
  //   }
	// });

});

it('should be match to RegExp', () => {
  const myString = 'SpinLord';
  assert.match(myString, /^S/)
})

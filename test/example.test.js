// IMPORT MODULES under test here:
import { example } from '../example.js';
import { yessir } from './utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    
    const expected = true;
    
    const actual = yessir('yeeees!');

    expect.equal(actual, expected);
});

var fg  = require('../fg.js').fg;
fg.test = require('../fg-test.js').fg.test;

describe(
'fg.arrayOf :: a, Number -> [a]\n' +
'fg.arrayOf(value, repeat)',
    function () {
        it('should return an Object', fg.test.returnType(fg.arrayOf, 'object'));
        it('should return an Array',  fg.test.returns(fg.arrayOf, Array.isArray));
        it('should produce an Array with `value` repeated `repeat` number of times', function () {
            expect(fg.arrayOf(null, 3)).toEqual([null, null, null]);
            expect(fg.arrayOf([], 1)).toEqual([[]]);
            expect(fg.arrayOf(3, 0)).toEqual([]);
            expect(fg.arrayOf(null, null)).toEqual([]);
            expect(fg.arrayOf(null, -Infinity)).toEqual([]);
        });
    }
);

var fg  = require('../fg.js').fg;
fg.test = require('../fg-test.js').fg.test;

describe(
'fg.noop :: undefined -> undefined',
    function () {
        it('should return undefined', fg.test.returnType(fg.noop, 'undefined'));
    }
);

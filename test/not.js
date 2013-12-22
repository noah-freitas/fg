var fg  = require('../fg.js').fg;
fg.test = require('../fg-test.js').fg.test;

describe(
'fg.not :: a -> Boolean',
    function () {
        it('should return a Boolean', fg.test.returnType(fg.not, 'boolean'));
    }
);

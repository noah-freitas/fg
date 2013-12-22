var fg  = require('../fg.js').fg;
fg.test = require('../fg-test.js').fg.test;

describe(
'fg.compose :: (a -> b), (b -> c) -> (a -> c)',
    function () {
        it('should return a Function', fg.test.returnType(fg.compose, 'function'));
    }
);

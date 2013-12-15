;(function () {
    var fg = {};

    /**
     * fg.arrayOf :: a, Number -> [a]
     * Produces an array of {value} repeated {length} number of times.
     */
    fg.arrayOf = function (value, length) {
        var array = [];
        while (length-- > 0) array.push(value);
        return array;
    };

    /**
     * fg.compose :: (a -> b), (b -> c) -> (a -> c)
     * Produces a new function by composing {f} and {g} together.
     */
    fg.compose = function (f, g) {
        return function (x) {
            return g(f(x));
        };
    };

    /**
     * fg.not :: a -> Boolean
     * Coerces {x} to a Boolean and returns the opposite.
     */
    fg.not = function (x) {
        return !x;
    };

    /**
     * fg.noop :: undefined -> undefined
     * Nooperation function.
     */
    fg.noop = function () {};

    /**
     * fg.onePerTick :: [Function] -> undefined
     * Executes the functions in {fs} in sequence, spreading them over
     * individual turns of the event loop.
     */
    fg.onePerTick = function (fs) {
        (fs.shift() || fg.noop)();
        if (fs.length > 0) setTimeout(fg.onePerTick.bind(null, fs), 0);
    };

    window.fg = fg;
}());

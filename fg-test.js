;(function (global) {
    var fg = fg || {};

    var input = [
        null,
        void 0,
        undefined,
        '',
        '123f\najndnknf',
        123,
        -Infinity,
        Infinity,
        0,
        -0,
        1.23E-15,
        45E23,
        true,
        false,
        {},
        new Date,
        [],
        /123/ig
    ];

    fg.test = {
        returnType: function (func, typeStr) {
            return function () {
                input.forEach(function (input) {
                    expect(typeof func(input)).toBe(typeStr);
                });
            };
        },
        returns: function (func, pred) {
            return function () {
                input.forEach(function (input) {
                    expect(pred(func(input))).toBe(true);
                });
            };
        }
    };

    global.fg = fg;
}(typeof window !== 'undefined' && window || exports));

import {expect, jest, test} from '@jest/globals';

import * as fns from './testFunctions';

test("1 - numbers", () => {
    expect(fns.numbers()).toEqual(89);
});

test("2 - strings", () => {
    expect(fns.strings()).toEqual("Happy birthday to you!");
});

test("3 - arrays", () => {
    expect(fns.arrays()).toEqual([1, "Tom", 2, "James", 3, "Jess", 4, "Chris", 5, "Mary"]);
});

test("4 - objects", () => {
    expect(fns.objects()).toEqual("Oxford & Golf");
});

test("5 - conditionals", () => {
    const res = fns.conditionals();
    if (res[1]) expect(res[0]).toEqual("Green Light!");
    else expect(res[0]).toEqual("Red Light!");
});

test("6 - loops", () => {
    expect(fns.loops()).toEqual(32.5);
})
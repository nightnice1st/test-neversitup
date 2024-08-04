const { findOddInt } = require('find_odd_int');

test('[7] should return 7, because it occurs 1 time', () => {
    expect(findOddInt([7])).toBe(7);
});

test('[0] should return 0, because it occurs 1 time', () => {
    expect(findOddInt([0])).toBe(0);
});

test('[1, 1, 2] should return 2, because it occurs 1 time ', () => {
    expect(findOddInt([1, 1, 2])).toBe(2);
});

test('[0, 1, 0, 1, 0] should return 0, because it occurs 3 times ', () => {
    expect(findOddInt([0, 1, 0, 1, 0])).toBe(0);
});

test('[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time ', () => {
    expect(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
});

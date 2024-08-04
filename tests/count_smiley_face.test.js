const { countSmileys } = require('count_smiley_face');

test('countSmileys should return 2 for [":)", ";(", ";}", ":-D"]', () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
});

test('countSmileys should return 3 for [";D", ":-(", ":-)", ";~)"]', () => {
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
});

test('countSmileys should return 1 for [";]", ":[", ";*", ":$", ";-D"]', () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
});

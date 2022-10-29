import test from 'ava';

import * as double from '@arithmetic-type/double';

import {factorizer} from '#module';

const factorize = factorizer(double);

const macro = test.macro({
	exec(t, n, expected) {
		t.deepEqual([...factorize(n)], expected);
	},
	title(title, n, expected) {
		return title ?? `factorize(${n}) = ${JSON.stringify(expected)}`;
	},
});

test(macro, 1, []);
test(macro, 2, [2]);
test(macro, 3, [3]);
test(macro, 4, [2, 2]);
test(macro, 5, [5]);
test(macro, 6, [2, 3]);
test(macro, 7, [7]);
test(macro, 8, [2, 2, 2]);
test(macro, 15, [3, 5]);
test(macro, 17, [17]);
test(macro, 999, [3, 3, 3, 37]);
test(macro, 18_848_997_157, [13_729, 1_372_933]);

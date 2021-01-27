import test from 'ava';
import chunkify from './index.js';

test('array', t => {
	t.deepEqual(
		[...chunkify([], 1)],
		[]
	);

	t.deepEqual(
		[...chunkify([], 2)],
		[]
	);

	t.deepEqual(
		[...chunkify([1], 3)],
		[[1]]
	);

	t.deepEqual(
		[...chunkify([1, 2], 1)],
		[[1], [2]]
	);

	t.deepEqual(
		[...chunkify([1, 2], 2)],
		[[1, 2]]
	);

	t.deepEqual(
		[...chunkify([1, 2, 3], 2)],
		[[1, 2], [3]]
	);
});

test('iterable', t => {
	t.deepEqual(
		[...chunkify(new Set(), 1)],
		[]
	);

	t.deepEqual(
		[...chunkify(new Set(), 2)],
		[]
	);

	t.deepEqual(
		[...chunkify(new Set([1]), 3)],
		[[1]]
	);

	t.deepEqual(
		[...chunkify(new Set([1, 2]), 1)],
		[[1], [2]]
	);

	t.deepEqual(
		[...chunkify(new Set([1, 2]), 2)],
		[[1, 2]]
	);

	t.deepEqual(
		[...chunkify(new Set([1, 2, 3]), 2)],
		[[1, 2], [3]]
	);
});

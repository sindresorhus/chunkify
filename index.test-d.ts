import {expectType} from 'tsd';
import chunkify from './index.js';

for (const element of chunkify([1, 2], 1)) {
	expectType<number[]>(element);
}

const iterable = chunkify([1, 2], 1);

// Note: This should really be strongly typed, but TS isn't smart enough.
expectType<any>(iterable[Symbol.iterator]().next().value);

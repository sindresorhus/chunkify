/**
Split an iterable into evenly sized chunks. The last chunk could be smaller.

@param iterable - The iterable to chunkify.
@param chunkSize - The size of the chunks. Integer. Minimum 1.
@returns An iterable with the chunks.

@example
```
import chunkify from '@sindresorhus/chunkify';

console.log([...chunkify([1, 2, 3, 4], 2)]);
//=> [[1, 2], [3, 4]]

console.log([...chunkify([1, 2, 3, 4], 3)]);
//=> [[1, 2, 3], [4]]
```
*/
export default function chunkify<T>(
	iterable: Iterable<T>,
	chunkSize: number
): Iterable<T[]>;

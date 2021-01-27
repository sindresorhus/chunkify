# chunkify

> Split an iterable into evenly sized chunks

## Install

```
$ npm install @sindresorhus/chunkify
```

## Usage

```js
import chunkify from '@sindresorhus/chunkify';

console.log([...chunkify([1, 2, 3, 4], 2)]);
//=> [[1, 2], [3, 4]]

console.log([...chunkify([1, 2, 3, 4], 3)]);
//=> [[1, 2, 3], [4]]

console.log([...chunkify([1, 2, 3, 4], 3, 2)]);
//=> [[3, 4]]
```

## API

### chunkify(iterable, chunkSize, start)

Returns an iterable with the chunks. The last chunk could be smaller.

#### iterable

Type: `Iterable` *(for example, `Array`)*

The iterable to chunkify.

#### chunkSize

Type: `number` *(integer)*\
Minimum: `1`

The size of the chunks.

### start (optional)

 Type: `number` *(integer)*\
 Default: `0`

 The starting index (zero base) for the splitting

 If `start` is greater than the length of iterable an empty array will be returned

# chunkify

> Split an iterable into evenly sized chunks

## Install

```sh
npm install @sindresorhus/chunkify
```

## Usage

```js
import chunkify from '@sindresorhus/chunkify';

console.log([...chunkify([1, 2, 3, 4], 2)]);
//=> [[1, 2], [3, 4]]

console.log([...chunkify([1, 2, 3, 4], 3)]);
//=> [[1, 2, 3], [4]]
```

## API

### chunkify(iterable, chunkSize)

Returns an iterable with the chunks. The last chunk could be smaller.

#### iterable

Type: `Iterable` *(for example, `Array`)*

The iterable to chunkify.

#### chunkSize

Type: `number` *(integer)*\
Minimum: `1`

The size of the chunks.

## Use-cases

### Batch processing

When dealing with large datasets, breaking data into manageable chunks can optimize the batch processing tasks.

```js
import chunkify from '@sindresorhus/chunkify';

const largeDataSet = [...Array(1000).keys()];
const chunkedData = chunkify(largeDataSet, 50);

for (const chunk of chunkedData) {
	processBatch(chunk);
}
```

### Parallel processing

Dividing data into chunks can be useful in parallel processing to distribute workload evenly across different threads or workers.

```js
import {Worker} from 'node:worker_threads';
import chunkify from '@sindresorhus/chunkify';

const data = [/* some large dataset */];
const chunkedData = chunkify(data, 20);

for (const [index, chunk] of chunkedData.entries()) {
	const worker = new Worker('./worker.js', {
		workerData: {
			chunk,
			index
		}
	});
}
```

### Network requests

Splitting a large number of network requests into chunks can help in managing the load on the network and preventing rate limiting.

```js
import chunkify from '@sindresorhus/chunkify';

const urls = [/* Array of URLs */];

const chunkedUrls = chunkify(urls, 10);

for (const chunk of chunkedUrls) {
	await Promise.all(chunk.map(url => fetch(url)));
}
```

export default function * chunkify(iterable, chunkSize, start = 0) {
	if (typeof iterable[Symbol.iterator] !== 'function') {
		throw new TypeError('Expected an `Iterable` in the first argument');
	}

	if (!(Number.isSafeInteger(chunkSize) && chunkSize > 0)) {
		throw new TypeError(`Expected \`chunkSize\` to be a an integer from 1 and up, got \`${chunkSize}\``);
	}

	if (Array.isArray(iterable)) {
		if (start) {
			iterable.splice(0, start);
		}

		for (let index = 0; index < iterable.length; index += chunkSize) {
			yield iterable.slice(index, index + chunkSize);
		}

		return;
	}

	let chunk = [];

	for (const value of iterable) {
		chunk.push(value);

		if (chunk.length === chunkSize) {
			yield chunk;
			chunk = [];
		}
	}

	if (chunk.length > 0) {
		yield chunk;
	}
}

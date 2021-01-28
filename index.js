export default function chunkify(iterable, chunkSize) {
	if (typeof iterable[Symbol.iterator] !== 'function') {
		throw new TypeError('Expected an `Iterable` in the first argument');
	}

	if (!(Number.isSafeInteger(chunkSize) && chunkSize > 0)) {
		throw new TypeError(
			`Expected \`chunkSize\` to be a an integer from 1 and up, got \`${chunkSize}\``
		);
	}

	return {
		* [Symbol.iterator]() {
			if (Array.isArray(iterable)) {
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
	};
}

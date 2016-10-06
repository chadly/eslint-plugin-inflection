import path from "path";

export function valid(filename) {
	return {
		code: filename,
		filename: filename
	};
}

export function invalidPlural(filename) {
	return {
		code: filename,
		filename: filename,
		errors: [{
			message: `Filename '${path.basename(filename)}' is plural where plural filenames are not allowed.`,
			column: 1,
			line: 1
		}]
	};
}

export function invalidSingular(filename) {
	return {
		code: filename,
		filename: filename,
		errors: [{
			message: `Filename '${path.basename(filename)}' is singular where singular filenames are not allowed.`,
			column: 1,
			line: 1
		}]
	};
}
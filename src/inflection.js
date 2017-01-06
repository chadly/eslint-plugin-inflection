import inflector from "inflected";
import { words as _words } from "lodash";

export function isPlural(val) {
	val = val.toLowerCase();
	const parsed = parse(val);

	if (parsed.single === parsed.plural) {
		return true;
	}

	return parsed.singular != val;
}

export function isSingular(val) {
	val = val.toLowerCase();
	const parsed = parse(val);

	if (parsed.single === parsed.plural) {
		return true;
	}

	return parsed.plural != val;
}

export function getWord(val) {
	const words = _words(val);
	return words[words.length - 1];
}

function parse(val) {
	return {
		plural: inflector.pluralize(val).toLowerCase(),
		singular: inflector.singularize(val).toLowerCase()
	};
}
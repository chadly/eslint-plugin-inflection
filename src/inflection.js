import inflector from "inflected";

export function isPlural(val) {
	if (val === "lens") {
		// ehh special case
		return false;
	}

	const parsed = parse(val);

	if (parsed.single === parsed.plural) {
		return true;
	}

	return parsed.singular != val;
}

export function isSingular(val) {
	if (val === "lens") {
		// ehh special case
		return true;
	}

	const parsed = parse(val);

	if (parsed.single === parsed.plural) {
		return true;
	}

	return parsed.plural != val;
}

function parse(val) {
	return {
		plural: inflector.pluralize(val),
		singular: inflector.singularize(val)
	};
}
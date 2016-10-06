import inflector from "inflected";

export function isPlural(val) {
	const parsed = parse(val);

	if (parsed.single === parsed.plural) {
		return true;
	}

	return parsed.singular != val;
}

export function isSingular(val) {
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
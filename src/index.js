import noPluralFilenames from "./rules/no-plural-filenames";
import noSingularFilenames from "./rules/no-singular-filenames";

module.exports = {
	rules: {
		"no-plural-filenames": noPluralFilenames,
		"no-singular-filenames": noSingularFilenames
	}
};
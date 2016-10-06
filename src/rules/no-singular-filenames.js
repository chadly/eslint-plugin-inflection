import path from "path";
import { getWord, isSingular } from "../inflection";

module.exports = {
	create: function(context) {
		return {
			"Program": function(node) {
				const filename = context.getFilename();
				const ext = path.extname(filename);
				const name = path.basename(filename, ext);
				const word = getWord(name);

				if (isSingular(word)) {
					context.report(node, "Filename '{{name}}' is singular where singular filenames are not allowed.", {
						name: `${name}${ext}`
					});
				}
			}
		};
	}
};
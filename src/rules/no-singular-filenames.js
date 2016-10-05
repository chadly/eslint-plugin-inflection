import path from "path";
import { isSingular } from "../inflection";

module.exports = {
	create: function(context) {
		return {
			"Program": function(node) {
				const filename = context.getFilename();
				const ext = path.extname(filename);
				const name = path.basename(filename, ext);

				if (isSingular(name)) {
					context.report(node, "Filename '{{name}}' is singular where singular filenames are not allowed.", {
						name: `${name}${ext}`
					});
				}
			}
		};
	}
};
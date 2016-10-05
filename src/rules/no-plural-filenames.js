import path from "path";
import { isPlural } from "../inflection";

module.exports = {
	create: function(context) {
		return {
			"Program": function(node) {
				const filename = context.getFilename();
				const ext = path.extname(filename);
				const name = path.basename(filename, ext);

				if (isPlural(name)) {
					context.report(node, "Filename '{{name}}' is plural where plural filenames are not allowed.", {
						name: `${name}${ext}`
					});
				}
			}
		};
	}
};
import rule from "../src/rules/no-plural-filenames";
import { RuleTester } from "eslint";

const tester = new RuleTester();

tester.run("no-plural-filenames", rule, {
	valid: [{
		code: "poop.js",
		filename: "poop.js"
	}, {
		code: "neighbor.js",
		filename: "neighbor.js"
	}, {
		code: "bus.js",
		filename: "bus.js"
	}, {
		code: "news.js",
		filename: "news.js"
	}, {
		code: "lens.js",
		filename: "lens.js",
		errors: [message("lens.js")]
	}, {
		code: "octopus.js",
		filename: "octopus.js"
	}, {
		code: "sheep.js",
		filename: "sheep.js"
	}, {
		code: "woman.js",
		filename: "woman.js"
	}, {
		code: "foo/bar.js",
		filename: "foo/bar.js"
	}, {
		code: "foo/bar.min.js",
		filename: "foo/bar.min.js"
	}],
	invalid: [{
		code: "poops.js",
		filename: "poops.js",
		errors: [message("poops.js")]
	}, {
		code: "neighbors.js",
		filename: "neighbors.js",
		errors: [message("neighbors.js")]
	}, {
		code: "buses.js",
		filename: "buses.js",
		errors: [message("buses.js")]
	}, {
		code: "newses.js", // I know this isn't a word
		filename: "newses.js",
		errors: [message("newses.js")]
	}, {
		code: "lenses.js",
		filename: "lenses.js",
		errors: [message("lenses.js")]
	}, {
		code: "octopuses.js", // I know this isn't a word
		filename: "octopuses.js",
		errors: [message("octopuses.js")]
	}, {
		code: "octopi.js",
		filename: "octopi.js",
		errors: [message("octopi.js")]
	}, {
		code: "sheeps.js", // I know this isn't a word
		filename: "sheeps.js",
		errors: [message("sheeps.js")]
	}, {
		code: "women.js",
		filename: "women.js",
		errors: [message("women.js")]
	}, {
		code: "foo/bars.js",
		filename: "foo/bars.js",
		errors: [message("bars.js")]
	}, {
		code: "foo/bar.mins.js",
		filename: "foo/bar.mins.js",
		errors: [message("bar.mins.js")]
	}]
});

function message(name) {
	return {
		message: `Filename '${name}' is plural where plural filenames are not allowed.`,
		column: 1,
		line: 1
	};
}
import rule from "../src/rules/no-singular-filenames";
import { RuleTester } from "eslint";

const tester = new RuleTester();

tester.run("no-singular-filenames", rule, {
	invalid: [{
		code: "poop.js",
		filename: "poop.js",
		errors: [message("poop.js")]
	}, {
		code: "neighbor.js",
		filename: "neighbor.js",
		errors: [message("neighbor.js")]
	}, {
		code: "bus.js",
		filename: "bus.js",
		errors: [message("bus.js")]
	}, {
		code: "octopus.js",
		filename: "octopus.js",
		errors: [message("octopus.js")]
	}, {
		code: "woman.js",
		filename: "woman.js",
		errors: [message("woman.js")]
	}, {
		code: "foo/bar.js",
		filename: "foo/bar.js",
		errors: [message("bar.js")]
	}, {
		code: "foo/bar.min.js",
		filename: "foo/bar.min.js",
		errors: [message("bar.min.js")]
	}],
	valid: [{
		code: "poops.js",
		filename: "poops.js"
	}, {
		code: "neighbors.js",
		filename: "neighbors.js"
	}, {
		code: "news.js",
		filename: "news.js"
	}, {
		code: "buses.js",
		filename: "buses.js"
	}, {
		code: "newses.js", // I know this isn't a word
		filename: "newses.js"
	}, {
		code: "octopuses.js", // I know this isn't a word
		filename: "octopuses.js"
	}, {
		code: "octopi.js",
		filename: "octopi.js"
	}, {
		code: "sheep.js",
		filename: "sheep.js"
	}, {
		code: "sheeps.js", // I know this isn't a word
		filename: "sheeps.js"
	}, {
		code: "women.js",
		filename: "women.js"
	}, {
		code: "foo/bars.js",
		filename: "foo/bars.js"
	}, {
		code: "foo/bar.mins.js",
		filename: "foo/bar.mins.js"
	}]
});

function message(name) {
	return {
		message: `Filename '${name}' is singular where singular filenames are not allowed.`,
		column: 1,
		line: 1
	};
}
import rule from "../src/rules/no-plural-filenames";
import { RuleTester } from "eslint";
import { valid, invalidPlural as invalid } from "./utils";

const tester = new RuleTester();

tester.run("no-plural-filenames", rule, {
	valid: [
		valid("poop.js"),
		valid("neighbor.js"),
		valid("bus.js"),
		valid("news.js"),
		valid("octopus.js"),
		valid("sheep.js"),
		valid("woman.js"),
		valid("foo/bar.js"),
		valid("foo/bar.min.js"),
		valid("here-is-the-bus.js"),
		valid("hereIsTheBus.js"),
		valid("HERE_IS_THE_BUS.js")
	],
	invalid: [
		invalid("poops.js"),
		invalid("neighbors.js"),
		invalid("buses.js"),
		invalid("newses.js"), // I know this isn't a word
		invalid("octopuses.js"), // I know this isn't a word
		invalid("octopi.js"),
		invalid("sheeps.js"), // I know this isn't a word
		invalid("women.js"),
		invalid("foo/bars.js"),
		invalid("foo/bar.mins.js"),
		invalid("here-are-the-women.js"),
		invalid("hereAreTheWomen.js"),
		invalid("HERE_ARE_THE_WOMEN.js")
	]
});
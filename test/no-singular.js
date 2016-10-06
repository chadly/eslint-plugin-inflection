import rule from "../src/rules/no-singular-filenames";
import { RuleTester } from "eslint";
import { valid, invalidSingular as invalid } from "./utils";

const tester = new RuleTester();

tester.run("no-singular-filenames", rule, {
	invalid: [
		invalid("poop.js"),
		invalid("neighbor.js"),
		invalid("bus.js"),
		invalid("octopus.js"),
		invalid("woman.js"),
		invalid("foo/bar.js"),
		invalid("foo/bar.min.js"),
		invalid("here-is-the-bus.js"),
		invalid("hereIsTheBus.js"),
		invalid("HERE_IS_THE_BUS.js")
	],
	valid: [
		valid("poops.js"),
		valid("neighbors.js"),
		valid("news.js"),
		valid("buses.js"),
		valid("newses.js"), // I know this isn't a word
		valid("octopuses.js"), // I know this isn't a word
		valid("octopi.js"),
		valid("sheep.js"),
		valid("sheeps.js"), // I know this isn't a word
		valid("women.js"),
		valid("foo/bars.js"),
		valid("foo/bar.mins.js"),
		valid("here-are-the-women.js"),
		valid("hereAreTheWomen.js"),
		valid("HERE_ARE_THE_WOMEN.js")
	]
});
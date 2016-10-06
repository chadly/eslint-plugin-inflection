# ESLint Filename Inflection Plugin

> ESLint plugin to check inflection of filenames

Add rules for whether or not filenames should be plural or singular.

## Install

```
npm install eslint-plugin-inflection --save
```

## Usage

Add to your `.eslintrc.yml`:

```yml
plugins:
  - inflection
rules:
  inflection/no-plural-filenames:
    - error
```

or

```yml
plugins:
  - inflection
rules:
  inflection/no-singular-filenames:
    - warn
```

It does what is sounds like it should do. With the `no-plural-filenames` rule enabled, these would be valid filenames:

* `bus.js`
* `lens.js`
* `woman.js`
* `here-is-the-woman.js`
* `HERE_IS_THE_WOMAN.JS`
* `hereIsTheWoman.js`

while these would be invalid:

* `buses.js`
* `lenses.js`
* `women.js`
* `here-are-the-women.js`
* `HERE_ARE_THE_WOMEN.JS`
* `hereAreTheWomen.js`

For the `no-singular-filenames` rule, it would be the opposite.
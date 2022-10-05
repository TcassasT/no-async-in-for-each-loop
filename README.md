# eslint-plugin-no-async-in-for-each-loop

Disallow using async in forEach loops

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-async-in-for-each-loop`:

```sh
npm install eslint-plugin-no-async-in-for-each-loop --save-dev
```

## Usage

Add `no-async-in-for-each-loop` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-async-in-for-each-loop"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-async-in-for-each-loop/no-async-in-for-each-loop": 2
    }
}
```

## Examples

Valid code 👍:

```js
['gunma'].forEach((prefecutre) => { console.log(prefecutre) })
```

Invalid code 👎:
```js
['tokyo'].forEach(async (prefecutre) => { console.log(prefecture) })
```
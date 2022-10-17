# Disallow async in forEach loops (no-async-in-for-each-loop)

Using asynchronous code inside forEach loops can lead to unnexpected behaviours.

## Rule Details

This rule aims to prevent the usage of asynchronous code in forEach loops

Examples of **incorrect** code for this rule:

```js

['gunma'].forEach(async (prefecutre) => { console.log(prefecture) })

```

Examples of **correct** code for this rule:

```js

['yokohama'].forEach((prefecutre) => { console.log(prefecutre) })

```

## Further Reading

To see a more detailed reason to why I created this rule, [see](https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971).

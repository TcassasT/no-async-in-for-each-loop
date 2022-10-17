/**
 * @fileoverview Disallow asynchronous behavior inside forEach loops
 * @author Tomás Cassas
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-async-in-for-each-loop'),
  RuleTester = require('eslint').RuleTester;
const ERROR_MSG_ASYNC_FOREACH =
  'Do not use async in forEach loop';

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2017 } });
ruleTester.run('no-async-in-for-each-loop', rule, {
  valid: [
    {
      code: "['yokohama'].forEach((prefecutre) => { console.log(prefecutre) })",
    },
  ],

  invalid: [
    {
      code:
        "['gunma'].forEach(async (prefecutre) => { console.log(prefecture) })",
      errors: [{ message: ERROR_MSG_ASYNC_FOREACH, type: 'CallExpression' }],
    },
  ],
});

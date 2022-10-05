/**
 * @fileoverview Disallow asynchronous behavior inside forEach loops
 * @author Tomás Cassas
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow asynchronous behavior inside forEach loops',
      recommended: false,
      url: null,
    },
    messages: {
      invalidAsyncLoop: 'Do not use async in forEach loop',
    },
    schema: [],
  },

  create(context) {
    // variables should be defined here
    const ARROW_TYPE = 'ArrowFunctionExpression';
    const FUNCTION_TYPE = 'FunctionExpression';
    const SUGGEST_DESC = 'See https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971.';

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const isForEach = (node) => {
      return node.callee.property && node.callee.property.name === 'forEach';
    }

    const hasFunctionArgument = (node) => {
      return node.arguments.find((argument) =>
        ((argument.type === ARROW_TYPE || argument.type === FUNCTION_TYPE) &&
          argument.async)
      )
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    const CallExpression = (node) => {
      if (isForEach(node)) {
        if (hasFunctionArgument(node)) {
          context.report({
            node,
            messageId: 'invalidAsyncLoop',
            suggest: {
              desc: SUGGEST_DESC
            },
          });
        }
      }
    }

    return {
      CallExpression
    };
  },
};

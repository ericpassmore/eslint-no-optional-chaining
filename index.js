/**
 * Copyright (c) Eric Passmore
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates
 * source github.com/facebook/lexical/eslint-plugin/src/index.js
 */

'use strict';

const rules = require('./rules');

module.exports = {
    configs: {
        all: {
            rules: {
                'passmore/no-optional-chaining': 'error',
            },
        },
        recommended: {
            rules: {
                'passmore/no-optional-chaining': 'error',
            },
        },
    },
    rules,
};
#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const piggyLatin = require('pig-latin-cyrillic');

const cli = meow(
    `
    Usage
      $ pig-latin-cyrillic 'Проверка' --dialect 'ф'
    `,
    {
        alias: {
            d: 'dialect'
        }
    }
);

console.log(chalk.green(piggyLatin(cli.input[0], cli.flags.d)));
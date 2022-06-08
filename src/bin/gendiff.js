#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0', '-V | --version', 'output the version number')
  .helpOption('-h | --help', 'output usage information')
  .option('-f | --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2, program.opts().format));
  });
program.parse(process.argv);

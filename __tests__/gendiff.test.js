import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

import gendiff from '../src/index.js';
import parser from '../src/formatters/parser.js';
import treeBuilder from '../src/treeBuilder.js';
import composer from '../src/formatters/composer.js';
import { getFileFormat } from '../src/utilities.js';
import toStylish from '../src/formatters/toStylish.js';
import toPlain from '../src/formatters/toPlain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const tests = [
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'stylishOutput.txt', formatName: 'stylish',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'stylishOutput.txt', formatName: 'stylish',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'plainOutput.txt', formatName: 'plain',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'plainOutput.txt', formatName: 'plain',
  },
  {
    filename1: 'file1.json', filename2: 'file2.json', output: 'jsonOutput.txt', formatName: 'json',
  },
  {
    filename1: 'file1.yml', filename2: 'file2.yaml', output: 'jsonOutput.txt', formatName: 'json',
  },
];

test.each(tests)('gendiff stylish, plain and json tests', ({
  filename1, filename2, output, formatName,
}) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);
  const expected = readFile(output);
  const result = gendiff(filepath1, filepath2, formatName);
  expect(result).toEqual(expected);
});

test('generate tree with wrong format test', () => {
  const { filename1 } = tests[0];
  const { filename2 } = tests[0];
  const fileContent1 = readFile(filename1);
  const fileContent2 = readFile(filename2);
  const parsedFile1 = parser(fileContent1, getFileFormat(filename1));
  const parsedFile2 = parser(fileContent2, getFileFormat(filename2));
  const tree = treeBuilder(parsedFile1, parsedFile2);
  const wrongFormat = 'xml';
  expect(() => composer(tree, wrongFormat)).toThrow(`Unknown format to generate a tree: '${wrongFormat}'!`);
});

test('gendiff with wrong extension test', () => {
  const filename1 = 'file1.xml';
  const { filename2 } = tests[0];
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);
  const wrongExtension = getFileFormat(filename1);
  expect(() => gendiff(filepath1, filepath2)).toThrow(`Unknown format to parse: '${wrongExtension}'!`);
});

test('build tree with wrong type of node test', () => {
  const filename = 'wrongTypeOfNode.txt';
  const fileContent = readFile(filename);
  const wrongTypeOfNode = 'undefined';
  expect(() => toPlain(fileContent)).toThrow(`Unknown type: '${wrongTypeOfNode}' of node!`);
  expect(() => toStylish(fileContent)).toThrow(`Unknown type: '${wrongTypeOfNode}' of node!`);
});

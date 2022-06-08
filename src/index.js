import { getFileContent, getFileFormat } from './utilities.js';
import parser from './formatters/parser.js';
import treeBuilder from './treeBuilder.js';
import composer from './formatters/composer.js';

export default function genndiff(filepath1, filepath2, formatName = 'stylish') {
  const file1ParsedContent = parser(getFileContent(filepath1), getFileFormat(filepath1));
  const file2ParsedContent = parser(getFileContent(filepath2), getFileFormat(filepath2));
  const tree = treeBuilder(file1ParsedContent, file2ParsedContent);
  return composer(tree, formatName);
}

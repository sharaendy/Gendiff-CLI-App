import toStylish from './toStylish.js';
import toPlain from './toPlain.js';
import toJson from './toJson.js';

export default function composer(tree, formatName) {
  switch (formatName) {
    case 'stylish': {
      return toStylish(tree);
    }
    case 'plain': {
      return toPlain(tree);
    }
    case 'json': {
      return toJson(tree);
    }
    default:
      throw new Error(`Unknown format to generate a tree: '${formatName}'!`);
  }
}

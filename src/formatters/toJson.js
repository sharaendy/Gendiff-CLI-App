export default function toJson(tree, spacesCount = 2) {
  return JSON.stringify(tree, null, ' '.repeat(spacesCount));
}

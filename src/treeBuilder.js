import _ from 'lodash';

function treeGenerator(file1, file2) {
  const file1Keys = Object.keys(file1);
  const file2Keys = Object.keys(file2);
  const commonKeys = _.union(file1Keys, file2Keys);
  const commonSortedKeys = _.sortBy(commonKeys);

  return commonSortedKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: treeGenerator(value1, value2),
      };
    }

    if (!Object.prototype.hasOwnProperty.call(file2, key)) {
      // если нет ключа во 2-ом файле
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }

    if (!Object.prototype.hasOwnProperty.call(file1, key)) {
      // если нет ключа в 1-ом файле
      return {
        key,
        type: 'added',
        value: value2,
      };
    }

    if (!_.isEqual(value1, value2)) {
      return {
        key,
        type: 'changed',
        value1,
        value2,
      };
    }

    return {
      key,
      type: 'unchanged',
      value: value1,
    };
  });
}

export default function treeBuilder(file1, file2) {
  return { type: 'root', children: treeGenerator(file1, file2) };
}

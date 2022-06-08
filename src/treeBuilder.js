import _ from 'lodash';

export default function treeGenerator(file1, file2) {
  const file1Keys = Object.keys(file1);
  const file2Keys = Object.keys(file2);
  const commonKeys = _.union(file1Keys, file2Keys);

  return commonKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (!Object.prototype.hasOwnProperty.call(file2, key)) {
      // если ключа нет во 2-ом файле
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }

    if (!Object.prototype.hasOwnProperty.call(file1, key)) {
      // если ключа нет в 1-ом файле
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

// console.log(treeGenerator(file1, file2));

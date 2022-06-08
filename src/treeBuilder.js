import _ from 'lodash';

const file1 = {
  a: 1,
  b: 2,
  e: 4,
};

const file2 = {
  b: 2,
  c: 3,
};

export default function treeGenerator(file1, file2) {
  const file1Keys = Object.keys(file1);
  const file2Keys = Object.keys(file2);
  const commonKeys = _.union(file1Keys, file2Keys);

  return commonKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (!file2.hasOwnProperty(key)) {
      return {
        key,
        type: 'deleted',
        value: value1,
      };
    }

    if (!file1.hasOwnProperty(key)) {
      return {
        key,
        type: 'added',
        value: value2,
      };
    }

    if (_.isEqual(value1, value2)) {
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

console.log(treeGenerator(file1, file2));
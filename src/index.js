import { getFileContent, getFileFormat } from './utilities.js'

export default function genndiff(filepath1, filepath2, options) {
  const file1Content = JSON.parse(getFileContent(filepath1));
  const file2Content = JSON.parse(getFileContent(filepath2));
  

}

// console.log(genndiff('file1.json', 'file2.json'))
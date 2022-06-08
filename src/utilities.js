import { resolve, extname } from 'path';
import { readFileSync } from 'fs';

// возвращает абсолютный путь файла
function getFilePath(file) {
  return resolve(process.cwd(), file);
}

// возвращает содержимое файла
function getFileContent(file) {
  return readFileSync(getFilePath(file), 'utf-8');
}

// вовзращает формат файла без точки
function getFileFormat(filePath) {
  return extname(filePath).slice(1);
}

export { getFileContent, getFileFormat };

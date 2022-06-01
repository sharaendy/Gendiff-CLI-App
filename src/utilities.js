const getFormat = (fileName) => fileName.split('.')[1];
const getFixturePath = (filename) => resolve(process.cwd(), filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
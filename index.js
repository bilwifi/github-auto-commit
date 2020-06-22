const jsonFile = require('jsonfile');
const moment = require('moment');
const random = require('random');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const makeCommit = async (n) => {
  if ((n !== 40 && n % 10 === 0) || n === 0) {
    console.log('PUSHED');
    return await simpleGit().push('origin', 'master');
  }
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(2, 'y')
    .add(1, 'd')
    .add(x, 'w')
    .add(y, 'd')
    .format();
  const data = {
    date: DATE,
  };
  console.dir(DATE);
  jsonFile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add(['./'])
      .commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
  });
};
makeCommit(40);

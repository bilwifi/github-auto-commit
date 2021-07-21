const jsonFile = require('jsonfile');
const moment = require('moment');
const random = require('random');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const makeCommit = async (n) => {
  if (n % 50 === 0 || n === 0) {
    await simpleGit().push('origin', 'master');
    console.log('💅 50 COMMITS PUSHED ON GITHUB 🥰');
  }
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(1, 'y')
    .add(1, 'd')
    .add(x, 'w')
    .add(y, 'd')
    .format();
  const data = {
    date: DATE,
  };
  console.dir(new Date());
  jsonFile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add(['./'])
      .commit(DATE, { '--date': '2021-07-22' }, makeCommit.bind(this, ++n));
  });
};
makeCommit(1);

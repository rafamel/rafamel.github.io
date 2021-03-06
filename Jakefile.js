const fs = require('fs');
const path = require('path');
const project = require('./project.config');

const JAKE_DIR = path.join(project.get('paths.root'), 'scripts/tasks');

(function run(dir = JAKE_DIR) {
  fs.readdirSync(dir).forEach((name) => {
    const item = path.join(dir, name);

    if (fs.statSync(item).isDirectory()) {
      if (name === 'root') run(item);
      else namespace(name, () => run(item));
    } else if (/\.jake\.js$/.exec(item)) {
      require(item);
    }
  });
})();

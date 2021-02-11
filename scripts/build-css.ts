import * as fs from 'fs';
import * as path from 'path';

(async (): Promise<void> => {
  const sass = require('node-sass');
  const tildeImporter = require('node-sass-tilde-importer');
  fs.mkdirSync(path.resolve('./build/style'), { recursive: true });

  const scssPath = path.resolve(__dirname, '../src/scss/index.scss');
  const result = sass.renderSync({
    file: scssPath,
    importer: tildeImporter,
    outputStyle: 'compressed'
  });

  const filename = 'styles.min.css';
  const targetPath = path.normalize(`./build/style/${filename}`);

  fs.writeFileSync(targetPath, result.css);
})();

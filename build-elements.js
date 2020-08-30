const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angularCustomerElements/runtime-es2015.js',
    './dist/angularCustomerElements/polyfills-es2015.js',
    //'./dist/angularCustomerElements/scripts-es2015.js',
    './dist/angularCustomerElements/main-es2015.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
  await fs.copyFile('./dist/elements/styles.css', 'elements/styles.css')
  await fs.copy('./dist/elements/assets/', 'elements/assets/' )

})()
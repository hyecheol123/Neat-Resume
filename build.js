/**
 * Generate static websites from data and layouts
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import fs from 'fs';
import util from 'util';
import yaml from 'js-yaml';

/**
 * Build Static websites from given YAML data files
 *
 * @return {Promise<void>}
 */
export async function build() {
  // Retrieve Basic Information
  const basicData = yaml.load(fs.readFileSync('./data/basic.yaml', 'utf8'));
  // Check Basic Information
  if (!(await import('./dataChecker/basic.js')).validate(basicData)) {
    throw new Error('Basic Information Validation Fail');
  }

  // Retrieve Section Data
  const sectionsData = [];
  for (const path of basicData.sections) {
    const data = yaml.load(fs.readFileSync(`./data/section/${path}`, 'utf8'));
    // Set Alias
    if ('alias' in data) {
      for (const entry of data.entries) {
        for (const propAlias of data.alias) {
          entry[Object.keys(propAlias)[0]] = entry[Object.values(propAlias)[0]];
          delete entry[Object.values(propAlias)[0]];
        }
      }
    }
    // Check Data Layout
    if (
      data.layout === undefined ||
      !(await import(`./dataChecker/layout/${data.layout}.js`)).validate(data)
    ) {
      throw new Error(`${path} validation fail`);
    }
    // Save the data
    sectionsData.push(data);
  }

  console.log(basicData);
  console.log(util.inspect(sectionsData, false, null, true));
}

build().then(() => console.log('finish'));

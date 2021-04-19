/**
 * Generate static websites from data and layouts
 *
 * @author Hyecheol (Jerry) Jang
 */

import fs from 'fs';
import util from 'util';
import yaml from 'js-yaml';

/**
 *
 * @return {Promise<void>}
 */
export async function build() {
  // Retrieve Basic Data
  const basicData = yaml.load(fs.readFileSync('./data/basic.yaml', 'utf8'));

  // Retrieve Section Data
  const sectionsData = [];
  for (const path of basicData.sections)
    sectionsData.push(
      yaml.load(fs.readFileSync(`./data/section/${path}`, 'utf8'))
    );

  console.log(basicData);
  console.log(util.inspect(sectionsData, false, null, true));
}

build().then(() => console.log('finish'));

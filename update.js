import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname } from 'node:path';

const icons = (await readdir('./icons')).sort().filter(file => extname(file) === '.svg');

const list = icons.map(file => `[<img src='icons/${file}' height='40' alt='${file}' />](icons/${file})`).join('\n');
const data = await readFile('./readme.md', 'utf8');

const updated = data.replace(
  /## Icons\n[\s\S]*?(?=\n##|$)/,
  `## Icons\n\n${list}\n`,
);

await writeFile('./readme.md', updated, 'utf8');
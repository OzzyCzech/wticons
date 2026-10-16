import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import pascalcase from 'pascalcase';

const icons = '../../icons/';
await mkdir('dist', { recursive: true });
await writeFile('dist/index.ts', '');

for (const file of await readdir(icons, { encoding: 'utf8' })) {
  if (!file.endsWith('.svg')) continue; // skip non svg files

  const svg = await readFile(icons + file, 'utf8');

  const name = pascalcase(file.replace(/\.svg$/, ''))
    .replace('Github', 'GitHub')
    .replace('Gitlab', 'GitLab')
    .replace('Paypal', 'PayPal');

  // Avoid shadowing Astro's global when compiling the Astro logo component.
  const componentFile = name === 'Astro' ? 'AstroIcon' : name;

  const header = `---\nimport type { HTMLAttributes } from "astro/types";\nexport type Props = HTMLAttributes<'svg'>\n---\n\n`;

  await writeFile('dist/' + componentFile + '.astro', header + svg.replace(`<svg `, `<svg {...Astro.props} `));

  // create index.ts
  const index = `export { default as ${name} } from './${componentFile}.astro';\n`;
  await writeFile('dist/index.ts', index, { flag: 'a' });
}
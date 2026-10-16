import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises';
import pascalcase from 'pascalcase';

const icons = '../../icons/';
await mkdir('dist/icons', { recursive: true });
await writeFile('dist/index.ts', '');

for (const file of await readdir(icons, { encoding: 'utf8' })) {
  if (!file.endsWith('.svg')) continue; // skip non svg files

  const slug = file.replace(/\.svg$/, '');
  const name = pascalcase(slug)
    .replace('Github', 'GitHub')
    .replace('Gitlab', 'GitLab')
    .replace('Paypal', 'PayPal');

  // Avoid shadowing Astro's global when compiling the Astro logo component.
  const componentFile = name === 'Astro' ? 'AstroIcon' : name;

  // Default alt text: "visual-studio-code" -> "Visual Studio Code"
  const alt = slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  await copyFile(icons + file, 'dist/icons/' + file);

  const component = `---
import { Image } from 'astro:assets';
import type { ComponentProps } from 'astro/types';
import icon from './icons/${file}';

export type Props = Omit<ComponentProps<typeof Image>, 'src' | 'alt'> & { alt?: string };

const { alt = ${JSON.stringify(alt)}, ...rest } = Astro.props;
---

<Image src={icon} alt={alt} {...rest} />
`;

  await writeFile('dist/' + componentFile + '.astro', component);

  // create index.ts
  const index = `export { default as ${name} } from './${componentFile}.astro';\n`;
  await writeFile('dist/index.ts', index, { flag: 'a' });
}

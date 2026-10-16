[![NPM Downloads](https://img.shields.io/npm/dm/@wticons/astro?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM Version](https://img.shields.io/npm/v/@wticons/astro?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM License](https://img.shields.io/npm/l/@wticons/astro?style=for-the-badge)](https://github.com/OzzyCzech/wticons/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/wticons?style=for-the-badge)](https://github.com/OzzyCzech/wticons/commits/main)

# Website Technology Icons for Astro

Bundle of website development and technology icons such as databases, frameworks, languages, libraries and tools. Requires Astro 5.7 or newer.

### Install

```shell
npm i @wticons/astro
```

### Usage

Every icon is an Astro component that renders an `<img>` through Astro's `<Image>` from `astro:assets`. The SVG is emitted as a static, cacheable asset instead of being inlined into the page, so pages with many icons stay small.

```astro
---
import { Php, AdobePhotoshop, VisualStudioCode } from '@wticons/astro';
---

<Php />
<AdobePhotoshop width={32} height={32} class="icon" />
<VisualStudioCode alt="VS Code" loading="eager" />
```

Components accept the same props as `<Image>` except `src`. `alt` defaults to the icon name, `width` and `height` default to 512.

Importing from the package root pulls every icon into the build graph, so Astro emits all SVG files into `dist/_astro` even if you use only a few. To emit only the icons you render, import components individually:

```astro
---
import Php from '@wticons/astro/Php';
import AstroIcon from '@wticons/astro/Astro';
---
```

### Inline SVG

If you need the SVG inline, for example to style it with CSS, import the file itself. Astro turns it into a component that renders the `<svg>` element:

```astro
---
import Php from '@wticons/astro/icons/php.svg';
---

<Php class="icon" />
```

### Name conflicts

Some icons share a name with a global, such as `Astro`. Import them under an alias:

```astro
---
import { Astro as AstroIcon } from '@wticons/astro';
---
```

### License

[MIT](../../LICENSE)

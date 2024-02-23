[![NPM Downloads](https://img.shields.io/npm/dm/wticons?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM Version](https://img.shields.io/npm/v/wticons?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM License](https://img.shields.io/npm/l/wticons?style=for-the-badge)](https://github.com/OzzyCzech/wticons/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/wticons?style=for-the-badge)](https://github.com/OzzyCzech/wticons/commit/main)

# Website Technology Icons

Bundle of Website development and Technology icons such databases, frameworks, languages, libraries…

### Install

```shell
yarn add @wticons/astro
```

### Usage

```javascript
---
import { Php, AdobePhotoshop, VisualStudioCode } from '@wticons/astro'; 
---

  <Php/>
<AdobePhotoshop/>
<VisualStudioCode/>
```

### How to solve a name conflict?

Because these are technology icons, there may be conflicts with library name such as [React](https://reactjs.org/).
This can easily be solved by using an alias:

```javascriptc
import { React as ReactIcon } from 'wticons';
```

## Credits

* [SVGPorn](https://svgporn.com/) - A huge collection of SVG logos by [@gilbarbara](https://github.com/gilbarbara)
* [devicon](https://devicon.dev) - a set of icons representing programming languages, designing, and development tools.
* [SVGO](https://github.com/svg/svgo) - Node.js tool for optimizing SVG files

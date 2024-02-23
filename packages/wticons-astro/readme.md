[![NPM Downloads](https://img.shields.io/npm/dm/@wticons/astro?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM Version](https://img.shields.io/npm/v/@wticons/astro?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM License](https://img.shields.io/npm/l/@wticons/astro?style=for-the-badge)](https://github.com/OzzyCzech/wticons/blob/main/LICENSE)
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

All icons are Astro component with `{...Astro.props}` added to the root `svg` element.
This should enable you to customize the element as you see fit.

```html
<Php class='some classes' data-somethinf='data' id='id' />;
```

### How to solve a name conflict?

Because these are technology icons, there may be conflicts with library name such as [React](https://reactjs.org/).
This can easily be solved by using an alias:

```javascriptc
import { Astro as AstroIcon } from '@wticons/astro';
```

### License

[MIT](../../LICENSE)
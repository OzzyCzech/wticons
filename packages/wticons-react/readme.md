[![NPM Downloads](https://img.shields.io/npm/dm/@wticons/react?style=for-the-badge)](https://www.npmjs.com/package/@wticons/react)
[![NPM Version](https://img.shields.io/npm/v/@wticons/react?style=for-the-badge)](https://www.npmjs.com/package/@wticons/react)
[![NPM License](https://img.shields.io/npm/l/@wticons/react?style=for-the-badge)](https://github.com/OzzyCzech/wticons/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/wticons?style=for-the-badge)](https://github.com/OzzyCzech/wticons/commits/main)

# Website Technology Icons for React

Bundle of website development and technology icons such as databases, frameworks, languages, libraries and tools. Every icon sits on a uniform 512 × 512 squircle tile with the original brand colours, so icons line up in grids and lists without extra styling. Works with any React version and ships TypeScript types.

### Install

```shell
npm i @wticons/react
```

### Usage

Every icon is a React component that renders an inline `<svg>` with a `0 0 512 512` viewBox. All props are spread onto the `<svg>` element, so you can size and style it like any other SVG.

```jsx
import { Php, AdobePhotoshop, VisualStudioCode } from '@wticons/react';

const Stack = () => (
  <ul>
    <li><Php width={24} /> PHP</li>
    <li><AdobePhotoshop width={24} className="icon" /> Photoshop</li>
    <li><VisualStudioCode width={24} aria-label="Visual Studio Code" /> Visual Studio Code</li>
  </ul>
);
```

The icons carry no `width` or `height`, so set one of them (or size the `<svg>` with CSS); the other side follows the square aspect ratio. Component names are the icon file names in PascalCase (`visual-studio-code.svg` → `VisualStudioCode`), see the [full list](https://github.com/OzzyCzech/wticons#icons).

### Name conflicts

Some icons share a name with a library you are using, such as `React`. Import them under an alias:

```js
import { React as ReactIcon } from '@wticons/react';
```

## Credits

* [SVGR](https://react-svgr.com) - turns the SVG files into React components.

## License

[MIT](../../LICENSE)

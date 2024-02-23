[![NPM Downloads](https://img.shields.io/npm/dm/@wticons/react?style=for-the-badge)](https://www.npmjs.com/package/@wticons/react)
[![NPM Version](https://img.shields.io/npm/v/@wticons/react?style=for-the-badge)](https://www.npmjs.com/package/@wticons/react)
[![NPM License](https://img.shields.io/npm/l/@wticons/react?style=for-the-badge)](https://github.com/OzzyCzech/wticons/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/wticons?style=for-the-badge)](https://github.com/OzzyCzech/wticons/commit/main)

# Website Technology Icons

Bundle of Website development and Technology icons such databases, frameworks, languages, libraries…

### Install

```shell
yarn add wticons
```

### Usage

```javascript
import { Photoshop, SvgAtom } from '@wticons/react';

const Homepage = () => <div>
  <ul>
    <li>
      <Php/>
      PHP
    </li>
    <li>
      <AdobePhotoshop/>
      Photoshop
    </li>
    <li>
      <VisualStudioCode/>
      Visual Studio Code
    </li>
  </ul>
</div>;

export default Homepage;
```

### How to solve a name conflict?

Because these are technology icons, there may be conflicts with library name such as [React](https://reactjs.org/).
This can easily be solved by using an alias:

```javascriptc
import { React as ReactIcon } from 'wticons';
```

## Credits

* [SVGR](https://react-svgr.com) - a complete tool box to take advantage of using SVGs in your React applications.


## License

[MIT](../../LICENSE)
# Website Technology Icons

Bundle of Website development and Technology icons such databases, frameworks, languages, libraries…

### Install

```shell
yarn add wticons
```

### Usage

```javascript
import { Photoshop, SvgAtom } from 'wticons';


const Homepage = () => <div>
  <ul>
    <li><Php/> PHP</li>
    <li><AdobePhotoshop/> Photoshop</li>
    <li><VisualStudioCode /> Visual Studio Code</li>
  </ul>
</div>

export default Homepage;
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
* [SVGR](https://react-svgr.com) - a complete tool box to take advantage of using SVGs in your React applications.

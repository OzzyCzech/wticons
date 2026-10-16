# Website Technology Icons (`wticons`)

[![NPM Downloads](https://img.shields.io/npm/dm/%40wticons%2Freact?style=for-the-badge)](https://www.npmjs.com/package/@wticons/react)
[![NPM Version](https://img.shields.io/npm/v/%40wticons%2Freact?style=for-the-badge)](https://www.npmjs.com/package/@wticons/react)
[![NPM Downloads](https://img.shields.io/npm/dm/%40wticons%2Fastro?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM Version](https://img.shields.io/npm/v/%40wticons%2Fastro?style=for-the-badge)](https://www.npmjs.com/package/@wticons/astro)
[![NPM License](https://img.shields.io/github/license/OzzyCzech/wticons?style=for-the-badge)](https://github.com/OzzyCzech/wticons/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/OzzyCzech/wticons?style=for-the-badge)](https://github.com/OzzyCzech/wticons/commits/main)

## Install

```shell
npm i @wticons/react
npm i @wticons/astro
```

## Usage

React components render an inline `<svg>` and spread their props onto it. Astro components render an `<img>` through Astro's `<Image>`, so the SVG is served as a cacheable asset and the page stays small. See the package readmes for details.

### React

```jsx
import { Php, AdobePhotoshop, VisualStudioCode } from '@wticons/react';

const Stack = () => (
  <ul>
    <li><Php width={24} /> PHP</li>
    <li><AdobePhotoshop width={24} /> Photoshop</li>
    <li><VisualStudioCode width={24} /> Visual Studio Code</li>
  </ul>
);
```

### Astro

```astro
---
import { Php, AdobePhotoshop, VisualStudioCode } from '@wticons/astro';
---

<Php />
<AdobePhotoshop width={32} height={32} />
<VisualStudioCode alt="VS Code" />
```

### Name conflicts

Some icons share a name with the library you are using them in. Import them under an alias:

```js
import { React as ReactIcon } from '@wticons/react';
import { Astro as AstroIcon } from '@wticons/astro';
```

## Development

The repository is a [pnpm](https://pnpm.io) workspace. Raw Affinity exports live in `src/`, their SVGO-optimized copies in `icons/`, and the packages in `packages/` are generated from `icons/`.

```shell
pnpm install
pnpm build   # optimizes icons/ with SVGO, rebuilds both packages and updates the icon list below
```

To add or update an icon, export a 512 × 512 SVG into both `src/` and `icons/` and run `pnpm build`, which optimizes the copy in `icons/` in place. The file name becomes the component name in PascalCase (`visual-studio-code.svg` → `VisualStudioCode`).

## Release

Both packages are versioned together and published by GitHub Actions on a `v*.*.*` tag:

```shell
make release VERSION=2.5.0
```

This bumps both packages, commits, tags `v2.5.0` and pushes. The workflow then builds, runs `astro check`, publishes `@wticons/react` and `@wticons/astro` to npm with provenance and creates a GitHub Release.

## Credits

* [SVGPorn](https://svgporn.com/) - a huge collection of SVG logos by [@gilbarbara](https://github.com/gilbarbara)
* [devicon](https://devicon.dev) - a set of icons representing programming languages, designing, and development tools.
* [SVGO](https://github.com/svg/svgo) - Node.js tool for optimizing SVG files
* [TechIcons](https://techicons.dev/) - set of technology icons 

## Icons

[<img src='icons/adobe-illustrator.svg' width='64' alt='adobe-illustrator.svg' />](icons/adobe-illustrator.svg)
[<img src='icons/adobe-lightroom.svg' width='64' alt='adobe-lightroom.svg' />](icons/adobe-lightroom.svg)
[<img src='icons/adobe-photoshop.svg' width='64' alt='adobe-photoshop.svg' />](icons/adobe-photoshop.svg)
[<img src='icons/adobe-premiere.svg' width='64' alt='adobe-premiere.svg' />](icons/adobe-premiere.svg)
[<img src='icons/affinity-designer.svg' width='64' alt='affinity-designer.svg' />](icons/affinity-designer.svg)
[<img src='icons/affinity-studio.svg' width='64' alt='affinity-studio.svg' />](icons/affinity-studio.svg)
[<img src='icons/android.svg' width='64' alt='android.svg' />](icons/android.svg)
[<img src='icons/angular.svg' width='64' alt='angular.svg' />](icons/angular.svg)
[<img src='icons/anthropic.svg' width='64' alt='anthropic.svg' />](icons/anthropic.svg)
[<img src='icons/apache.svg' width='64' alt='apache.svg' />](icons/apache.svg)
[<img src='icons/apple.svg' width='64' alt='apple.svg' />](icons/apple.svg)
[<img src='icons/arc.svg' width='64' alt='arc.svg' />](icons/arc.svg)
[<img src='icons/astro.svg' width='64' alt='astro.svg' />](icons/astro.svg)
[<img src='icons/ava.svg' width='64' alt='ava.svg' />](icons/ava.svg)
[<img src='icons/aws.svg' width='64' alt='aws.svg' />](icons/aws.svg)
[<img src='icons/azure.svg' width='64' alt='azure.svg' />](icons/azure.svg)
[<img src='icons/babel.svg' width='64' alt='babel.svg' />](icons/babel.svg)
[<img src='icons/backbone-js.svg' width='64' alt='backbone-js.svg' />](icons/backbone-js.svg)
[<img src='icons/bash.svg' width='64' alt='bash.svg' />](icons/bash.svg)
[<img src='icons/behance.svg' width='64' alt='behance.svg' />](icons/behance.svg)
[<img src='icons/biomejs.svg' width='64' alt='biomejs.svg' />](icons/biomejs.svg)
[<img src='icons/bitbucket.svg' width='64' alt='bitbucket.svg' />](icons/bitbucket.svg)
[<img src='icons/bootstrap.svg' width='64' alt='bootstrap.svg' />](icons/bootstrap.svg)
[<img src='icons/bower.svg' width='64' alt='bower.svg' />](icons/bower.svg)
[<img src='icons/brave.svg' width='64' alt='brave.svg' />](icons/brave.svg)
[<img src='icons/bun.svg' width='64' alt='bun.svg' />](icons/bun.svg)
[<img src='icons/cakephp.svg' width='64' alt='cakephp.svg' />](icons/cakephp.svg)
[<img src='icons/capistrano.svg' width='64' alt='capistrano.svg' />](icons/capistrano.svg)
[<img src='icons/chatgpt.svg' width='64' alt='chatgpt.svg' />](icons/chatgpt.svg)
[<img src='icons/chrome.svg' width='64' alt='chrome.svg' />](icons/chrome.svg)
[<img src='icons/circleci.svg' width='64' alt='circleci.svg' />](icons/circleci.svg)
[<img src='icons/claude-code.svg' width='64' alt='claude-code.svg' />](icons/claude-code.svg)
[<img src='icons/claude.svg' width='64' alt='claude.svg' />](icons/claude.svg)
[<img src='icons/codeigniter.svg' width='64' alt='codeigniter.svg' />](icons/codeigniter.svg)
[<img src='icons/codex.svg' width='64' alt='codex.svg' />](icons/codex.svg)
[<img src='icons/composer.svg' width='64' alt='composer.svg' />](icons/composer.svg)
[<img src='icons/couch-db.svg' width='64' alt='couch-db.svg' />](icons/couch-db.svg)
[<img src='icons/css.svg' width='64' alt='css.svg' />](icons/css.svg)
[<img src='icons/cucumber.svg' width='64' alt='cucumber.svg' />](icons/cucumber.svg)
[<img src='icons/cursor.svg' width='64' alt='cursor.svg' />](icons/cursor.svg)
[<img src='icons/cypress.svg' width='64' alt='cypress.svg' />](icons/cypress.svg)
[<img src='icons/d3js.svg' width='64' alt='d3js.svg' />](icons/d3js.svg)
[<img src='icons/dart.svg' width='64' alt='dart.svg' />](icons/dart.svg)
[<img src='icons/debian.svg' width='64' alt='debian.svg' />](icons/debian.svg)
[<img src='icons/deno.svg' width='64' alt='deno.svg' />](icons/deno.svg)
[<img src='icons/django.svg' width='64' alt='django.svg' />](icons/django.svg)
[<img src='icons/docker.svg' width='64' alt='docker.svg' />](icons/docker.svg)
[<img src='icons/doctrine.svg' width='64' alt='doctrine.svg' />](icons/doctrine.svg)
[<img src='icons/dotnet.svg' width='64' alt='dotnet.svg' />](icons/dotnet.svg)
[<img src='icons/drupal.svg' width='64' alt='drupal.svg' />](icons/drupal.svg)
[<img src='icons/dynamodb.svg' width='64' alt='dynamodb.svg' />](icons/dynamodb.svg)
[<img src='icons/edge.svg' width='64' alt='edge.svg' />](icons/edge.svg)
[<img src='icons/electron.svg' width='64' alt='electron.svg' />](icons/electron.svg)
[<img src='icons/eleventy.svg' width='64' alt='eleventy.svg' />](icons/eleventy.svg)
[<img src='icons/elixir.svg' width='64' alt='elixir.svg' />](icons/elixir.svg)
[<img src='icons/elm.svg' width='64' alt='elm.svg' />](icons/elm.svg)
[<img src='icons/ember.svg' width='64' alt='ember.svg' />](icons/ember.svg)
[<img src='icons/eslint.svg' width='64' alt='eslint.svg' />](icons/eslint.svg)
[<img src='icons/express.svg' width='64' alt='express.svg' />](icons/express.svg)
[<img src='icons/fauna.svg' width='64' alt='fauna.svg' />](icons/fauna.svg)
[<img src='icons/fedora.svg' width='64' alt='fedora.svg' />](icons/fedora.svg)
[<img src='icons/firebase.svg' width='64' alt='firebase.svg' />](icons/firebase.svg)
[<img src='icons/firefox.svg' width='64' alt='firefox.svg' />](icons/firefox.svg)
[<img src='icons/flutter.svg' width='64' alt='flutter.svg' />](icons/flutter.svg)
[<img src='icons/freebsd.svg' width='64' alt='freebsd.svg' />](icons/freebsd.svg)
[<img src='icons/gemini.svg' width='64' alt='gemini.svg' />](icons/gemini.svg)
[<img src='icons/gimp.svg' width='64' alt='gimp.svg' />](icons/gimp.svg)
[<img src='icons/git.svg' width='64' alt='git.svg' />](icons/git.svg)
[<img src='icons/github-alt.svg' width='64' alt='github-alt.svg' />](icons/github-alt.svg)
[<img src='icons/github-copilot.svg' width='64' alt='github-copilot.svg' />](icons/github-copilot.svg)
[<img src='icons/github.svg' width='64' alt='github.svg' />](icons/github.svg)
[<img src='icons/gitlab.svg' width='64' alt='gitlab.svg' />](icons/gitlab.svg)
[<img src='icons/gitter.svg' width='64' alt='gitter.svg' />](icons/gitter.svg)
[<img src='icons/gnu-make.svg' width='64' alt='gnu-make.svg' />](icons/gnu-make.svg)
[<img src='icons/go.svg' width='64' alt='go.svg' />](icons/go.svg)
[<img src='icons/google-cloud.svg' width='64' alt='google-cloud.svg' />](icons/google-cloud.svg)
[<img src='icons/gradle.svg' width='64' alt='gradle.svg' />](icons/gradle.svg)
[<img src='icons/grafana.svg' width='64' alt='grafana.svg' />](icons/grafana.svg)
[<img src='icons/grunt.svg' width='64' alt='grunt.svg' />](icons/grunt.svg)
[<img src='icons/gulp.svg' width='64' alt='gulp.svg' />](icons/gulp.svg)
[<img src='icons/haml.svg' width='64' alt='haml.svg' />](icons/haml.svg)
[<img src='icons/handlebars.svg' width='64' alt='handlebars.svg' />](icons/handlebars.svg)
[<img src='icons/haskell.svg' width='64' alt='haskell.svg' />](icons/haskell.svg)
[<img src='icons/heroku.svg' width='64' alt='heroku.svg' />](icons/heroku.svg)
[<img src='icons/html.svg' width='64' alt='html.svg' />](icons/html.svg)
[<img src='icons/htmx.svg' width='64' alt='htmx.svg' />](icons/htmx.svg)
[<img src='icons/httpie.svg' width='64' alt='httpie.svg' />](icons/httpie.svg)
[<img src='icons/hugging-face.svg' width='64' alt='hugging-face.svg' />](icons/hugging-face.svg)
[<img src='icons/hugo.svg' width='64' alt='hugo.svg' />](icons/hugo.svg)
[<img src='icons/ie10.svg' width='64' alt='ie10.svg' />](icons/ie10.svg)
[<img src='icons/influxdb.svg' width='64' alt='influxdb.svg' />](icons/influxdb.svg)
[<img src='icons/inkscape.svg' width='64' alt='inkscape.svg' />](icons/inkscape.svg)
[<img src='icons/j-query.svg' width='64' alt='j-query.svg' />](icons/j-query.svg)
[<img src='icons/jasmine.svg' width='64' alt='jasmine.svg' />](icons/jasmine.svg)
[<img src='icons/java.svg' width='64' alt='java.svg' />](icons/java.svg)
[<img src='icons/jenkins.svg' width='64' alt='jenkins.svg' />](icons/jenkins.svg)
[<img src='icons/jest.svg' width='64' alt='jest.svg' />](icons/jest.svg)
[<img src='icons/js.svg' width='64' alt='js.svg' />](icons/js.svg)
[<img src='icons/jsdom.svg' width='64' alt='jsdom.svg' />](icons/jsdom.svg)
[<img src='icons/json-schema.svg' width='64' alt='json-schema.svg' />](icons/json-schema.svg)
[<img src='icons/kirby.svg' width='64' alt='kirby.svg' />](icons/kirby.svg)
[<img src='icons/kotlin.svg' width='64' alt='kotlin.svg' />](icons/kotlin.svg)
[<img src='icons/kubernetes.svg' width='64' alt='kubernetes.svg' />](icons/kubernetes.svg)
[<img src='icons/laravel.svg' width='64' alt='laravel.svg' />](icons/laravel.svg)
[<img src='icons/latex.svg' width='64' alt='latex.svg' />](icons/latex.svg)
[<img src='icons/less.svg' width='64' alt='less.svg' />](icons/less.svg)
[<img src='icons/linux.svg' width='64' alt='linux.svg' />](icons/linux.svg)
[<img src='icons/lua.svg' width='64' alt='lua.svg' />](icons/lua.svg)
[<img src='icons/magento.svg' width='64' alt='magento.svg' />](icons/magento.svg)
[<img src='icons/mariadb.svg' width='64' alt='mariadb.svg' />](icons/mariadb.svg)
[<img src='icons/markdown.svg' width='64' alt='markdown.svg' />](icons/markdown.svg)
[<img src='icons/material-ui.svg' width='64' alt='material-ui.svg' />](icons/material-ui.svg)
[<img src='icons/matter.svg' width='64' alt='matter.svg' />](icons/matter.svg)
[<img src='icons/mdx.svg' width='64' alt='mdx.svg' />](icons/mdx.svg)
[<img src='icons/meta.svg' width='64' alt='meta.svg' />](icons/meta.svg)
[<img src='icons/meteor.svg' width='64' alt='meteor.svg' />](icons/meteor.svg)
[<img src='icons/midjourney.svg' width='64' alt='midjourney.svg' />](icons/midjourney.svg)
[<img src='icons/mint.svg' width='64' alt='mint.svg' />](icons/mint.svg)
[<img src='icons/mistral.svg' width='64' alt='mistral.svg' />](icons/mistral.svg)
[<img src='icons/mocha.svg' width='64' alt='mocha.svg' />](icons/mocha.svg)
[<img src='icons/molecular.svg' width='64' alt='molecular.svg' />](icons/molecular.svg)
[<img src='icons/mongodb.svg' width='64' alt='mongodb.svg' />](icons/mongodb.svg)
[<img src='icons/my-sql.svg' width='64' alt='my-sql.svg' />](icons/my-sql.svg)
[<img src='icons/nette.svg' width='64' alt='nette.svg' />](icons/nette.svg)
[<img src='icons/next-js.svg' width='64' alt='next-js.svg' />](icons/next-js.svg)
[<img src='icons/nginx.svg' width='64' alt='nginx.svg' />](icons/nginx.svg)
[<img src='icons/node-webkit.svg' width='64' alt='node-webkit.svg' />](icons/node-webkit.svg)
[<img src='icons/nodejs.svg' width='64' alt='nodejs.svg' />](icons/nodejs.svg)
[<img src='icons/npm.svg' width='64' alt='npm.svg' />](icons/npm.svg)
[<img src='icons/nuxt.svg' width='64' alt='nuxt.svg' />](icons/nuxt.svg)
[<img src='icons/openai.svg' width='64' alt='openai.svg' />](icons/openai.svg)
[<img src='icons/openapi.svg' width='64' alt='openapi.svg' />](icons/openapi.svg)
[<img src='icons/opencollective.svg' width='64' alt='opencollective.svg' />](icons/opencollective.svg)
[<img src='icons/opensuse.svg' width='64' alt='opensuse.svg' />](icons/opensuse.svg)
[<img src='icons/opera.svg' width='64' alt='opera.svg' />](icons/opera.svg)
[<img src='icons/parcel.svg' width='64' alt='parcel.svg' />](icons/parcel.svg)
[<img src='icons/perl.svg' width='64' alt='perl.svg' />](icons/perl.svg)
[<img src='icons/phalcon.svg' width='64' alt='phalcon.svg' />](icons/phalcon.svg)
[<img src='icons/phoenix.svg' width='64' alt='phoenix.svg' />](icons/phoenix.svg)
[<img src='icons/php-storm.svg' width='64' alt='php-storm.svg' />](icons/php-storm.svg)
[<img src='icons/php-unit.svg' width='64' alt='php-unit.svg' />](icons/php-unit.svg)
[<img src='icons/php.svg' width='64' alt='php.svg' />](icons/php.svg)
[<img src='icons/pm2.svg' width='64' alt='pm2.svg' />](icons/pm2.svg)
[<img src='icons/postcss.svg' width='64' alt='postcss.svg' />](icons/postcss.svg)
[<img src='icons/postgres.svg' width='64' alt='postgres.svg' />](icons/postgres.svg)
[<img src='icons/preact.svg' width='64' alt='preact.svg' />](icons/preact.svg)
[<img src='icons/prettier.svg' width='64' alt='prettier.svg' />](icons/prettier.svg)
[<img src='icons/prisma.svg' width='64' alt='prisma.svg' />](icons/prisma.svg)
[<img src='icons/prometheus.svg' width='64' alt='prometheus.svg' />](icons/prometheus.svg)
[<img src='icons/protractor.svg' width='64' alt='protractor.svg' />](icons/protractor.svg)
[<img src='icons/pug.svg' width='64' alt='pug.svg' />](icons/pug.svg)
[<img src='icons/puppeteer.svg' width='64' alt='puppeteer.svg' />](icons/puppeteer.svg)
[<img src='icons/python.svg' width='64' alt='python.svg' />](icons/python.svg)
[<img src='icons/rails.svg' width='64' alt='rails.svg' />](icons/rails.svg)
[<img src='icons/raspberry-pi.svg' width='64' alt='raspberry-pi.svg' />](icons/raspberry-pi.svg)
[<img src='icons/react.svg' width='64' alt='react.svg' />](icons/react.svg)
[<img src='icons/redhat.svg' width='64' alt='redhat.svg' />](icons/redhat.svg)
[<img src='icons/redis.svg' width='64' alt='redis.svg' />](icons/redis.svg)
[<img src='icons/redux.svg' width='64' alt='redux.svg' />](icons/redux.svg)
[<img src='icons/remix.svg' width='64' alt='remix.svg' />](icons/remix.svg)
[<img src='icons/rollup.svg' width='64' alt='rollup.svg' />](icons/rollup.svg)
[<img src='icons/rollupjs.svg' width='64' alt='rollupjs.svg' />](icons/rollupjs.svg)
[<img src='icons/ruby.svg' width='64' alt='ruby.svg' />](icons/ruby.svg)
[<img src='icons/rust.svg' width='64' alt='rust.svg' />](icons/rust.svg)
[<img src='icons/safari.svg' width='64' alt='safari.svg' />](icons/safari.svg)
[<img src='icons/sass.svg' width='64' alt='sass.svg' />](icons/sass.svg)
[<img src='icons/scala.svg' width='64' alt='scala.svg' />](icons/scala.svg)
[<img src='icons/selenium.svg' width='64' alt='selenium.svg' />](icons/selenium.svg)
[<img src='icons/sidekiq.svg' width='64' alt='sidekiq.svg' />](icons/sidekiq.svg)
[<img src='icons/slidev.svg' width='64' alt='slidev.svg' />](icons/slidev.svg)
[<img src='icons/snowpack.svg' width='64' alt='snowpack.svg' />](icons/snowpack.svg)
[<img src='icons/sqlite.svg' width='64' alt='sqlite.svg' />](icons/sqlite.svg)
[<img src='icons/stability-ai.svg' width='64' alt='stability-ai.svg' />](icons/stability-ai.svg)
[<img src='icons/stylus.svg' width='64' alt='stylus.svg' />](icons/stylus.svg)
[<img src='icons/svelte.svg' width='64' alt='svelte.svg' />](icons/svelte.svg)
[<img src='icons/swift.svg' width='64' alt='swift.svg' />](icons/swift.svg)
[<img src='icons/symfony.svg' width='64' alt='symfony.svg' />](icons/symfony.svg)
[<img src='icons/tailwind.svg' width='64' alt='tailwind.svg' />](icons/tailwind.svg)
[<img src='icons/tomcat.svg' width='64' alt='tomcat.svg' />](icons/tomcat.svg)
[<img src='icons/type-script.svg' width='64' alt='type-script.svg' />](icons/type-script.svg)
[<img src='icons/ubuntu.svg' width='64' alt='ubuntu.svg' />](icons/ubuntu.svg)
[<img src='icons/unity.svg' width='64' alt='unity.svg' />](icons/unity.svg)
[<img src='icons/unix.svg' width='64' alt='unix.svg' />](icons/unix.svg)
[<img src='icons/unocss.svg' width='64' alt='unocss.svg' />](icons/unocss.svg)
[<img src='icons/unreal-engine.svg' width='64' alt='unreal-engine.svg' />](icons/unreal-engine.svg)
[<img src='icons/vagrant.svg' width='64' alt='vagrant.svg' />](icons/vagrant.svg)
[<img src='icons/vim.svg' width='64' alt='vim.svg' />](icons/vim.svg)
[<img src='icons/visual-studio-code.svg' width='64' alt='visual-studio-code.svg' />](icons/visual-studio-code.svg)
[<img src='icons/vite.svg' width='64' alt='vite.svg' />](icons/vite.svg)
[<img src='icons/vitest.svg' width='64' alt='vitest.svg' />](icons/vitest.svg)
[<img src='icons/vivaldi.svg' width='64' alt='vivaldi.svg' />](icons/vivaldi.svg)
[<img src='icons/vue-use.svg' width='64' alt='vue-use.svg' />](icons/vue-use.svg)
[<img src='icons/vue.svg' width='64' alt='vue.svg' />](icons/vue.svg)
[<img src='icons/webassembly.svg' width='64' alt='webassembly.svg' />](icons/webassembly.svg)
[<img src='icons/webkit.svg' width='64' alt='webkit.svg' />](icons/webkit.svg)
[<img src='icons/webpack.svg' width='64' alt='webpack.svg' />](icons/webpack.svg)
[<img src='icons/webstorm.svg' width='64' alt='webstorm.svg' />](icons/webstorm.svg)
[<img src='icons/windows.svg' width='64' alt='windows.svg' />](icons/windows.svg)
[<img src='icons/woo-commerce.svg' width='64' alt='woo-commerce.svg' />](icons/woo-commerce.svg)
[<img src='icons/wordpress.svg' width='64' alt='wordpress.svg' />](icons/wordpress.svg)
[<img src='icons/xcode.svg' width='64' alt='xcode.svg' />](icons/xcode.svg)
[<img src='icons/yarn.svg' width='64' alt='yarn.svg' />](icons/yarn.svg)
[<img src='icons/yii.svg' width='64' alt='yii.svg' />](icons/yii.svg)
[<img src='icons/zend-framework.svg' width='64' alt='zend-framework.svg' />](icons/zend-framework.svg)

## License

[MIT](./LICENSE)
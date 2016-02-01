# Typescript + React + Redux Skeleton

## Summary

This repository contains a work in progress skeleton project using Typescript + React + Redux + some other things.

## License

This project is MIT licensed. See LICENSE.

## Technologies

The code is written in <a href="http://www.typescriptlang.org/">Typescript</a> to provide compile-time type safety, and the main libraries used include:
- <a href="https://facebook.github.io/react/">React</a> for creating UI components
- <a href="https://github.com/rackt/redux/">Redux</a> for handling state changes within the application
- <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> for pre-built Bootstrap UI components
- <a href="https://github.com/gajus/react-css-modules">react-css-modules</a> for implementing CSS modules for components

<a href="https://webpack.github.io/">Webpack</a> is used as a module bundler and build tool, and <a href="https://babeljs.io/">Babel</a> is integrated as part of the build process in order to support ES6 features.

## Development setup

1. Ensure you have `npm` and `node` v4 installed (required to support ES6 in the dev server script) - if not, install <a href="https://github.com/creationix/nvm/blob/master/README.markdown">nvm</a> and then `nvm install 4 && nvm use 4` to install node v4

    Also ensure you have `scss-lint` installed (`gem install scss-lint`).
2. `npm install -g typescript tslint tsd` to install some required modules
3. `git clone` this repository
4. `cd` into repository directory
5. `cd src`
6. `npm install` to install dependencies
7. `npm start` to start Webpack with a dev server running on port 3000
8. Navigate to <a href="http://127.0.0.1:3000">http://127.0.0.1:3000</a>

## Building

To build a production build of the UI, run `npm run build` from the `src` directory. This will create a set of files in the `build` directory, which make up the build.

## Coding guidelines

There is a `.editorconfig` file in the `src` directory, which specifies basic formatting rules (indent using 2 spaces etc.) - if your editor has a plugin to support this file, it will automatically configure it.

One key thing to note is semicolons are *not* used in the Typescript source. This is a style choice and should not present any issues, but please read up on ASI if this concerns you. `tslint` cannot currently detect this so there is a custom script in `tools/check-semicolons.sh` to check this.

TSLint is used with the `tslint.json` file to enforce coding standards for the Typescript files. All code must pass `tslint` with no errors and everything must have a type annotation - the additional effort in doing so will pay off in terms of maintainability. Any exceptions to the lint rules must disable and enable the relevant rules using comments like `/* tslint:disable:no-unused-variable */`/`/* tslint:enable:no-unused-variable */` and should have a good reason for doing so. Again, an editor plugin is useful to highlight any lint errors, or alternatively you can run `npm run lint`

Aside from the `tslint` rules, there are a few other guidelines:

* Imports/Modules
  * ES6 `import` style should be used wherever possible. Some non-ES6 modules don't play nice with Typescript and need `require()`ing instead, but this should be avoided as much as possible and modules should move over to the ES6 style as they become compatible (this also has the side-effect of disabling type checking for that module)
  * External imports e.g. React should always come at the top of the file
  * Internal imports e.g. other components should come after external imports, and should be separated from the external imports by a blank line e.g.

    ```
    import * as React from 'react'

    import MyComponent from 'components/MyComponent'
    ```

  * Internal use absolute style paths (which are actually relative to `src`) e.g. `components/MyComponent` rather than `../components/MyComponent`
  * Modules should export a `default` export if they only contain one thing, e.g. a React component, and these modules are imported like `import MyComponent from 'components/MyComponent'`
  * Modules exporting more than one thing (e.g. a collection of functions) should not provide a `default` export, and these are imported either like `import { myFunctionName, myOtherFunction } from 'functions'` (to import individual exports into the current module's namespace) or `import * as MyFunctions from 'functions'` (to import *all* exports into an object/namespace of `MyFunctions`)

## Development environment

Using an editor which supports Typescript and JSX/TSX natively will make development a much more pleasant experience.

### Atom

The best option seems to be <a href="https://atom.io/">Atom</a>, which is free and open source and quite similar to Sublime Text, using the <a href="https://atom.io/packages/atom-typescript">atom-typescript</a> and <a href="https://atom.io/packages/linter-tslint">linter-tstlint</a> plugin - this supports proper (typed) autocomplete, inline display of compile and lint errors, and lots of other cool stuff.

### Visual Studio Code

Microsoft's <a href="https://code.visualstudio.com/">Visual Studio Code</a> editor, which is also free and cross-platform (but not open source), has excellent Typescript integration, but currently has some issues with understanding ES6 features, so displays some spurious compile errors which atom=typescript does not. This should change soon, and otherwise it is a nice editor and has the advantage of compiling your Typescript code without needing to press save, but may take some getting used to - e.g. it uses a recent files list rather than tabbed windows.

### Sublime Text

There is an <a href="https://github.com/Microsoft/Typescript-Sublime-plugin">official Sublime Text Typescript plugin from Microsoft</a>, which supports many of the features of the Atom one, but doesn't feel quite as slick, primarily because Sublime plugins are more limited about how they can render information.

### Others

IntelliJ 15 and Webstorm 11 claim to have good Typescript support. Earlier versions will not recognise TSX files as Typescript, which limits their usefulness for working with React projects.

## Development workflow

### General

- Webpack/React is set up with hot module reloading via <a href="https://github.com/gaearon/react-transform-boilerplate">react-transform</a>, which should allow you to change *most* code and see it reload in real time once it has been compiled, without needing to refresh the browser or losing your current state.

  However, sometimes components can't be hot reloaded for one reason or another, in which case you will normally see a message in the console - if in doubt, reload.

- Watch the terminal window in which you ran `npm start` to see Typescript compile errors as you save. The <a href="https://www.npmjs.com/package/webpack-notifier">webpack-notifier</a> plugin has been enabled to display a system notification whenever a build completes - this can be changed in `config/webpack.dev.js`. Sometimes `ts-loader` gets confused if you have made big changes and throws compile errors - just restart `webpack` if this happens.

### Typescript

- `tsconfig.json` contains a `fileGlob` array, specifying patterns matching all files to be compiled. Unfortunately, this is not officially supported yet (https://github.com/Microsoft/TypeScript/issues/1927), and some tools (e.g. `awesome-typescript-loader`, used in Webpack builds, and `atom-typescript`) cannot parse it and require a full list of all files in the project. The Atom plugin usually generates this automatically, but if you are using another IDE or it does not pick up changes, you will need to manually update `tsconfig.json` whenever you add or change source files.

   A script has been created to do this for you (it will parse the `tsconfig.json`, match all the globs and then write the file back complete with filenames). To run it, execute `npm run tsconfig` from the `src` directory.

- If you want to manually run the Typescript compiler for any reason, just type `tsc` from the `src` directory. This will output any errors to the terminal.

   It will also output built Javascript to the `build` directory (in `src`), which is `.gitignore`d and not currently used for anything (as Webpack invokes <a href="https://github.com/s-panferov/awesome-typescript-loader">awesome-typescript-loader</a> as part of the build process and outputs straight to the bundle), so can generally be ignored.

- When working with a third party library, you will need to install type definitions which tell Typescript what variables and functions the module exports, and what types they have. Without type definitions, compilation will fail.

  Luckily, many libraries already have full type definitions (with inline documentation and everything!) in the <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">DefinitelyTyped Github repo</a>, and these can be automatically installed using the `tsd` tool - just type `tsd install <module_name>` from the `src` directory and it will install the typings into the `typings` directory and reference them appropriately.

  If this fails, try `tsd query <module_name>` to search, or browse through DefinitelyTyped manually. If there are no definitions in there, then you'll need to create your own - see `README.md` in the `typings` directory for more information.

- To check your Typescript code style against the `tslint` rules, run `npm run lint` from the `src` directory. This will output a list of errors.

### CSS

- react-css-modules cannot process `styleName` attributes in components that are not directly `return`ed from the `render` method - for example, components which are stored in variables and passed in to other components will not have their `styleName` attribute parsed (see https://github.com/gajus/react-css-modules#styles-property and https://github.com/gajus/react-css-modules/issues/11 for more information). To work around this, decorate the component with `CSSModules` manually (see https://github.com/gajus/react-css-modules#loops-and-child-components), for example:

```
itemTemplate = CSSModules(itemTemplate, this.props.styles)
return <List itemTemplate={itemTemplate} />
```

## Performance

Performance can be analysed using react-addons-perf (https://facebook.github.io/react/docs/perf.html). This can be used in dev mode as follows:

1. When you want to start measuring, open the console and type Perf.start()
2. Perform the actions you want to profile (if you want to profile the initial load, you may need to put Perf.start() in the Root.tsx file instead, so it starts recording before the initial render)
3. Perf.stop()
4. var results = Perf.getLastMeasurments()
5. You can then use the print* methods described at https://facebook.github.io/react/docs/perf.html to analyse the performance of the React application (passing in results, e.g. Perf.printWasted(results)

## TODO

- Add stronger typing everywhere `any` is used e.g. in third party `.d.ts` files

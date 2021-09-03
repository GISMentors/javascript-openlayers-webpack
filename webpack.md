# Start Project

https://webpack.js.org/guides/getting-started/

```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

```
mkdir src
mkdir dist
```

## src/index.js

```
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

## dist/index.html

**not needed**

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

## package.json

```
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2",
   }
 }
```

## Bundle

* separation of the source code - `src` from distribution code `dist`

## Web pack configuration webpack.config.js

`webpack.config.js`

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

``
npm run build
``

# Output management

##  src/print.js
```
export default function printMe() {
  console.log('I get called from print.js!');
}
```

## src/index.html
```
import _ from 'lodash';
import printMe from './print.js';

 function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());
```

## dist/index.html
```
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>Output Management</title>
     <script src="./print.bundle.js"></script>
   </head>
   <body>
     <script src="./index.bundle.js"></script>
   </body>
 </html>
```

## webpack.config.js

```
 const path = require('path');

 module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

## HtmlWebpackPlugin

```
npm install --save-dev html-webpack-plugin
```

### webpack.config.js

```
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true
   },
 };
```

# Development

`mode: development`

## webpack.config.js

```
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };

```

## source maps

### webpack.config.js
```
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   devtool: 'inline-source-map',
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
```

## Watching

* watch mode 
* webpack-dev-server (prefered)
* webpack-middleware

### watch mode
* watch all files within dependency graph for changes

**package.json**
```
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "watch": "webpack --watch",
     "build": "webpack"
   },
```

```
npm run watch
```

webpack automatically recompiles the changed module - but you have to refresh
the browser manually

### webpack-dev-server

```
npm install --save-dev webpack-dev-server
```

**webpack.config.js**
```
...
   devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
...
```

This tells webpack-dev-server to serve the files from the dist directory on
localhost:8080.

`webpack-dev-server` doesn't write any output files after compiling. 

**package.json**
```
...
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "watch": "webpack --watch",
+    "start": "webpack serve --open",
     "build": "webpack"
   },
   ...
```

Will automatically reload

### webpack-dev-middleware
more custom setups if desired

# Code splitting

Dynamic Imports

* import() https://github.com/tc39/proposal-dynamic-import

# Bundle analysis
https://webpack.js.org/guides/code-splitting/#bundle-analysis


# Assets

* images
* css
* fonts
* data

## dist/index.html

```
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>Asset Management</title>
   </head>
   <body>
     <script src="bundle.js"></script>
   </body>
 </html>
```

## webpack.config.js

```
const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

## CSS

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

### src/style.css

```
.hello {
  color: red;
}
```

### src/index.js
```
import _ from 'lodash';
import './style.css';

function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

   return element;
}

document.body.appendChild(component());
```

```
npm run build
```

## images

### webpack.config.js
```
 const path = require('path');

 module.exports = {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };
```

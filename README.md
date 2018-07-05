# vue-make-cli

[![Build Status](https://travis-ci.org/Chooin/vue-make-cli.svg?branch=master)](https://travis-ci.org/Chooin/vue-make-cli)

<img src="https://github.com/Chooin/vue-make-cli/blob/master/awesome.gif" width="480" height="auto" />

### Installation

```sh
yarn global add vue-make-cli
# or
npm install -g vue-make-cli
```

### Usage

```sh
vue-make --help
```

##### Create a new page/view

```sh
# your page will be create in src/pages
vue-make page /product/index

# your view will be create in src/views
vue-make view /product/index
```

### Config

vue-make.json

```json
{
  "styleType": "css",
  "page": {
    "directory": "./src/pages",
    "targetDirectoryPrefix": "",
    "stylePrefix": "",
    "layout": false
  },
  "view": {
    "directory": "./src/views",
    "targetDirectoryPrefix": "",
    "stylePrefix": "",
    "layout": false
  },
  "component": {
    "directory": "./src/components",
    "targetDirectoryPrefix": "",
    "stylePrefix": ""
  },
  "directive": {
    "directory": "./src/directives"
  },
  "mixin": {
    "directory": "./src/mixins"
  },
  "store": {
    "directory": "./src/store"
  }
}
```



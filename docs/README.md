---
sidebar: false
---
<div class="text-xs-center" align="center" style="margin: 20px">
  <img src="/assets/opengraph.png" height="300">
</div>

<div class="text-xs-center" align="center">

[![npm](https://img.shields.io/npm/v/bootstrap-for-vue.svg)](https://www.npmjs.com/package/bootstrap-for-vue)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

</div>

## Introduction
**Keynote** (`vue-keynote`) is a presentation/slideshow library. It enables you to declaratively code your slides.

> Keynote with Vue.js - Build presentations on the go!

## Usage

#### In browser (no build tool)
``` html
<!--In Head-->
<link rel="stylesheet" href="//unpkg.com/vue-keynote/dist/vue-keynote.min.css">

<!--After Vue script tag-->
<script src="//unpkg.com/vue-keynote/dist/vue-keynote.min.js"></script>
```

#### With build tools (rollup/webpack)

##### Installation
```bash
yarn add vue-keynote
# or using npm
npm install vue-keynote
```

##### Register the plugin
```js
import Vue from 'vue'
import Keynote from 'vue-keynote'

Vue.use(Keynote)
```
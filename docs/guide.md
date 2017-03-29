---
sidebar: false
---

## What is Keynote?
Keynote is a minimalistic plugin for [Vue.js](https://vuejs.org) to create
presentations and slideshows declaratively using Vue.js template syntax.

## Creating without any build tool
Creating a presentation with Keynote is really easy. Just drop in a script tag and get started.

```html
<html>
  <head>
    <title>My First Keynote^</title>
    <!-- Keynote Styles -->
    <link rel="stylesheet" href="//unpkg.com/vue-keynote/dist/vue-keynote.css">
  </head>
  
  <body>
    <div id="app">
      <!-- Declare slides here! -->
      ...
    </div>
    
    <!-- Vue.js -->
    <script src="//unpkg.com/vue"></script>
    <!-- Keynote Script -->
    <script src="//unpkg.com/vue-keynote"></script>
    <script>
      new Vue({ el: '#app' }) // Create a vue app!
    </script>
  </body>
</html>
```

## Creating with `vue build`
- Create a single file component with following content (say Presentation.vue).
  ```vue
  <template>
  <!-- Declare slides here! -->
  ...
  </template>
  
  <script>
  import Vue from 'vue'
  import Keynote from 'vue-keynote'
  
  Vue.use(Keynote)
  
  export default {}
  </script>
  
  <style src="./node_modules/vue-keynote/dist/vue-keynote.css"></style>
  ```
- Install dependencies
  ```bash
  yarn add vue vue-keynote
  ```
- Build the component
  ```bash
  // If vue-cli is not installed.
  yarn global add vue-cli
  vue build -o Presentation.vue
  ```
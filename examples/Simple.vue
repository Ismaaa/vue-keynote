<template lang="html">
<Keynote>
  <AuthorSlide photo="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" name="Author Name"
               animation="slide-in-right">
    Developer, Foo Company
  </AuthorSlide>
  <TitleSlide title="A Bold Title" animation="slide-in-right">
    A little description about it.
  </TitleSlide>
  <PhotoTitleSlide photo="https://unsplash.it/1200/800?random=1" title="An unsplash photo" animation="slide-in-right">
    There is a random unsplash photo at top.
  </PhotoTitleSlide>
  <PhotoTitleSlide photo="https://unsplash.it/1200/800?random=2" title="A vertical photo" vertical
                   animation="slide-in-right">
    There is a random unsplash photo on right.
  </PhotoTitleSlide>
  <PhotoTitleSlide photo="https://unsplash.it/1200/800?random=3" title="A vertical photo" vertical left
                   animation="slide-in-right">
    There is a random unsplash photo on left.
  </PhotoTitleSlide>
  <PhotoSlide photo="https://unsplash.it/1200/800?random=4" animation="slide-in-right"/>
  <TitleSlide title="Slide In - Right" animation="slide-in-right" class="top-left">
    Text in Top Left
  </TitleSlide>
  <TitleSlide title="Slide In - Bottom" animation="slide-in-bottom" class="bottom-right">
    Text in Bottom Right
  </TitleSlide>
  <TitleSlide title="Slide In - Left" animation="slide-in-left" class="top-right">
    Text in Top Right
  </TitleSlide>
  <TitleSlide title="Rotate In" animation="rotate-in" class="bottom-left">
    Text in Bottom Left
  </TitleSlide>
  <TitleSlide title="Fade In" animation="fade-in" class="center-right">
    Text in Center Right
  </TitleSlide>
  <TitleSlide title="Fade Out" animation="fade-out" class="center-left">
    Text in Center Left
  </TitleSlide>
  <TitleSlide title="Markdown" animation="fade-out">
    <Markdown>
      # Heading

      ```js
      // code
      new Vue({ el: '#app' })
      ```
    </Markdown>
  </TitleSlide>
  <TitleSlide title="Flip" subtitle="Be expressive with Vue.js" animation="flip">
    In center! <br>
    (by default) <br>
    Be expressive with Vue.js
  </TitleSlide>
  <Slide animation="flip" class="no-margin">
    <iframe width="100%" height="100%" src="//jsfiddle.net/znck/phetsvbz/embedded/" allowfullscreen="allowfullscreen"
            frameborder="0"></iframe>
  </Slide>
</Keynote>
</template>

<script lang="babel">
import VueKeynote from '../'
import Vue from 'vue'

Vue.use(VueKeynote)

export default {
  name: 'SimpleKeynote'
}
</script>


<style lang="scss">
@import "../dist/vue-keynote.css";
@import url("https://unpkg.com/prismjs@1.6.0/themes/prism.css");
</style>

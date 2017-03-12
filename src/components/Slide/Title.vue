<template lang="html">
<div class="slide slide-title">
  <h1 class="title">{{ title }}</h1>
  <h4 class="subtitle">
    <slot>{{ subtitle }}</slot>
  </h4>
</div>
</template>

<script lang="babel">
import Slide from './Slide.vue'

export default {
  name: 'TitleSlide',

  extends: Slide,

  props: {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      default: null,
    }
  }

}
</script>


<style lang="scss">
@import '../variables';

.slide.slide-title {
  align-items: center;
  justify-content: center;
  text-align: center;

  .title {
    color: $primary-color;
  }

  .subtitle {
    color: $secondary-color;
  }
}
</style>

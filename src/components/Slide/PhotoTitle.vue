<template lang="html">
<div class="slide slide-photo-title" :class="{ vertical, left }">
  <img class="photo" :src="photo">
  <div class="body">
    <h1 class="title">{{ title }}</h1>
    <h4 class="subtitle">
      <slot>{{ subtitle }}</slot>
    </h4>
  </div>
</div>
</template>

<script lang="babel">
import Slide from './Slide.vue'

export default {
  name: 'PhotoTitleSlide',

  extends: Slide,

  props: {
    vertical: {
      type: Boolean,
      default: false
    },

    left: {
      type: Boolean,
      default: false
    },

    photo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },

    subtitle: {
      type: String,
      default: null
    }
  }

}
</script>


<style lang="scss">
@import '../variables';

.slide.slide-photo-title {
  align-items: center;
  justify-content: center;
  text-align: center;

  .photo {
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    overflow: hidden;
    margin: 2rem;
  }

  .title {
    color: $primary-color;
  }

  .subtitle {
    color: $secondary-color;
  }

  &.vertical {
    flex-direction: row;
    padding: 0;

    .photo, .body {
      flex: 1
    }
    .photo {
      order: 2;
      margin: 0;
    }
    &.left {
      .photo {
        order: initial;
      }
    }
  }
}
</style>

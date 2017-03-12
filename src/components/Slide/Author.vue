<template lang="html">
<div class="slide slide-author">
  <img :src="photo" class="photo">
  <h2 class="name">{{ name }}</h2>
  <p class="bio"><slot>{{ bio }}</slot></p>
</div>
</template>

<script lang="babel">
import Slide from './Slide.vue'

export default {
  name: 'AuthorSlide',

  extends: Slide,

  props: {
    photo: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      default: null,
    },

    bio: {
      type: String
    }
  }

}
</script>


<style lang="scss">
@import '../variables';

.slide.slide-author {
  align-items: center;
  justify-content: center;
  text-align: center;

  .photo {
    margin: 1rem;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
  }

  .name {
    color: $primary-color;
  }

  .bio {
    color: $gray-darker;
  }
}
</style>

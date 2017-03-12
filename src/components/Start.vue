<template lang="html">
<div class="slide-wrapper">
  <div class="slide slide-start bottom-center" @click="fullscreen">
    <small>
      <small>
        Click to full screen! Press space or right arrow to start!
      </small>
    </small>
  </div>
</div>
</template>

<script lang="babel">
export default {
  name: 'Start',

  methods: {
    fullscreen () {
      const element = document.body
      const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen
          || element.mozRequestFullScreen || element.msRequestFullScreen;

      if (requestMethod) {
        requestMethod.call(element)
      }
    }
  }
}
</script>


<style lang="scss">
.slide.slide-start {
  background-color: black;
  color: white;
}
</style>

<template lang="html">
<div class="slide-wrapper">
  <div class="slide slide-end">
    End of Keynote! <br>
    <small>
      <small>Built with Vue + <a href="https://github.com/znck/vue-keynote">Keynote</a></small>
    </small>
  </div>
</div>
</template>

<script lang="babel">
export default {
  name: 'End',
}
</script>


<style lang="scss">
.slide.slide-end {
  background-color: black;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>

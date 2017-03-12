<template lang="html">
<div class="slide">
  <slot/>
</div>
</template>

<script lang="babel">
import animated from '../../mixins/animated'

export default {
  name: 'DefaultSlide',

  mixins: [animated]
}
</script>


<style lang="scss">
.slide {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  background-color: white;

  &.center {
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
  }

  &.top-left {
    align-items: flex-start !important;
    justify-content: flex-start !important;
  }

  &.top-right {
    align-items: flex-end !important;
    justify-content: flex-start !important;
  }

  &.bottom-left {
    align-items: flex-start !important;
    justify-content: flex-end !important;
  }

  &.bottom-center {
    align-items: center !important;
    justify-content: flex-end !important;
  }

  &.bottom-right {
    align-items: flex-end !important;
    justify-content: flex-end !important;
  }

  &.center-left {
    align-items: flex-start !important;
    justify-content: center !important;
  }

  &.center-right {
    align-items: flex-end !important;
    justify-content: center !important;
  }

  .text-center {
    text-align: center !important;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-justify {
    text-align: justify !important;
  }

  .no-margin {
    padding: 0 !important;
  }
}
</style>

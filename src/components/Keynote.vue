<script lang="babel">
import Start from './Start.vue'
import End from './End.vue'
import animator from '../animator'

export default {
  name: 'Keynote',

  data: () => ({
    total: 0,
    active: 0,
    leaving: -1,
    entering: -1,
    backwards: false
  }),

  render (h) {
    const slides = this.$slots.default || []

    let index = 0
    const rendered = slides.map(slide => {
      if (!/Slide$/i.test(slide.tag)) return slide

      index += 1
      return animator(h, slide, {
        active: this.active === index,
        entering: this.entering === index,
        leaving: this.leaving === index,
        backwards: this.backwards,
        index
      })
    })

    if (index !== this.total) {
      this.total = index
    }

    rendered.unshift(this.active === 0 ? h(Start) : null)
    rendered.push(this.active === this.total ? h(End) : null)

    return h('div', { 'class': { keynote: true }}, rendered)
  },

  methods: {
    next () {
      this.leaving = this.active
      if (this.active < this.total) {
        this.active += 1
        this.backwards = false
        this.entering = this.active
      }
    },

    prev () {
      this.leaving = this.active
      if (this.active > 0) {
        this.active -= 1
        this.backwards = true
        this.entering = this.active
      }
    },

    onHashChange () {
      const hashInput = window.location.hash.slice(1)

      this.active = Math.max(0, hashInput ? parseInt(decodeURIComponent(hashInput)) : 0)
    }
  },

  created () {
    document.addEventListener('keydown', e => {
      if (e.code === 'ArrowRight') {
        this.next()
      } else if (e.code === 'ArrowLeft') {
        this.prev()
      } else if (e.code === 'Space') {
        this.next()
      }
    }, false)
  },

  mounted () {
    this.onHashChange()
    window.addEventListener('hashchange', () => this.onHashChange(), false)
  },

  watch: {
    active (value) {
      window.location.hash = encodeURIComponent(value)
    }
  }
}

</script>

<style lang="scss">
@import './variables';

html,
body {
  font-size: $font-size-base;
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.keynote {
  font: 28px/1.7 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  ol,
  table {
    margin: 0;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  h6 {
    font-size: 1.1125rem;
  }

  p {
    margin: 0 0 1rem;
  }

  code {
    border: 1px dashed #999;
  }
}

.slide-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@import "../animator/animations/all";
</style>

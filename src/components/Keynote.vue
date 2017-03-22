<script lang="babel">
import Start from './Start.vue'
import End from './End.vue'
import animation from '../animations'

export default {
  name: 'Keynote',

  provide  () {
    const keynote = {}
    const keys = ['current', 'total', 'direction']

    keys.forEach(key => Object.defineProperty(keynote, key, {
      enumerable: true,
      get: () => this[key]
    }))

    return { keynote }
  },

  data: () => ({
    current: -1,
    total: 0,
    direction: 0
  }),

  render (h) {
    const slides = this.$slots.default || []
    const total = slides.filter(slide => /Slide$/g.test(slide.tag)).length
    if (total !== this.total) {
      this.total = total
    }

    let index = -1

    const rendered = slides.map(slide => {
      if (!/Slide$/g.test(slide.tag)) {
        return slide // Return non-slide components as is.
      }

      index += 1

      const reverse = this.direction < 0
      const props = slide.componentOptions.propsData
      const forward = animation(props.animation) || {}
      const backward = props.animationReverse ? animation(props.animationReverse) : animation(forward.inverse)
      const transition = (reverse ? backward : forward) || { name: 'none', duration: 500 }

      return h('transition', {
        props: transition
      }, [
        h('div', {
          attrs: { 'data-index': index },
          'class': { 'slide-wrapper': true },
          directives: [{ name: 'show', value: this.current === index }]
        }, [slide])
      ])
    })

    rendered.unshift(this.current === -1 ? h(Start) : null)
    rendered.push(this.current === this.total ? h(End) : null)

    return h(
        'div',
        { 'class': { keynote: true }},
        rendered
    )
  },

  methods: {
    next () {
      this.direction = 1
      if (this.current < this.total) this.current += 1
    },

    prev () {
      this.direction = -1

      if (this.current > 0) this.current -= 1
    },

    onHashChange () {
      const hashInput = window.location.hash.slice(1)
      this.current = hashInput ? parseInt(decodeURIComponent(hashInput)) : 0
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
    current (value) {
      window.location.hash = encodeURIComponent(value)
    }
  }
}

</script>

<style lang="scss">
@import './variables';

html, body {
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

  h1, h2, h3, h4, h5, p, ul, ol, table {
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
    margin: 0 0 1rem 0;
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

@import "../animations/slide";
@import "../animations/rotate";
@import "../animations/fade";
@import "../animations/flip";
</style>

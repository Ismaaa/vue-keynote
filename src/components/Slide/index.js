import slide from './Slide.vue'
import title from './Title.vue'
import author from './Author.vue'
import photoTitle from './PhotoTitle.vue'
import photo from './Photo.vue'

const slides = {
  slide,
  title,
  author,
  photo,
  'photo-title': photoTitle
}

export default {
  functional: true,

  props: {
    theme: {
      type: String,
      default: 'slide'
    }
  },

  render (h, ctx) {
    const key = ctx.props.theme.toLowerCase()

    return h(slides[key], ctx.data, ctx.children)
  }
}

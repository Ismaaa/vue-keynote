import Keynote from './components/Keynote.vue'
import Slide from './components/Slide'
import TitleSlide from './components/Slide/Title.vue'
import AuthorSlide from './components/Slide/Author.vue'
import PhotoTitleSlide from './components/Slide/PhotoTitle.vue'
import PhotoSlide from './components/Slide/Photo.vue'
import Markdown from './components/Markdown.vue'

function plugin (Vue) {
  Vue.component('Keynote', Keynote)
  Vue.component('Slide', Slide)
  Vue.component('TitleSlide', TitleSlide)
  Vue.component('AuthorSlide', AuthorSlide)
  Vue.component('PhotoTitleSlide', PhotoTitleSlide)
  Vue.component('PhotoSlide', PhotoSlide)
  Vue.component('Markdown', Markdown)
}

// Install by default if using the script tag
if (typeof window !== 'undefined') {
  'Vue' in window && window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  version,
  Keynote,
  Slide,
  TitleSlide,
  AuthorSlide,
  PhotoSlide,
  PhotoTitleSlide
}

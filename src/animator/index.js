import { find, inverse } from './animations'

const findEnter = options => find(options.animationEnter || options.animation || 'none')
const findLeave = options => find(options.animationLeave || inverse(options.animation || 'none'))

export default (h, slide, { entering, active, backwards }) => {
  console.log('Rerendering!')

  const options = slide.componentOptions.propsData

  const props = entering
      ? (backwards ? findLeave(options) : findEnter(options))
      : (backwards ? findEnter(options) : findLeave(options))

  const wrapperOptions = {
    'class': { 'slide-wrapper': true },
    directives: [{ name: 'show', value: active }]
  }

  return h('transition', { props }, [h('div', wrapperOptions, [slide])])
}

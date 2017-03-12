const duration = 500
const animations = [
  {
    name: 'slide-in-right',
    duration,
    inverse: 'slide-in-left'
  },
  {
    name: 'slide-in-left',
    duration,
    inverse: 'slide-in-right'
  },
  {
    name: 'slide-in-top',
    duration,
    inverse: 'slide-in-bottom'
  },
  {
    name: 'slide-in-bottom',
    duration,
    inverse: 'slide-in-top'
  },
  {
    name: 'rotate-in',
    duration,
    inverse: 'rotate-out'
  },
  {
    name: 'rotate-out',
    duration,
    inverse: 'rotate-in'
  },
  {
    name: 'fade-in',
    duration: 2000,
    mode: 'out-in',
    inverse: 'fade-out'
  },
  {
    name: 'fade-out',
    duration: 2000,
    inverse: 'fade-in'
  },
  {
    name: 'flip',
    duration,
    mode: 'out-in',
    inverse: 'flip'
  }
]

export default function (query) {
  const isObject = typeof (query) === 'object'
  const name = isObject ? query.name : query
  const result = animations.find(animation => animation.name === name)

  if (result && isObject) {
    return Object.assign({}, result, query)
  }

  return result
}

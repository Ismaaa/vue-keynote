const animations = {}
const inverses = {}

export const find = name => animations[name] || {}
export const inverse = name => inverses[name]

const createInverse = (one, other) => {
  other = other || one
  inverses[one] = other
  inverses[other] = one
}
const createAnimations = (prefix, variants, options) => {
  const inverse = !Array.isArray(variants)
  const make = (p, n) => `${p}-${n}`.replace(/^-|-$/g, '')

  ;(inverse ? Object.keys(variants).concat(Object.values(variants)) : variants).forEach(variant => {
    const name = make(prefix, variant)

    animations[name] = Object.assign({ name }, options)

    if (inverse && variants[variant]) {
      createInverse(name, make(prefix, variants[variant]))
    }
  })
}

// Slide
createAnimations('slide', { top: 'bottom', right: 'left' }, { duration: 500 /* 500ms */ })
// Fade
createAnimations('fade', [''], { duration: 2000 /* 2s */, mode: 'out-in' })
createInverse('fade')
// Rotate
createAnimations('rotate', [''], { duration: 500 /* 500ms */, mode: 'out-in' })
createInverse('rotate')
// Flip
createAnimations('flip', [''], { duration: 500 /* 500ms */, mode: 'out-in' })
createInverse('flip')
console.log(inverses)

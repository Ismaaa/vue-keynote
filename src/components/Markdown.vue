<script lang="babel">
import marked from 'marked'
import highlight from 'prismjs'

const langs = {
  js: 'javascript'
}

export default {
  name: 'Markdown',

  render (h) {
    let text = this.$slots.default.length ? this.$slots.default[0].text : ''
    let spaces = ''
    const lines = text.split(/\r?\n/)
    for (let i = 0; i < lines.length; ++i) {
      const line = lines[i]
      if (line.length && /[^\s]/.test(line)) {
        const matches = /^[\s]+/.exec(line)

        spaces = (matches && matches.length) ? matches[0] : ''

        break
      }
    }
    const regExp = new RegExp(`^${spaces}`)

    text = lines.map(line => line.replace(regExp, '')).join('\n')

    return h('div', {
      domProps: {
        innerHTML: marked(text, {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          highlight (code, lang) {
            lang = langs[lang] || lang
            return highlight.highlight(code, highlight.languages[lang], lang)
          }
        })
      }
    })
  }
}
</script>


<style lang="scss">
pre[class*=language-] > code {
  display: block;
  text-align: left;
  border: none !important;
}
</style>

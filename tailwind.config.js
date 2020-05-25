/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'light-brown': '#f2ca92',
        'darker-brown': '#ffc26b'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}

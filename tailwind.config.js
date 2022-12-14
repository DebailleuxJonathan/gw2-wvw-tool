module.exports = {
    mode: "jit",
    content: {
        files: [
            "./components/**/*.{vue.js}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./app.vue",
            "./plugins/**/*.{js,ts}",
            "./nuxt.config.{js,ts}"
        ]
    },
    theme: {
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        }
    }
}

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  watch: {
    result() {
      const that = this
      setTimeout(function () {
        that.counter = 0
      }, 5000)
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet"
      } else if (this.counter === 37) {
        return this.counter
      } else {
        return "Too much!"
      }
    },
  },
  methods: {
    add(num) {
      this.counter += num
    },
  },
})

app.mount("#assignment")

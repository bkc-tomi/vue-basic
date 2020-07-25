new Vue({
  el: "#app",
  data: {
    current: new Date().toLocaleString()
  },
  computed: {
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    onclick: function() {
      // 使えない
      // setTimeout(function() {
      //   this.current = new Date().toLocaleString();
      //   console.log("done");
      // }, 2000);
      this.current = new Date().toLocaleString();
    },
    randomm: function() {
      return Math.random();
    }
  }
});
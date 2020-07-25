new Vue({
  el: "#app",
  data: {
    message: "",
  },
  methods: {
    onclick: function(message, e) {
      this.message = new Date().toLocaleString();
      console.log(e.target);
      console.log(message);
    }
  }
});
new Vue({
  el: "#app2",
  data: {
    message: "",
  },
  methods: {
    onclick: function() {
      this.message = new Date().toLocaleString();
    }
  }
});

new Vue({
  el: "#app3",
  data: {
    name: "ゲスト",
  },
  methods: {
    clear: function() {
      this.name = "";
    }
  }
});

new Vue({
  el: "#app4",
  data: {
    message: "Alt + h => help"
  },
  methods: {
    help: function() {
      window.alert("20文字以内で入力してください。");
    }
  }
});

new Vue({
  el: "#app5",
  methods: {
    onclick: function(e) {
      window.alert(
        "右クリックの座標" + e.clientX + "," + e.clientY
      );
    }
  }
});
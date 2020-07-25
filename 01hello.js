/**
 * ページロード時に格要素に割当られるので非同期通信などで後から文字列などを割り当てる
 * ことは出来ない。
 */
const app = new Vue({
  el: "#app",
  data: {
    message: "こんにちは、Vue.js!",
  },
});

const html = new Vue({
  el: ".html",
  data: {
    html: "<h1>こんにちは</h1>" +
    "<span><a href='http://jp.buejs.org/'>Vue.js!</a></span>",
  },
});

new Vue({
  el: "#bind",
  data: {
    url: "http://www.wings.msn.to/",
  }
});

new Vue({
  el: "#el",
  data: {
    email: "Yamada@example.com",
  },
  computed: {
    // アロー関数はthisを束縛しないのでここでの使用は不適切
    localEmail: function() {
      return this.email.split("@")[0].toLowerCase() + "@" + this.email.split("@")[1];
    }
  }
});

new Vue({
  el: "#el2",
  data: {
    email: "Yamada@example.com",
  },
  // emailプロパティの値を加工するlocalEmailメソッドを定義
  methods: {
    localEmail: function() {
      return this.email.split("@")[0].toLowerCase();
    }
  }
})

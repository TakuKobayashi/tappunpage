//alert("aaaa")

import Vue from 'vue'
import ElementUI  from 'element-ui'
import locale     from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

import App from './vue/components/App' // 作ったやつ

Vue.use(ElementUI, {locale});

new Vue({
  el: '#app', // アプリをマウントする要素(セレクタで指定)
  components: { App }, // Appというコンポーネントを使うよ、という宣言
  template: '<app/>', // el(今回は#app)の中に表示する内容
})
//alert("aaaa")

import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI  from 'element-ui'
import locale     from 'element-ui/lib/locale/lang/ja'
import Counter from './vue/components/Counter'
import Announcements from './vue/components/Announcements'
import Articles from './vue/components/Articles'
import Contact from './vue/components/Contact'
import Products from './vue/components/Products'
import Profile from './vue/components/Profile'
import Top from './vue/components/Top'
import 'element-ui/lib/theme-chalk/index.css'

import App from './vue/components/App' // 作ったやつ

Vue.use(VueRouter);
Vue.use(ElementUI, {locale});

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/counter',
    component: Counter
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/announcements',
    component: Announcements
  },
  {
    path: '/articles',
    component: Articles
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  el: '#app', // アプリをマウントする要素(セレクタで指定)
  components: { App }, // Appというコンポーネントを使うよ、という宣言
  template: '<app/>', // el(今回は#app)の中に表示する内容
})
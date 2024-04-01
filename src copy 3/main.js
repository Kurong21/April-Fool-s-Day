import Vue from 'vue'
import App from './App.vue'
// import ButtonCounter from './components/ButtonCounter.vue'
// import plugins from './plugins'


Vue.config.productionTip = false
// 全局注册
// Vue.component('button-counter', ButtonCounter);

// 使用插件
// Vue.use(plugins);

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
}).$mount('#app')


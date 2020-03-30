import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 默认导index.js
import router from './router'
// 导入全局默认基础样式
import './assets/css/base.css'
// 导入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入字体图标
import './assets/iconfont/iconfont.css';
//导入文件moment.js
import moment from "moment";
// 中文简体
moment.locale("zh-cn");
// 把moment添加到vue实例对象,命名为$moment
Vue.prototype.$moment = moment;
// 引进动画
import anime from "animejs/lib/anime.es.js";
// 导入echarts
import echarts from 'echarts';
// import "../public/jquery-3.4.1.min.js"
// import  "../public/jsm.min.js"
import liquidfill from 'echarts-liquidfill'
//  把echarts添加到vue实例对象,命名为$echarts
Vue.prototype.$echarts = echarts;//把echarts绑定在vue的原型上 这样在组件里面就可以通过this.$echarts来访问了
Vue.prototype.$liquidfill = liquidfill;//把echarts绑定在vue的原型上 这样在组件里面就可以通过this.$echarts来访问了
Vue.use(anime)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  // 挂载路由
  router,
  
}).$mount('#app')

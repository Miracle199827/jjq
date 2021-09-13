import App from './App'
import store from './store'
Vue.prototype.$store = store
// #ifndef VUE3
import Vue from 'vue'

import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'

//加载动画页面
import requestLoading  from './components/loadingNow.vue'
//挂载到全局，每个页面都使用加载动画
Vue.component('request-loading',requestLoading);
//挂载全局显示隐藏加载动画
function showLoading(){
	store.commit('request_show_loading');
}
function hideLoading(){
	store.commit('request_hide_loading');
}
Vue.prototype.$showLoading = showLoading; //全局显示动画 this.$showLoading();
Vue.prototype.$hideLoading = hideLoading; //全局隐藏动画this.$hideLoading();

Vue.config.productionTip = false

Vue.prototype.$adpid = "1111111111"

Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.$adpid = "1111111111"
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	return {
		app
	}
}
// #endif

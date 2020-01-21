import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(VueQuillEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

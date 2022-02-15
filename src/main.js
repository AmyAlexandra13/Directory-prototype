import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'


library.add(fas);

// vue.component('font-awesome', FontAwesomeIcon)
createApp(App)
.component('fa',FontAwesomeIcon)
.component('BIconBatteryFull', BIconBatteryFull)
.component('BIconArrow90degDown', BIconArrow90degDown)
.component('BIconBookmark', BIconBookmark)
.mount('#app')


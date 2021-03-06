import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routes/router.js'
import vuetify from '@/vuetify.js'
import config from '~/config/config.js'
import axios from 'axios'
import store from '@/store/store.js'
import Vue2TouchEvents from 'vue2-touch-events'

import '@/fhem-api/socket.js'
import '../assets/app.scss'
import '@/components/components.js'

store.commit('setDemo', config.demo)
store.commit('setWeatherApiKey', config.weatherApiKey)
store.commit('setWeatherLocId', config.weatherLocId)

Vue.use(Vue2TouchEvents)

Vue.prototype.$axios = axios
/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    store,
    router,
    vuetify,
    mounted: () => { },
    render: h => h(App)
})

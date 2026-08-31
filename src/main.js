import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Self-hosted own-world faces (no third-party font request).
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/spline-sans-mono'
import '@fontsource-variable/newsreader'
import '@fontsource-variable/newsreader/wght-italic.css'

import './assets/styles/main.css'

createApp(App).use(router).mount('#app')

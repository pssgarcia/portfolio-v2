import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Self-hosted own-world faces (no third-party font request).
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/spline-sans-mono'
import '@fontsource/spectral/400.css'
import '@fontsource/spectral/400-italic.css'
import '@fontsource/spectral/500.css'
import '@fontsource/spectral/600.css'

import './assets/styles/main.css'

createApp(App).use(router).mount('#app')

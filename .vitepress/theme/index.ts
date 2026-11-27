import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Home from './Home.vue'
import AiModes from './diagrams/AiModes.vue'
import EdgeZones from './diagrams/EdgeZones.vue'
import FireTiming from './diagrams/FireTiming.vue'
import PinOps from './diagrams/PinOps.vue'
import ProfileResolve from './diagrams/ProfileResolve.vue'
import ScreenshotFlow from './diagrams/ScreenshotFlow.vue'
import WheelSequence from './diagrams/WheelSequence.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NgHome', Home)
    app.component('AiModes', AiModes)
    app.component('EdgeZones', EdgeZones)
    app.component('FireTiming', FireTiming)
    app.component('PinOps', PinOps)
    app.component('ProfileResolve', ProfileResolve)
    app.component('ScreenshotFlow', ScreenshotFlow)
    app.component('WheelSequence', WheelSequence)
    // 截图点开看原图（截图按 2 倍分辨率保存）
    if (typeof window !== 'undefined') {
      window.addEventListener('click', (e) => {
        const img = (e.target as HTMLElement | null)?.closest?.('.vp-doc img.shot') as HTMLImageElement | null
        if (img) window.open(img.src, '_blank', 'noopener')
      })
    }
  },
} satisfies Theme

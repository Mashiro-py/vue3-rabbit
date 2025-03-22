//把contents中的所有组件进行全局注册
import ImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'


export const components = {
  install(app) {
    app.component('ImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}


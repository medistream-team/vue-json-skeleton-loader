import VSkeletonLoader from './VSkeletonLoader.vue'

export default {
  install(app, options = {}) {
    app.component(options.componentName || 'VSkeletonLoader', VSkeletonLoader)
  }
}

import VSkeletonLoader from './VSkeletonLoader.vue'

export default {
  install (Vue, options = {}) {
    Vue.component(options.componentName || 'VSkeletonLoader', VSkeletonLoader)
  }
}
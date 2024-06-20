declare module 'vue-json-skeleton-loader' {
  import { App } from 'vue'

  /**
   * @param options
   * @param options.componentName default: 'VSkeletonLoader'
   */
  export function install(app: App, options: { componentName?: string }): void
}

export type ContentType = Array<string> | Array<Array<string>>

export type OptionsType = {
  /**
   * @default 3
   */
  radius?: number
  /**
   * @default '#dddddd'
   */
  primaryColor?: string
  /**
   * @default 'rgba(255, 255, 255, 0.5)'
   */
  secondaryColor?: string
  /**
   * @default true
   */
  animate?: boolean
  /**
   * @default '1.5s'
   */
  speed?: string
  defaultSizes?: DefaultSizesType
}

type DefaultSizesType = {
  /**
   * @default 50
   */
  box: number
  /**
   * @default 50
   */
  circle: number
  /**
   * @default 20
   */
  title: number
  /**
   * @default 10
   */
  text: number
}

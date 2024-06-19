<template>
  <div class="v-skeleton-loader" :class="{ animation: assignedOptions.animate }">
    <div v-for="(row, rowIndex) in forceToNestedArray(content)" :key="rowIndex" class="row">
      <div
        class="col"
        v-for="(element, elementIndex) in row"
        :key="elementIndex"
        :style="{
          'flex-grow': (() => {
            if (element.indexOf('box') > -1 || element.indexOf('circle') > -1) {
              return 0
            } else {
              return 1
            }
          })()
        }"
      >
        <template v-if="element === 'blank'">
          <span class="elements">
            <span class="element blank"></span>
          </span>
        </template>
        <template v-if="element.includes('title')">
          <span class="elements">
            <span
              class="element title"
              :style="{
                height: assignedOptions.defaultSizes.title + 'px',
                borderRadius: assignedOptions.radius + 'px',
                backgroundColor: assignedOptions.primaryColor,
                '--secondaryColor': assignedOptions.secondaryColor,
                '--speed': assignedOptions.speed
              }"
            >
            </span>
          </span>
        </template>
        <template v-if="element.includes('text')">
          <span class="elements">
            <span
              v-for="(elementChild, i) in parseTextChildren(element)"
              :key="i"
              class="element text"
              :style="{
                height: assignedOptions.defaultSizes.text + 'px',
                borderRadius: assignedOptions.radius + 'px',
                backgroundColor: assignedOptions.primaryColor,
                '--secondaryColor': assignedOptions.secondaryColor,
                '--speed': assignedOptions.speed
              }"
            >
            </span>
          </span>
        </template>
        <template v-if="element.includes('box')">
          <span class="elements">
            <span
              class="element box"
              :style="{
                width: (() => {
                  if (!parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1] + 'px'
                  }
                  if (parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1].split('/')[0] + 'px'
                  }
                  return assignedOptions.defaultSizes.box + 'px'
                })(),
                height: (() => {
                  if (!parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1] + 'px'
                  }
                  if (parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1].split('/')[1] + 'px'
                  }
                  return assignedOptions.defaultSizes.box + 'px'
                })(),
                borderRadius: assignedOptions.radius + 'px',
                backgroundColor: assignedOptions.primaryColor,
                '--secondaryColor': assignedOptions.secondaryColor,
                '--speed': assignedOptions.speed
              }"
            >
            </span>
          </span>
        </template>
        <template v-if="element.includes('circle')">
          <span class="elements">
            <span
              class="element circle"
              :style="{
                width: (() => {
                  if (!parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1] + 'px'
                  }
                  if (parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1].split('/')[0] + 'px'
                  }
                  return assignedOptions.defaultSizes.circle + 'px'
                })(),
                height: (() => {
                  if (!parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1] + 'px'
                  }
                  if (parseBoxSize(element).includes('/')) {
                    return parseBoxSize(element).split(':')[1].split('/')[1] + 'px'
                  }
                  return assignedOptions.defaultSizes.circle + 'px'
                })(),
                borderRadius: assignedOptions.circleRadius + '%',
                backgroundColor: assignedOptions.primaryColor,
                '--secondaryColor': assignedOptions.secondaryColor,
                '--speed': assignedOptions.speed
              }"
            >
            </span>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSkeletonLoader',
  props: {
    content: {
      type: Array,
      default: function () {
        return ['box', 'text:2']
      }
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      defaultOptions: {
        radius: 3,
        primaryColor: '#ddd',
        secondaryColor: 'rgba(255, 255, 255, 0.5)',
        animate: true,
        speed: '1.5s',
        defaultSizes: {
          box: 50,
          circle: 50,
          title: 20,
          text: 10
        }
      }
    }
  },
  computed: {
    assignedOptions: function () {
      const options = this.options || {}
      const defaultOptions = this.defaultOptions
      let assignedOptions = {
        radius: options['radius'] || defaultOptions.radius,
        primaryColor: options['primaryColor'] || defaultOptions.primaryColor,
        secondaryColor: options['secondaryColor'] || defaultOptions.secondaryColor,
        animate: options['animate'] !== undefined ? options['animate'] : defaultOptions.animate,
        speed: options['speed'] || defaultOptions.speed,
        defaultSizes: {
          box:
            options['defaultSizes'] && options['defaultSizes']['box']
              ? options['defaultSizes']['box']
              : defaultOptions.defaultSizes.box,
          circle:
            options['defaultSizes'] && options['defaultSizes']['circle']
              ? options['defaultSizes']['circle']
              : defaultOptions.defaultSizes.circle,
          title:
            options['defaultSizes'] && options['defaultSizes']['title']
              ? options['defaultSizes']['title']
              : defaultOptions.defaultSizes.title,
          text:
            options['defaultSizes'] && options['defaultSizes']['text']
              ? options['defaultSizes']['text']
              : defaultOptions.defaultSizes.text
        }
      }
      return assignedOptions
    }
  },
  methods: {
    forceToNestedArray: function (arr) {
      // MARK: ['box', 'text'] 와 깉이 1차원 배열이 입력되어도, 구조를 통일시키기 위해 [['box', 'text']] 의 2차원 배열로 바꿉니다.
      if (Array.isArray(arr) && !Array.isArray(arr[0])) {
        return [arr]
      } else {
        return arr
      }
    },
    parseTextChildren: function (element) {
      if (element.includes(':')) {
        const elementName = element.split(':')[0]
        const count = element.split(':')[1]
        let elementChildren = []
        for (let i = 0; i < count; i++) {
          elementChildren.push(elementName)
        }
        return elementChildren
      } else {
        return element
      }
    },
    parseBoxSize: function (element) {
      if (element.includes(':')) {
        return element
      } else {
        return element + ':' + this.assignedOptions.defaultSizes.box
      }
    },
    parseCircleSize: function (element) {
      if (element.includes(':')) {
        return element
      } else {
        return element + ':' + this.assignedOptions.defaultSizes.circle
      }
    }
  }
}
</script>

<style lang="scss">
.v-skeleton-loader {
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 -10px;
    & + .row {
      margin-top: 15px;
    }
    .col {
      flex-grow: 1;
      margin: 0 10px;
      .elements {
        display: block;
        & + .elements {
          margin-top: 10px;
        }
      }
    }
  }
}

.element {
  display: block;
  overflow: hidden;
  position: relative;
  & + .element {
    margin-top: 5px;
  }
  &.circle {
    border-radius: 50%;
  }
  &.title {
    width: 30%;
    min-width: 100px;
  }
  &.text {
    width: 100%;
    &:last-child {
      width: 70%;
    }
  }
}

.animation .element:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, var(--secondaryColor), transparent);
  animation: shimmer var(--speed) infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

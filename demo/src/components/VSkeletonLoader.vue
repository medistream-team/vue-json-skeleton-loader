<template>
  <div class="v-skeleton-loader" :class="{ animation: options.animate }">
    <div
      class="row"
      v-for="(row, rowIndex) in $options.filters.forceNestedArray(content)"
      :key="rowIndex"
      v-bind:class="rowIndex"
    >
      <div
        class="col"
        v-for="(element, elementIndex) in row"
        :key="elementIndex"
        :style="{
          'flex-grow': (() => {
            if (element.includes('title') || element.includes('text')) {
              return 1;
            } else {
              return 0;
            }
          })(),
        }"
      >
        <span
          v-if="element.includes('title')"
          class="element title"
          :style="{
            height: options.defaultSizes.title + 'px',
            borderRadius: options.radius + 'px',
            backgroundColor: options.primaryColor,
            '--secondaryColor': options.secondaryColor,
            '--speed': options.speed,
          }"
        ></span>
        <template v-if="element.includes('text:')">
          <span
            v-for="(element, i) in parseInt(element.split(':')[1], 10)"
            class="element text"
            :class="element"
            :key="i"
            :style="{
              height: options.defaultSizes.text + 'px',
              borderRadius: options.radius + 'px',
              backgroundColor: options.primaryColor,
              '--secondaryColor': options.secondaryColor,
              '--speed': options.speed,
            }"
          >
          </span>
        </template>
        <template v-else-if="element.includes('text')">
          <span
            v-for="(element, i) in (element[0], 1)"
            class="element text"
            :key="i"
            :style="{
              height: options.defaultSizes.text + 'px',
              borderRadius: options.radius + 'px',
              backgroundColor: options.primaryColor,
              '--secondaryColor': options.secondaryColor,
              '--speed': options.speed,
            }"
          ></span>
        </template>
        <template v-if="element === 'box'">
          <span
            v-for="(element, i) in (element[0], 1)"
            class="element"
            :class="element"
            :key="i"
            :style="{
              width: options.defaultSizes.box + 'px',
              height: options.defaultSizes.box + 'px',
              borderRadius: options.radius + 'px',
              backgroundColor: options.primaryColor,
              '--secondaryColor': options.secondaryColor,
              '--speed': options.speed,
            }"
          ></span>
        </template>
        <span
          v-if="element.includes('box')"
          class="element"
          :class="element"
          :style="{
            width: (() => {
              if (!element.includes('/')) {
                return element.split(':')[1] + 'px';
              }
              if (element.includes('/')) {
                return element.split(':')[1].split('/')[0] + 'px';
              }
              return options.defaultSizes.box + 'px';
            })(),
            height: (() => {
              if (!element.includes('/')) {
                return element.split(':')[1] + 'px';
              }
              if (element.includes('/')) {
                return element.split(':')[1].split('/')[1] + 'px';
              }
              return options.defaultSizes.box + 'px';
            })(),
            borderRadius: options.radius + 'px',
            backgroundColor: options.primaryColor,
            '--secondaryColor': options.secondaryColor,
            '--speed': options.speed,
          }"
        >
        </span>
        <template v-if="element === 'circle'">
          <span
            v-for="(element, i) in (element[0], 1)"
            class="element circle"
            :class="element"
            :key="i"
            :style="{
              width: options.defaultSizes.circle + 'px',
              height: options.defaultSizes.circle + 'px',
              borderRadius: options.circleRadius + '%',
              backgroundColor: options.primaryColor,
              '--secondaryColor': options.secondaryColor,
              '--speed': options.speed,
            }"
          ></span>
        </template>
        <span
          v-if="element.includes('circle:')"
          class="element circle"
          :class="element"
          :style="{
            width: (() => {
              if (!element.includes('/')) {
                return element.split(':')[1] + 'px';
              }
              if (element.includes('/')) {
                return element.split(':')[1].split('/')[0] + 'px';
              }
              return options.defaultSizes.circle + 'px';
            })(),
            height: (() => {
              if (!element.includes('/')) {
                return element.split(':')[1] + 'px';
              }
              if (element.includes('/')) {
                return element.split(':')[1].split('/')[1] + 'px';
              }
              return options.defaultSizes.circle + 'px';
            })(),
            borderRadius: options.circleRadius + '%',
            backgroundColor: options.primaryColor,
            '--secondaryColor': options.secondaryColor,
            '--speed': options.speed,
          }"
        >
        </span>
        <template v-if="element === 'blank'">
          <span
            v-for="(element, i) in (element[0], 1)"
            class="element"
            :key="i"
            :style="{
              width: options.defaultSizes.box + 'px',
              height: options.defaultSizes.box + 'px',
            }"
          ></span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// import { title } from "process";

export default {
  name: "VSkeletonLoader",
  props: {
    content: {
      type: Array,
    },
    options: {
      type: Object,
      default: function () {
        return {
          radius: 3,
          primaryColor: "#ddd",
          secondaryColor: "rgba(255, 255, 255, 0.5)",
          animate: true,
          speed: "1.5s",
          defaultSizes: {
            box: 50,
            circle: 50,
            title: 13,
            text: 10,
          },
        };
      },
    },
  },
  filters: {
    forceNestedArray: function (arr) {
      if (Array.isArray(arr) && !Array.isArray(arr[0])) {
        return [arr];
      } else {
        return arr;
      }
    },
  },
};
</script>

<style lang="scss">
.v-skeleton-loader {

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: -5px;

    .col {
      flex-grow: 1;
      margin: 0 5px;
    }
  }

}

.element {
  display: block;
  position: relative;
  margin: 5px 0;
  text-indent: -9999px;
  overflow: hidden;

  &.circle {
    border-radius: 50%;
  }

  &.title {
    width: 15%;
  }

  &.text:nth-child(2) {
    width: 70%;
  }

  &.text:nth-child(3) {
    width: 50%;
  }

  &.text:nth-child(4) {
    width: 60%;
  }
}

.animation .element:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    transparent,
    var(--secondaryColor),
    transparent
  );
  animation: shimmer var(--speed) infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

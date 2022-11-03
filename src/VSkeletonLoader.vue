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
            width: options.titleWidth + 'px',
            height: options.titleHeight + 'px',
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
              height: options.textSize + 'px',
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
              height: options.textSize + 'px',
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
            :key="i"
            :style="{
              width: options.boxSize + 'px',
              height: options.boxSize + 'px',
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
              return options.boxWidth + 'px';
            })(),
            height: (() => {
              if (!element.includes('/')) {
                return element.split(':')[1] + 'px';
              }
              if (element.includes('/')) {
                return element.split(':')[1].split('/')[1] + 'px';
              }
              return options.boxWidth + 'px';
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
            class="element"
            :key="i"
            :style="{
              width: options.circleSize + 'px',
              height: options.circleSize + 'px',
              borderRadius: options.circleRadius + '%',
              backgroundColor: options.primaryColor,
              '--secondaryColor': options.secondaryColor,
              '--speed': options.speed,
            }"
          ></span>
        </template>
        <span
          v-if="element.includes('circle:')"
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
              return options.circleSize + 'px';
            })(),
            height: (() => {
              if (!element.includes('/')) {
                return element.split(':')[1] + 'px';
              }
              if (element.includes('/')) {
                return element.split(':')[1].split('/')[1] + 'px';
              }
              return options.circleSize + 'px';
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
              width: options.boxSize + 'px',
              height: options.boxSize + 'px',
            }"
          ></span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
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
          circleRadius: 50,
          primaryColor: "#ddd",
          secondaryColor: "rgba(0, 0, 0, 0.5)",
          animate: true,
          speed: "1.5s",
          boxSize: 50,
          boxWidth: 160,
          boxHeight: 90,
          circleSize: 50,
          titleWidth: 80,
          titleHeight: 13,
          textSize: 10,
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

<style scoped>
.v-skeleton-loader {
  padding: 30px;
  border: 3px solid #ddd;
}
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -5px;
}
.col {
  flex-grow: 1;
  margin: 0 5px;
}
.element {
  display: block;
  position: relative;
  margin: 5px 0;
  text-indent: -9999px;
  overflow: hidden;
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
.element.text:nth-child(2) {
  width: 70%;
}
.element.text:nth-child(3) {
  width: 50%;
}
.element.text:nth-child(4) {
  width: 60%;
}
</style>

<!-- [ ["blink"],
["box","box","blink","box","box","box","circle","circle","circle","circle"],
["blink"], ["box", "title+text:3","blink","blink","blink"],
["box","title+text","blink","blink","blink","blink","blink","blink","blink"],
["box","box","blink","box","blink","box","box:"], ["blink"],
["box","circle","circle","circle"], ["box"], ["box","circle","circle","circle"],
["blink"], ["box"], ["box"], ["box","box","box","box","blink","box","circle"] ] -->
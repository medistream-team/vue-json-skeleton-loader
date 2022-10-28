<template>
  <div class="v-skeleton-loader">
    <div
      class="row"
      v-for="(row, rowIndex) in content"
      :key="rowIndex"
      v-bind:class="rowIndex"
    >
      <div
        class="col"
        v-for="(element, elementIndex) in row"
        :key="elementIndex"
      >
        <span
          v-if="element.includes('circle')"
          class="element"
          :class="element"
          :style="{
            width: 50 + 'px',
            height: 50 + 'px',
          }"
        >
        </span>
        <span
          v-if="element.includes('box')"
          class="element"
          :class="element"
          :style="{
            width: 50 + 'px',
            height: 50 + 'px',
          }"
        >
        </span>
        <span
          v-if="element.includes('rec16_9')"
          class="element"
          :class="element"
          :style="{
            width: 50 + 'px',
            height: 50 + 'px',
          }"
        >
        </span>
        <span
          v-if="element.includes('rec9_16')"
          class="element"
          :class="element"
          :style="{
            width: 50 + 'px',
            height: 50 + 'px',
          }"
        >
        </span>

        <span v-if="element.includes('title')" class="element title"></span>
        <span v-if="element === 'text'" class="element text"></span>
        <span
          v-if="element === 'title + text'"
          class="element"
          :class="element"
        ></span>
        <template v-if="element.includes('text:')">
          <span
            v-for="(e, i) in parseInt(element.split(':')[1], 10)"
            class="element text"
            :class="element"
            :key="i"
          >
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VSkeletonLoader",
  data() {
    return {
      height: {
        type: [Number, String],
        default: 200,
      },
      width: {
        type: [Number, String],
        default: 200,
      },
    };
  },
  props: {
    content: {
      type: Array,
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
.row:nth-child(2) {
  margin-top: 13px;
}
.col {
  flex-grow: 1;
  margin: 0 5px;
}
.col:first-child {
  flex-grow: 0;
}
.element {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 5px 0;
  background-color: #dddbdd;
  border-radius: 5px;
  text-indent: -9999px;
  overflow: hidden;
}
.element:after {
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
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.element.circle {
  border-radius: 50%;
}
.element.title {
  height: 20px;
}
.element.title:first-child {
  width: 30%;
}
.element.text {
  height: 15px;
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

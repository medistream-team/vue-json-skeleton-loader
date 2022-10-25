<template>
  <div class="v-skeleton-loader">
    <div
      class="row"
      v-for="(row, rowIndex) in content"
      :key="rowIndex"
      v-bind:class="rowIndex"
    >
      <span
        class="col"
        v-for="(element, elementIndex) in row"
        :key="elementIndex"
      >
        <template v-if="element.includes('circle') || element.includes('box')">
          <span class="element" :class="element">
            {{ element }}
          </span>
        </template>
        <template v-if="element.includes('rec16') || element.includes('rec9')">
          <span class="element rec" :class="element">
            {{ element }}
          </span>
        </template>
        <template v-if="element.includes('title')">
          <span class="element title">
            {{ element }}
          </span>
        </template>
        <template v-if="element === 'text'">
          <span class="element text">
            {{ element }}
          </span>
        </template>
        <template v-if="element === 'title + text'">
          <span class="element text">
            {{ element }}
          </span>
        </template>
        <template v-if="element.includes('text:')">
          <span
            class="element text"
            :class="element"
            v-for="(e, i) in parseInt(element.split(':')[1], 10)"
            :key="i"
          >
            {{ element }}
          </span>
        </template>
      </span>
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
  },
  //  포털 , 이중배열, 인풋 그려지게
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
  margin: 0 5px;
}
.col:last-child {
  flex: 1 0 auto;
}
.element {
  display: block;
  position: relative;
  width: 100%;
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
.element.box {
  width: 70px;
  height: 0;
  padding-bottom: 100%;
}
.element.circle {
  width: 70px;
  height: 0;
  padding-bottom: 100%;
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

.element.rec16_9 {
  width: 140px;
  height: 0;
  padding-bottom: 70%;
}
.element.rec9_16 {
  width: 98px;
  height: 0;
  padding-bottom: 143%;
}
</style>

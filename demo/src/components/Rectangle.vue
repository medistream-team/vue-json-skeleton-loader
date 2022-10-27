<template>
  <span
    class="element"
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
  </span>
</template>

<script>
export default {
  props: {
    height: {
      type: [Number, String],
      default: 200,
    },
    width: {
      type: [Number, String],
      default: 200,
    },
  },
};
</script>

<style scoped>
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
</style>

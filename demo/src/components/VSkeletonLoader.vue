<template>
  <div class="v-skeleton-loader">
    <div class="row" v-for="(row, rowIndex) in content" :key="rowIndex">
      <span class="element" v-for="(element, elementIndex) in row" :key="elementIndex">
        {{ element }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSkeletonLoader',
  props: {
    content: {
      type: Array
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}
.element {
  flex: 1;
  display: inline-block;
  padding: 20px;
  background-color: #ddd;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
</style>

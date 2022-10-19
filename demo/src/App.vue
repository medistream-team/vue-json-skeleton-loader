<template>
  <div id="app">
    <div class="container">
      <h1>VSkeletonLoader Demo</h1>
      <div class="samples">
        <h3>Case #1</h3>
        <VSkeletonLoader :content="[
          ['box', 'title + text']
        ]"></VSkeletonLoader>
        <h3>Case #2</h3>
        <VSkeletonLoader :content="[
          ['box:9/16', 'title + text:2']
        ]"></VSkeletonLoader>
        <h3>Case #3</h3>
        <div style="max-width: 50%;">
          <VSkeletonLoader :content="[
            ['box:16/9'],
            ['title'],
            ['text:2']
          ]"></VSkeletonLoader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/components/VSkeletonLoader'
import VSkeletonLoader from './components/VSkeletonLoader.vue'
export default {
  name: 'App',
  components: {
    VSkeletonLoader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  margin: 20px;
}
.samples {
  max-width: 720px;
}
</style>

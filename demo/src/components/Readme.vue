<template>
  <div class="readmeContainer">
    <div class="title">
      <h2>Getting Started</h2>
      <h3>Installation</h3>
    </div>
    <div class="codeBorder">
      <div class="codePadding">
        <code>npm i <span>v-skeleton-loader</span></code>
      </div>
    </div>
    <div class="title">
      <h2>Plugin</h2>
    </div>

    <div class="codeBorder">
      <div class="codePadding">
        <code>
          import <span>VSkeletonLoader</span> from
          <span>'v-skeleton-loader'</span>
          <br />
          <span>Vue.use</span>(<span>VSkeletonLoader</span>)</code
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Readme",
};
</script>

<style lang="scss">
.readmeContainer {
  width: 700px;
  margin: 0 auto;
  padding-top: 50px;

  .title {
    margin-bottom: 10px;

    h2 {
      font-size: 20px;
      line-height: 1.5em;
    }

    h3 {
      font-size: 18px;
      line-height: 1.3em;
    }
  }

  .codeBorder {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;

    .codePadding {
      padding: 10px;
      line-height: 1.4em;

      span {
        color: #9bc1ff;
      }
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="header-wrap">
      <h1 class="logo">Vue Skeleton Loader</h1>
      <div class="link">
        <a
          href="https://github.com/medistream-team/v-skeleton-loader"
          class="github-link"
          target="_black"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ddd;

  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;

    .logo {
      font-size: 25px;
      line-height: 1.3em;
    }

    .link {
      a {
        display: block;
        font-size: 15px;
        line-height: 1.3em;
        color: #000;
        text-decoration: underline;
      }
    }
  }
}
</style>

<template>
  <div class="licenseContainer">
    <p>
      Copyright &copy; 2022 This project is
      <a href="https://github.com/medistream-team">[Medistream]</a>
    </p>
    <p>
      <a
        href="https://github.com/medistream-team/v-skeleton-loader/blob/main/LICENSE"
        >[MIT]</a
      >
      licensed.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.licenseContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;
  background-color: #4c8bf5;

  p {
    font-size: 14px;
    line-height: 1.4em;
    color: #fff;

    a {
      color: #fff;
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="container">
      <div class="logo">Vue Blog</div>
      <ul class="text-right">
        <router-link to="/" exact>
          <li><a>Home</a></li>
        </router-link>
        <router-link to="/blog">
          <li><a>Blog</a></li>
        </router-link>
        <router-link to="/about">
          <li><a>About</a></li>
        </router-link>
        <router-link to="/help">
          <li><a>Help</a></li>
        </router-link>
        <router-link to="/faq">
          <li><a>FAQ</a></li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }
  ul {
    float: left;
    width: calc(100% - 200px);
    margin: 0;
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>

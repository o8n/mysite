<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h2 class="site-title">
          <router-link to="/">o8n site</router-link>
        </h2>
      </header>
      <img src="./assets/okamotchan.png">
      <div id="nav">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>

    <div class="sns-box">
        <a href="https://twitter.com/okamotchan_" class="sns-link" target="_blank">
          <font-awesome-icon :icon='["fab", "twitter"]' />
        </a>
        <a href="https://github.com/okamotchan" class="sns-link" target="_blank">
          <font-awesome-icon :icon='["fab", "github"]' />
        </a>
        <a href="https://instagram.com/0kam0tchan" class="sns-link" target="_blank">
          <font-awesome-icon :icon='["fab", "instagram"]' />
        </a>
    </div>

    <!-- <footer>
      <div class="copyright-box">©️ 2019 o8n</div>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

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
      <a class="sns-link" href="https://twitter.com/okamotchan_" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="sns-link" href="https://github.com/okamotchan" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a class="sns-link" href="https://instagram.com/0kam0tchan" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
    </div>

    <footer>
      <div class="copyright-box">©️ 2019 o8n</div>
    </footer>
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

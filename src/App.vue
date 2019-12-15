<template>
  
  <div id="app">
    <div class="header-outer">
      <header>
        <h2 class="site-title">
          <router-link to="/">o8n</router-link>
        </h2>
      <router-view/>
      </header>
    </div>
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/about">about</router-link> /
      <router-link to="/skill">skill</router-link>
    </div>

  <footer>
    <div class="copyright-box">©️ 2019 o8n</div>
  </footer>

  </div>
</template>

<script>
import skill from "./components/skill.vue";
import about from "./components/about.vue";
import home from '@/components/home';

export default {
  name: 'App',
  components: {
    skill,
    about,
    home
  }
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

a {
  color: #20c997;
}

p {
  color:black;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

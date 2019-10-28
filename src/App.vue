<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h2 class="site-title">
          <router-link to="/">o8n site</router-link>
        </h2>
      <img src="./assets/okamotchan.png" class="center">
      <router-view/>
      </header>
    </div>

    <div id="about">
    <div class="container">
      <p>I'm a student, intersted in Web</p>
      <p>Skill: Ruby, Rails, etc</p>
      <b-button pill variant="outline-secondary">
        <a href="https://nikogory.hatenablog.com/" class="href" size="sm">blog</a>
      </b-button>

      <b-button pill variant="outline-secondary">
        <a href="https://scrapbox.io/okamotchan/" class="href" size="sm">memo</a>
      </b-button>
    </div>
  </div>
    <!-- <div id="nav">
      <router-link to="/about">
        <b-button pill variant="outline-secondary">
          About
        </b-button>
      </router-link>
    </div> -->

    <div class="sns-box">
        <a href="https://github.com/okamotchan" class="sns-link" target="_blank">
          <font-awesome-icon :icon='["fab", "github"]' />
        </a>
        <a href="https://instagram.com/o8n_factory" class="sns-link" target="_blank">
          <font-awesome-icon :icon='["fab", "instagram"]' />
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

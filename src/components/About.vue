<template>
  <div id="about">
    <div class="container">
      <p>I'm a student, intersted in Web</p>
      <p>Skill: Ruby, Rails</p>
      <button v-on:click="doChangeState(item)">
        <a href="https://nikogory.hatenablog.com/" class="href">tech blog</a>
      </button>

      <button v-on:click="doChangeState(item)">
        <a href="https://scrapbox.io/okamotchan/" class="href">Scrapbox</a>
      </button>

      <button v-on:click="doChangeState(item)">
        <a href="https://okamotchan.hatenablog.com" class="href">hobby blog</a>
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import About from '@/components/About.vue'

export default {
  name: 'About',
  // components: {
  //   About
  // },
  data () {
    return {
      msg: 'okamotchan',
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

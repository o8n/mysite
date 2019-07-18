<template>
  <div id="about">
    <div class="container">
      <p>I'm intersted in Web</p>
      <a href="https://nikogory.hatenablog.com/" class="href">tech blog</a> |
      <a href="https://scrapbox.io/okamotchan/" class="href">scrapbox</a>
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

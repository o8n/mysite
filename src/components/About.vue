<template>
  <div id="about">
    <div class="container">
      <p>エンジニアかもしれないけど自信がない{{ msg }}</p>
      <a href="https://nikogory.hatenablog.com/" class="href">日記</a> |
      <a href="https://scrapbox.io/okamotchan/" class="href">掃き溜め</a>
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

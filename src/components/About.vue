<template>
  <div id="about">
    <h4>{{ msg }}</h4>
    
    <div class="container">
      <p>エンジニアかもしれないんですけど自信がないです</p>
      <a href="https://okamotchan.hatenablog.com" class="href">日記</a>
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
      msg: 'okamotchanです',
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

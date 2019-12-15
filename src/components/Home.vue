<template>
    <img src="../assets/okamotchan.png" class="center">

</template>

<script>
// @ is an alias to /src
import home from '@/components/home.vue'

export default {
  name: 'home',
  components: {
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

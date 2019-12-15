<template>
  <div id="skill">
    <div class="container">
      <div>
        <h3>about</h3>
        <b-table stacked small fixed :bordered="bordered" :fields="fields" :items="items">
          <a href="https://github.com/okamotchan">github</a>
        </b-table>
      </div>

    <div class="sns">
      <h3>links</h3>
      <b-table stacked :fields="sns" :items="links" foot-clone>
      <!-- A custom formatted data column cell -->
      <template v-slot:cell(name)="data">
        {{ data.value.first }} {{ data.value.last }}
      </template>
    </b-table>
    </div>
      <!-- <b-button pill variant="outline-secondary">
        <a href="https://nikogory.hatenablog.com/" class="href" size="sm">blog</a>
      </b-button>

      <b-button pill variant="outline-secondary">
        <a href="https://scrapbox.io/okamotchan/" class="href" size="sm">memo</a>
      </b-button> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import About from '@/components/About.vue'

export default {
  name: 'About',
  // components: {
  //   about
  // },
  data () {
    return {
      fields: ['name', 'where', 'job', 'university', 'major', 'like', '愛しい推しの皆様'],
      items: [
          { 
            name: 'okamotchan',
            where: 'Nara & Kyoto, Japan',
            job: 'Student(B3), Web developer',
            university: 'Doshisha University',
            major: 'Economics', 
            like: 'ハロー!プロジェクト、銭湯、音楽', 
            愛しい推しの皆様: '段原瑠々 森戸知沙希 浜浦彩乃 伊勢鈴蘭  広本瑠璃 矢島舞美 つんく'
          }
        ],
      sns: ['github', 'blog', 'scrapbox', 'mail'],
      links: [
        {
          github: 'https://github.com/okamotchan', 
          blog: 'http://nikogory.hatenablog.com', 
          scrapbox:'https://scrapbox.io/okamotchan',
          mail: 'm.okamotchan@gmail.com'
      }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: normal;
}
h3 {
  text-align: left;
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


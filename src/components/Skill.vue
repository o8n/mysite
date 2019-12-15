<template>
  <div id="skill">
    <div class="container">
    <h2 >#skill</h2>
    <h5>
        <li>Ruby</li>
        <ul>- Ruby on Rails</ul>
        <li>html/css</li>
        <li>JavaScript</li>
        <ul>- Vue.js</ul>
        <li>Git</li>
        <li>PostgreSQL and more..</li>
        <p></p>
    </h5>

    <p></p>
    <p></p>
    <p></p>
    <h2 class="enployment">#enployment</h2>
    <h5>
      <li>
        2019.02~now @PIXTA
        <ul>
          developing mecelo.com
        </ul>
      </li>
      <li>
        2019.09 @Rakuten
        <ul>二子玉川夏の陣</ul>
      </li>
      <li>
        2019.09 @CyberAgent
        <ul>
          平成最後のハッカソン、学生版APIヒダッカソン
        </ul>
      </li>
    </h5>

    <h3>#production</h3>
      <b-card
        title="家計簿"
        img-src="https://i.gyazo.com/6c37bf64d49ec2ae91924a031e056ed5.png"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
      <b-card-text>
        Railsを学び始めの頃に作った ActiveRecordを理解した
      </b-card-text>

    <b-button href="https://github.com/okamotchan/kakeibo" variant="primary">Go repository</b-button>
      </b-card>

  <b-card
    title="平成ギャル図鑑"
    img-src="https://i.gyazo.com/b19f6a1ebcf6c663279a647ca229ba97.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      お気に入りの平成ギャルをみんなと共有できる
    </b-card-text>

    <b-button href="https://github.com/milkywei/gal_project" variant="primary">Go repository</b-button>
  </b-card>

  <b-card
    title="mecelo"
    img-src="https://mecelo.com/image/ogp-image.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      ピクスタ社で開発しています
    </b-card-text>
    <b-button href="https://mecelo.com" variant="primary">Go mecelo.com</b-button>
  </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import skill from '@/components/skill.vue'

// export default {
//   name: 'skill',
//   components: {
//     skill
//   }
// }
</script>

<style>
h2,h3, h5 {
  text-align: left;
}
.mb-2 {
  float: left;
}
.employment {
  text-align: right;
}
</style>

<style scoped>
.card {
  box-shadow: 0px 8px 8px #58585869;
  border-radius: 8px;
  max-width: 750px;
  margin: auto;
  margin-bottom: 24px;
}

th, td {
  padding: 8px
}

img {
  width: 100%;
}

.tablerow:nth-child(odd)  {
  background: #ededed;
}

h1 {
  margin: 0;
}

h1, p, span {
  padding: 12px;
}

span {
  color: #6b6b6b;
  font-weight: 100;
}
</style>
<template>
<div>
  <div v-if="showError">Ha ocurrido un error al cargar la tabla de posiciones</div>
  <div v-for="(article, index) in articles" :key="index" class="card">
    <h1>{{ article.title }}</h1>
    <span>{{ article.date }}</span>
    <img v-bind:src="article.image_url">
    <p>{{ article.content }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getNews } from '../../api'
import { NewsArticle } from '../../models/NewsArticle'


@Component
export default class extends Vue {
  articles: NewsArticle[] = []
  showError = false
  showLoading = false

  created() {
    getNews().then(articles => {
      this.articles = articles
    }).catch(err => {
      this.showError = true
    })
  }
}

</script>
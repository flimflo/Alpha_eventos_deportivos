import Vue from 'vue'
import CommentBox from './comment-box/comment-box.vue'
import LeaderboardTable from './leaderboard-table/leaderboard-table.vue'
import NewsList from './news-list/news-list.vue'

new Vue({
  el: '#app',
  components: {
    CommentBox,
    LeaderboardTable,
    NewsList,
  }
})
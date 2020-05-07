import Vue from 'vue'
import CommentBox from './comment-box/comment-box.vue'
import LeaderboardTable from './leaderboard-table/leaderboard-table.vue'

new Vue({
  el: '#app',
  components: {
    CommentBox,
    LeaderboardTable
  }
})
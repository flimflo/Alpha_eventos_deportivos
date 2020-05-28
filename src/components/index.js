import Vue from 'vue'
import CommentBox from './comment-box/comment-box.vue'
import LeaderboardTable from './leaderboard-table/leaderboard-table.vue'
import NewsList from './news-list/news-list.vue'
import RoleTable from './role-table/role-table.vue'
import TopList from './top-list/top-list.vue'
import PhotoList from './photo-list/photo-list.vue'
import VideoList from './video-list/video-list.vue'

new Vue({
  el: '#app',
  components: {
    CommentBox,
    LeaderboardTable,
    NewsList,
    RoleTable,
    TopList,
    PhotoList,
    VideoList,
  }
})
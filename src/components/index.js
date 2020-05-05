import Vue from 'vue'
import CommentBox from './comment-box/comment-box.vue'

console.log(CommentBox)

const app = new Vue({
  el: '#app',
  components: { CommentBox }
})
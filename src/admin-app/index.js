import Vue from 'vue'
import Auth from './sections/auth/auth.vue'
import CommentReview from './sections/comment-reviewer/comment-reviewer.vue'

new Vue({
  el: '#app',
  template: `
  <div>
    <Auth />
    <CommentReview />
  </div>
  `,
  components: {
    Auth,
    CommentReview
   }
})

const app = Vue.createApp({
  data() {
    return {
      comments: JSON.parse(localStorage.getItem('comments') || '[]'),
      newComment: {
        name: '',
        comment: ''
      }
    }
  },
  computed: {
    commentCount() {
      return this.comments.length;
    }
  },
  methods: {
    addComment() {
      if (this.newComment.name && this.newComment.comment) {
        this.comments.push(this.newComment);
        localStorage.setItem('comments', JSON.stringify(this.comments));
        this.newComment = {
          name: '',
          comment: ''
        };
      }
    }
  }
});

app.mount('#app');

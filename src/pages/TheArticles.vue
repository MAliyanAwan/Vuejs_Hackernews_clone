<template>
  <div>
    <article-body
      :score="userData.score"
      :title="userData.title"
      :by="userData.by"
      :time="userData.time"
      :comments="userData.kids"
    ></article-body>
  </div>
  <div class="card-container">
    <div v-for="comment in comments" :key="comment">
      <comments-body
        :comments="comment.text"
        :commentby="comment.by"
        :commenttime="comment.time"
        >
      </comments-body>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: [],
      comments: [],
      error: null,
    };
  },
  created() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
          this.$route.params.id +
          ".json"
      )
      .then((response) => {
        this.userData = response.data;
        // this.userData.comments = [];
        this.userData.kids.forEach((storyId) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => {
              this.comments.push(response.data);
              console.log(this.comments);
            }).catch((err) => {
                console.log(err);
            });
        });
      });

  },
};
</script>

<style scoped>
.card-container {
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 57rem;
}
</style>

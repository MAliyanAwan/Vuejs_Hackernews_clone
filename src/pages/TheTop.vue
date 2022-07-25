<template>
  <!-- <h2>This is Top</h2> -->
  <div class="card-container">
    <div v-if="topData">
      <div v-for="top in topData" :key="top.id">
        <body-card
          :id="top.id"
          :score="top.score"
          :title="top.title"
          :by="top.by"
          :time="top.time"
          :comments="top.kids"
        >
        </body-card>
      </div>
    </div>
  </div>

  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      topData: [],
    };
  },
  created() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => {
        let stories = response.data
        stories.forEach((storyId) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => {
              this.topData.push(response.data);
              // console.log(this.topData);
            })
            .catch((err) => {
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
  max-width: 55rem;
}
</style>

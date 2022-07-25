<template>
  <!-- <h2>This is Show</h2> -->
  <div class="card-container">
    <div v-if="showData">
      <div v-for="show in showData" :key="show.id">
        <body-card
          :id="show.id"
          :score="show.score"
          :title="show.title"
          :by="show.by"
          :time="show.time"
          :comments="show.kids"
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
      showData: [],
    };
  },
  created() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/showstories.json")
      .then((response) => {
        let stories = response.data.slice(0, 15);
        stories.forEach((storyId) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => {
              this.showData.push(response.data);
              console.log(this.showData);
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
  max-width: 55rem;
}
</style>

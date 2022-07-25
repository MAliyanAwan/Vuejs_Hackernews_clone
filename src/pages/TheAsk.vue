<template>
  <!-- <h2>This is Ask</h2> -->
  <div class="card-container">
    <div v-if="askData">
      <div v-for="ask in askData" :key="ask.id">
        <body-card
          :id="ask.id"
          :score="ask.score"
          :title="ask.title"
          :by="ask.by"
          :time="ask.time"
          :comments="ask.kids"
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
      askData: [],
    };
  },
  created() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/askstories.json")
      .then((response) => {
        let stories = response.data.slice(0, 10);
        stories.forEach((storyId) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => {
              this.askData.push(response.data);
              console.log(this.askData);
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

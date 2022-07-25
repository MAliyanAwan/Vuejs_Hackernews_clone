<template>
  <!-- <h2>This is New</h2> -->
  <div class="card-container">
    <div v-if="newData">
      <div v-for="newD in newData" :key="newD.id">
        <body-card
          :id="newD.id"
          :score="newD.score"
          :title="newD.title"
          :by="newD.by"
          :time="newD.time"
          :comments="newD.kids"
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
      newData: [],
    };
  },
  created() {
    axios.get("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then((response) => {
        let stories = response.data.slice(0, 15);
        stories.forEach((storyId) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => {
              this.newData.push(response.data);
              console.log(this.newData);
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

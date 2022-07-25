<template>
  <!-- <h2>This is Jobs</h2> -->
  <div class="card-container">
    <div v-if="jobsData">
      <div v-for="jobs in jobsData" :key="jobs.id">
        <body-card
          :id="jobs.id"
          :score="jobs.score"
          :title="jobs.title"
          :by="jobs.by"
          :time="jobs.time"
          :comments="jobs.kids"
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
      jobsData: [],
    };
  },
  created() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((response) => {
        let stories = response.data.slice(0, 15);
        stories.forEach((storyId) => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then((response) => {
              this.jobsData.push(response.data);
              console.log(this.jobsData);
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

<template>
  <div class="card">
    <ul class="item">
      <li>
        <p class="title">{{ title }}</p>
        <br />
        <div class="forsiplay">
          <p class="score">{{ score }} points |</p>
          <p class="by">
            by <a href="">{{ by }}</a>
          </p>
          <p class="time">{{ timeAgo(time) }} ago</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="commentcard">
      <p class="commentP" v-if="comments">
          <a href="">{{ comments.length }} Comments</a>
          </p>
    </div>
</template>

<script>
export default {
  props: ["id", "score", "title", "by", "time", "comments"],
  methods: {
    timeAgo(time) {
      const between = Date.now() / 1000 - Number(time);
      if (between < 3600) {
        return this.pluralize(~~(between / 60), " minute");
      } else if (between < 86400) {
        return this.pluralize(~~(between / 3600), " hour");
      } else {
        return this.pluralize(~~(between / 86400), " day");
      }
    },
    pluralize(time, label) {
      if (time === 1) {
        return time + label;
      }
      return time + label + "s";
    },
  },
};
</script>

<style scoped>
.title {
  color: rgb(42, 42, 42);
  font-size: 28px;
  margin: 0;
  font-weight: bold;
}

.comments a {
  padding-left: 6px;
  color: grey;
}

.by a {
  color: grey;
}

.time {
  padding-right: 6px;
  padding-left: 6px;
}

.score {
  padding-right: 6px;
  padding-left: 6px;
}

.card {
  margin: auto;
  justify-content: center;
  height: 8rem;
  background-color: #fff;
  padding-left: 60px;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  position: relative;
  max-width: 55rem;
}

ul li {
  display: list-item;
  list-style: none;
}

.forsiplay {
  display: flex;
}

p {
  font-size: 20px;
  margin: 0;
  color: grey;
}

.commentcard{
  margin: auto;
  justify-content: center;
  height: 3rem;
  background-color: #fff;
  padding-top: 1rem;
  padding-left: 30px;
  border-bottom: 1px solid #eee;
  position: relative;
  max-width: 56.8rem; 
}

.commentP a{
  color: black;
  text-decoration: none;
}
</style>

<template>
  <div class="card">
    <ul class="item">
      <li>
        <h1 class="score">{{ score }}</h1>
        <p class="title">
          <router-link :to="{ path: '/story/' + id }">{{ title }}</router-link>
        </p>
        <br />
        <div class="forsiplay">
          <p class="by">
            by <a href="">{{ by }}</a>
          </p>
          <p class="time">{{ timeAgo(time) }} ago</p>
          <p class="comments" v-if="comments">
            |<a href="">{{ comments.length }} Comments</a>
          </p>
        </div>
      </li>
    </ul>
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
  font-size: 20px;
  margin: 0;
}

.title a {
  color: black;
  text-decoration: none;
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
.card {
  height: 5rem;
  background-color: #fff;
  padding-left: 60px;
  top: 0;
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
  margin: 0;
  color: grey;
}
.card .score {
  color: #f60;
  font-size: 30px;
  /* font-weight: 700; */
  position: absolute;
  /* top: 50%; */
  left: 0;
  width: 80px;
  text-align: center;
  /* margin-top: -10px; */
}
</style>

<template>
  <div class="card">
    <div class="forsiplay">
      <p class="comby">
        <a href="">{{ commentby }}</a>
      </p>
      <p class="comtime">{{ timeAgo(commenttime) }} ago</p>
    </div>
    <p class="comments" v-html="comments.replace(/<[^>]+>/g, '')"></p>
  </div>
</template>

<script>
export default {
  props: ["comments", "commentby", "commenttime","commentsnumb"],
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
.comby a {
  color: grey;
}

.comtime {
  color: grey;
  padding-left: 8px;
}
.comments {
  color: black;
  font-size: 17px;
  position: relative;
  display: flex;
}

.card {
  margin: auto;
  justify-content: center;
  background-color: #fff;
  top: 0;
  border-bottom: 1px solid #eee;
  position: relative;
  max-width: 55rem;
}
.forsiplay {
  display: flex;
}
</style>

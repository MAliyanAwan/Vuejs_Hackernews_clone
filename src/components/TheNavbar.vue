<template>
    <header>
        <nav>
            <img class="logoIcon" src="../assets/images/logo-120.png" alt="logo">
            <ul>
                <li><router-link to="/top">Top</router-link></li>
                <li><router-link to="/new">New</router-link></li>
                <li><router-link to="/show">Show</router-link></li>
                <li><router-link to="/ask">Ask</router-link></li>
                <li><router-link to="/jobs">Jobs</router-link></li>
                <a class="githublink" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">
                Built with Vue.js
                </a> 
            </ul>
        </nav>
    </header>
</template>


<style scoped>
header {
  width: 100%;
  height: 4rem;
  background-color: #ff6600;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  font-size: 18px;
  text-decoration: none;
  color: #f2f2f2;
  display: inline-block;
}

a:active,
a:hover,
a.router-link-active {
  color: black
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logoIcon{
  width: 26px;
  margin-right: 20px;
  display: inline-block;
  vertical-align: middle;
  }
.githublink{
    margin-left: 22rem;
    color: #fff;
    text-decoration: none;
    width: 100%;
    text-align: right;
    }

li {
  margin: 0 0.5rem;
}
</style>
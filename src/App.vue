<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/datasets/sites">Sites</router-link> |
    <router-link to="/datasets/groups">Groups</router-link> |
    <router-link to="/datasets/organizations">Organizations</router-link> |
    <router-link to="/datasets/tags">Tags</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
html {
  background-color: rgb(213, 224, 233);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(213, 224, 233);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

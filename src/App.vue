<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
    crossorigin="anonymous"
  >
  <Header/>
  <router-view />
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component"
import Header from "@/components/Header.vue"

@Options({
  components: {
    Header
  }
})
export default class App extends Vue {}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif');

html * {
  font-family: noto-serif;
  margin: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #E1E1E1;
}

html {
  background-color: #E1E1E1;
}
</style>

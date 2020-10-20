<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <div v-for="dataset in datasets" :key="dataset.name">
    {{ dataset.name }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  datasets = null;

  mounted() {
    console.log("###############");
    this.fetchDatasets();
    console.log(this.datasets);
  }

  fetchDatasets() {
    fetch("http://localhost:3000/datasets")
      .then(data => data.json())
      .then(data => {
        this.datasets = data;
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

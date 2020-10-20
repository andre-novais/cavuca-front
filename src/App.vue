<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <div class="container">
    <div class="row" v-for="dataset in datasets" :key="dataset.name">
      <a class="dataset-name">{{ dataset.name }}</a>
      <p class="dataset-description">{{ dataset.description }}</p>
      <div class="container">
        <div class="row">
          <div class="col-sm col-sm-offset-2">
            <div
              class="btn btn-primary dataset-tag"
              v-for="tag in dataset.tags"
              :key="tag"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
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
  }

  fetchDatasets() {
    fetch("http://localhost:3000/datasets")
      .then(data => data.json())
      .then(data => {
        this.datasets = data;
        console.log(data[0]);
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

.dataset-name {
  font-size: 16px;
}

.dataset-description {
  font-size: 13px;
}

.dataset-tag {
  font-size: 12px;
}
</style>

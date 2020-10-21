<template>
  <DatasetListing :datasets="datasets" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Options, Vue } from "vue-class-component";
import DatasetListing from "@/components/DatasetListing.vue";

@Options({
  components: {
    DatasetListing
  }
})
export default class Home extends Vue {
  datasets = null;

  mounted() {
    this.fetchDatasets();
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

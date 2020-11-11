<template>
  <DatasetListing :datasets="datasets" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"
import DatasetListing from "@/components/DatasetListing.vue"

@Options({
  components: {
    DatasetListing
  },
  props: {
    category: {
      type: String,
      required: false
    }
  }
})
export default class Listing extends Vue {
  datasets = null
  category?: string

  mounted() {
    this.fetchDatasets()
  }

  fetchDatasets() {
    let url = "http://localhost:3000/datasets"
    if (this.$route.params.filterOption) {
      url += `/${this.category}/${this.$route.params.filterOption}`
    }

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.datasets = data
      })
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

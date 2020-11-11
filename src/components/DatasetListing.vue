<template>
  <div class="container">
    <div class="row" v-for="dataset in datasets" :key="dataset.name">
      <DatasetPreview :dataset="dataset" />
      <br />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"
import DatasetPreview from "@/components/DatasetPreview.vue"
import { DatasetDto } from "@/typings/datasetDto"
import { DatasetIndexDto } from "@/typings/datasetIndexDto"

@Options({
  components: {
    DatasetPreview
  },
  props: {
    datasets: Array
  }
})
export default class DatasetListing extends Vue {
  datasets!: DatasetDto[] | DatasetIndexDto[]
}
</script>

<style scoped></style>

<template>
  <div class="container">
    <div class="main">
      <DatasetPreview  v-for="dataset in datasets" :key="dataset.name" :dataset="dataset" />
    </div>
    <div class="sidebar">
      <ListingSidebar :datasets="datasets" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import DatasetPreview from "@/components/DatasetPreview.vue"
import { DatasetDto } from "@/typings/datasetDto"
import ListingSidebar from "@/components/LisitngSidebar.vue"

@Options({
  components: {
    DatasetPreview,
    ListingSidebar
  },
  props: {
    datasets: Array
  }
})
export default class DatasetListing extends Vue {
  datasets!: DatasetDto[]
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 16px minmax(500px, 1fr) 16px 462px 16px;
  grid-template-rows: auto;
  grid-template-areas: ". main . sidebar .";
}

.main {
  grid-area: main;
}

.sidebar {
  grid-area: sidebar;
}
</style>

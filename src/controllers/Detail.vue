<template>
  <DatasetDetail :dataset="dataset" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import DatasetDetail from "@/views/DatasetDetail.vue"

@Options({
  components: {
    DatasetDetail
  }
})
export default class Detail extends Vue {
  dataset = null

  mounted() {
    this.fetchDataset()
  }

  fetchDataset() {
    fetch(`${process.env.VUE_APP_BACKEND_URL}/datasets/${this.$route.params.dataset_id}`)
      .then(data => data.json())
      .then(dataset => (this.dataset = dataset))
  }
}
</script>

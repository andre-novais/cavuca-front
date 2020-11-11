<template>
  <a v-bind:href="'/datasets/' + dataset.mongo_id" class="dataset-name">
    {{ dataset.name }}
  </a>
  <p class="dataset-description">{{ dataset.organization }}</p>
  <Tags :tags="dataset.tags" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"
import Tags from "@/components/Tags.vue"
import { DatasetDto } from '@/typings/datasetDto'
import { DatasetIndexDto } from '@/typings/datasetIndexDto'


@Options({
  components: {
    Tags
  },
  props: {
    dataset: Object
  }
})
export default class DatasetListing extends Vue {
  dataset!: DatasetDto | DatasetIndexDto
}
</script>

<style scoped>
.dataset-name {
  font-size: 16px;
}

.dataset-description {
  font-size: 13px;
}
</style>

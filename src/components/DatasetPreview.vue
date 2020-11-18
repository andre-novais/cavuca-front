<template>
  <div class="dataset">
    <div class="dataset-heading">
      <a v-bind:href="'/datasets/' + datasetUrl(dataset)" class="dataset-name">
        {{ dataset.name }}
      </a>
      <div class="dataset-details">
        <i class="fas fa-user fa-xs dataset-detail"></i>
        <p class="dataset-detail">
          {{ dataset.site_name }}
        </p>
      </div>
      <div class="dataset-details" v-if="dataset.organization">
        <i class="fas fa-archway fa-xs dataset-detail"></i>
        <p class="dataset-detail">
          {{ dataset.organization.name }}
        </p>
      </div>
      <div class="dataset-details">
        <i class="fas fa-file fa-xs dataset-detail"></i>
        <p class="dataset-detail">
          {{ resourcesInfo(dataset.resources) }}
        </p>
      </div>
    </div>
    <Tags :tags="dataset.tags" />
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"
import Tags from "@/components/Tags.vue"
import { DatasetDto } from '@/typings/datasetDto'
//import { DatasetIndexDto } from '@/typings/datasetIndexDto'

const dayjs = require('dayjs')
import 'dayjs/locale/pt-br'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

@Options({
  components: {
    Tags
  },
  props: {
    dataset: Object
  }
})
export default class DatasetPreview extends Vue {
  dataset!: DatasetDto

  resourcesInfo(resources: DatasetDto['resources']): string {
    const count = resources.length
    const formats = resources
      .map(resource => resource.format.toLowerCase())
      .filter((v, i, a) => a.indexOf(v) === i)
      .join(', ')
    const s = count > 1? 's' : ''

    const updatesEpochs = resources.map(resource => {
      if (resource.updated_at) { return parseInt(resource.updated_at) }
      else { return parseInt(resource.created_at) }
    })
    const lastUpdateEpoch = Math.min(...updatesEpochs)

    return `${count} Arquivo${s} (${formats}) ultimo update ${dayjs(lastUpdateEpoch).fromNow()}`
  }

  datasetUrl(dataset: DatasetDto) {
    const url = dataset._id ? dataset._id : dataset.mongo_id
    return url
  }
}
</script>

<style scoped>
.dataset {
  background-color: rgba(255, 255, 255, 0.473);
  margin-bottom: 0.7rem;
  border-radius: 0.4rem;
}
.dataset-heading {
  text-align: start;
}
.dataset-name {
  font-size: 0.8rem;
}
.dataset-details {
  width: auto;
  font-size: 0.65rem;
  margin: 0 0 0 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.dataset-detail {
  margin: 0 0 0 0;
  width: 2%;
  display: inline-block;
}
a {
  color: black;
  text-decoration: none;
}
</style>

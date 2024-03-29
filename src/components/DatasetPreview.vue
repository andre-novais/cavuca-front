<template>
  <div class="dataset" >
    <SiteAndOrganizationAnchor :site="dataset.site_display_name" :organization="dataset.organization.name"/>
    <div class="dataset-link" v-on:click="enterDataset()">
      <h2 class="info name">{{ dataset.name }}</h2>
    <div>
      <h3 class="info tags">{{ relevantTags() }}</h3>
      <div class="resource-info-container">
        <i class="fas fa-file fa-xs resource-icon"></i>
        <p class="resource-info">{{ resourcesInfo() }}</p>
      </div>
    </div>
    <p class="description">{{ filterDescription(dataset.description) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import Tags from "@/components/Tags.vue"
import SiteAndOrganizationAnchor from "@/components/SiteAndOrganizationAnchor.vue"
import { DatasetDto } from '@/typings/datasetDto'

const dayjs = require('dayjs')
import 'dayjs/locale/pt-br'
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
dayjs.locale('pt-br')

@Options({
  components: {
    Tags,
    SiteAndOrganizationAnchor
  },
  props: {
    dataset: Object
  }
})
export default class DatasetPreview extends Vue {
  dataset!: DatasetDto

  resourcesInfo(): string {
    const resources: DatasetDto['resources'] = this.dataset.resources
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

    let resourceInfo = `${count} Arquivo${s} (${formats})`

    if(lastUpdateEpoch) {
      resourceInfo += ` ultimo update ${dayjs(lastUpdateEpoch).fromNow()}`
    }

    return resourceInfo
  }

  datasetUrl(dataset: DatasetDto) {
    const url = dataset._id ? dataset._id : dataset.mongo_id
    return url
  }

  relevantTags() {
    return this.dataset.tags.slice(0,3).join(', ')
  }

  searchSite(organization: string): void {
    this.$router.push('/dados/sites/' + organization)
  }
  searchOrg(organization: string): void {
    this.$router.push('/dados/organizacoes/' + organization)
  }

  enterDataset() {
    if(this.dataset._id) {
      this.$router.push('/dados/' + this.dataset._id)
    } else {
      this.$router.push('/dados/' + this.dataset.mongo_id)
    }
  }

  filterDescription(description: string): string {
    description = description.replaceAll(/<.*?>/gi, '')
    return description
  }
}
</script>

<style scoped>
.dataset {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
  margin-top: 16px;
  border-radius: 5px;
  padding: 8px;
  height: 125px;
  cursor: pointer;
}
.heading {
  text-align: start;
}
.info {
  white-space: nowrap;
  position: relative;
  float: left;
  text-align: left;
  margin-bottom: 0px;
  clear: both;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.organization-detail {
  display: inline-block;
  white-space: nowrap;
  color: rgba(0,0,0,0.80);
}
.organization-info {
  display: inline-block;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  text-align: left;
}
.clickabel {
  cursor: pointer;
}
.organization {
  float: left;
}
.details {
  color:  rgba(0,0,0,0.8);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
}

.detail {
  position:relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 0px;
  white-space: nowrap;
}
a {
  color: black;
  text-decoration: none;
}

.name {
  position: relative;
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.tags {
  font-family: Noto Serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(66,2,61,1);
  width: fit-content;
}
.description {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: black;
  max-width: inherit;
  max-height: 38px;
  position: relative;
  text-align: left;
  margin-bottom: 0px;
  clear: both;
  overflow: hidden;
  text-overflow: ellipsis;
}

.resource-info-container {
  position: relative;
  float: right;
  margin-bottom: 0px;
  text-align: left;
  white-space: nowrap;
}

.resource-icon {
  display: inline-block;
  margin-right: 3px;
}

.resource-info {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  display: inline-block;
  margin-bottom: 0px;
}
</style>

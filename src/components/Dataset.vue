<template>
<div v-if="dataset" class="detail">
  <div class="dataset">
    <h1 class="dataset-name">{{ dataset.name }}</h1>
    <div>
      <h4 class="section-title">Descrição</h4>
      <p>{{ dataset.description }}</p>
    </div>
    <div class="resources">
      <h4 class="section-title">Recursos</h4>
      <table class="resources">
        <thead>
          <th>link</th>
          <th>nome</th>
          <th>ultimo update</th>
        </thead>
        <tbody>
          <tr v-for="resource in dataset.resources" :key="resource.name">
            <td><a v-bind:href="resource.url" v-bind:class="formatIcon(resource.format)"></a></td>
            <td>
              <h5 class="resource-name">{{ resource.name }}</h5>
              <p class="resource-description">{{ resource.description }}</p>
            </td>
            <td class="resource-date">{{ getDate(resource) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="side-painel">
    <div v-if="dataset.organization" class="side-painel-section">
      <h6>{{ dataset.site_display_name }}</h6>
      <i class="fas fa-archway organization-detail"></i>
      <h5 class="organization-detail">{{ dataset.organization.name }}</h5>
    </div>
    <div v-if="dataset.tags.length > 0" class="side-painel-section">
      <h5>Tags</h5>
      <Tags :tags="dataset.tags" />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"
import Tags from "@/components/Tags.vue"
import { DatasetDto } from "@/typings/datasetDto"

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
export default class Dataset extends Vue {
  dataset!: DatasetDto

  formatIcon(format: string) {
    const classes = ['fas', 'fa-3x']
    const formatDict: any = {
      XML: 'fa-file-code',
      ZIP: 'fa-file-archive',
      TXT: 'fa-file-word',
      PNG: 'fa-file-image',
      PDF: 'fa-file-pdf',
      CSV: 'fa-file-csv',
      EXCEL: 'fa-file-excel',
      URL: 'fa-external-link-square-alt',
      DOC: 'fa-file',
      ALT: 'fa-file-alt'
    }
    format = format.toUpperCase()

    if (formatDict[format]) {
      classes.push(formatDict[format])
    } else {
      classes.push(formatDict['ALT'])
    }
    return classes.join(' ')
  }

  getDate(resource: any) {
    let epochMills = 0
    if(resource.updated_at) {
      epochMills = parseInt(resource.updated_at)
    } else {
      epochMills = parseInt(resource.created_at)
    }

    return dayjs(epochMills).fromNow()
  }
}
</script>

<style scoped>
.detail {
  width: auto;
  margin: 0 0 0 0;
}
.dataset {
  margin-left: 0.7rem;
  width: 60%;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.473);
  padding: 1rem;
}
.side-painel {
  margin-left: 0.7rem;
  width: 25%;
  display: inline-block;
  vertical-align:top;
}
.side-painel-section {
  padding: 0.5rem;
  margin-bottom: 0.7rem;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.473);
}
.dataset-name {
  font-size: 1.7rem;
  color:black;
}
.resources {
  margin: 0 auto;
}
a {
  color: black;
  text-decoration: none;
}
.resource-name {
  color: black;
  font-size: 0.8rem;
  font-weight: bold;
}
.resource-description {
  font-size: 0.7rem
}
.resource-date {
  white-space: nowrap;
}
.section-title {
  color: black;
  text-align: start;
  font-size: 1.2rem;
}
.organization-detail {
  white-space: normal;
  margin: 0 0 0 0.8rem;
  font-size: 0.8rem;
  display: inline-block;
}
</style>

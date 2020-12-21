<template>
  <div class="container" v-if="dataset">
    <div class="main">
      <div class="dataset">
        <div class="organization">
          <i class="fas fa-user fa-xs organization-detail"></i>
          <h3 class="organization-detail">
            <h3 class="organization-info clickabel" v-on:click="searchSite(dataset.site_name)">{{ dataset.site_display_name  }}</h3>
            / <h3 class="organization-info clickabel" v-on:click="searchOrg(dataset.organization.name)"> {{ dataset.organization.name }} </h3>
          </h3>
        </div>
        <h2>{{ dataset.name }}</h2>
        <p>{{ filterDescription(dataset.description) }}</p>
        <div class="resources">
          <a
            class="resource"
            v-for="resource in dataset.resources"
            :key="resource.name"
            :href="resource.url"
            target="#"
          >
            <i class="resource-detail resource-icon" :class="formatIcon(resource.format)"></i>
            <div class="resource-detail resource-identity">
              <h4>{{ resource.name }}</h4>
              <p class="resource-description">{{ filterDescription(resource.description) }}</p>
            </div>
            <p class="resource-detail resource-date">{{ getDate(resource) }}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <Tags :tags="dataset.tags" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import Tags from "@/components/Tags.vue"
import { DatasetDto } from "@/typings/datasetDto"

const dayjs = require('dayjs')

@Options({
  components: {
    Tags
  },
  props: {
    dataset: Object
  }
})
export default class DatasetDetail extends Vue {
  dataset!: DatasetDto

  formatIcon(format: string) {
    console.log({format})
    const classes = ['fas', 'fa-2x']
    const formatDict: Record<string, string> = {
      XML: 'fa-file-code',
      JSON: 'fa-file-code',
      ZIP: 'fa-file-archive',
      TXT: 'fa-file-word',
      PNG: 'fa-file-image',
      PDF: 'fa-file-pdf',
      CSV: 'fa-file-csv',
      ODS: 'fa-file-csv',
      EXCEL: 'fa-file-excel',
      URL: 'fa-external-link-square-alt',
      DOC: 'fa-file',
      ALT: 'fa-file-alt',
      HTML: 'fa-external-link-square-alt'
    }
    format = format.toUpperCase()

    if (formatDict[format]) {
      classes.push(formatDict[format])
    } else {
      classes.push(formatDict['ALT'])
    }
    return classes.join(' ')
  }

  getDate(resource: DatasetDto['resources'][0]) {
    let epochMills: number
    if(resource.updated_at) {
      epochMills = parseInt(resource.updated_at)
    } else {
      epochMills = parseInt(resource.created_at)
    }

    if(!epochMills) {
      return 'data não divulgada'
    }
    return dayjs(epochMills).format('DD/MM/YYYY')
  }

  searchSite(organization: string): void {
    this.$router.push('/dados/sites/' + organization)
  }
  searchOrg(organization: string): void {
    this.$router.push('/dados/organizacoes/' + organization)
  }

  filterDescription(description: string): string {
    return description.replaceAll(/<([\s\S]*?)>/g, '')
  }
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
.dataset {
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
  background-color: white;
  padding: 16px;
  border-radius: 5px;
  margin-top: 16px;
  text-align: start;
}
.resource-detail, .organization-detail {
  display: inline-block;
  white-space: nowrap;
}
.resource-detail {
  color: black;
}
.organization-detail {
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
.resources {
  margin-top: 16px;
  height: fit-content;
  padding: 16px;
}
.resource {
  display: inline-block;
  position: relative;
  white-space: nowrap;
  width: 99%;
  border-radius: 16px;
  border: 1px solid #2B481F;
  padding: 0 8px 0 8px;
  margin:-16px;
  margin-bottom: 32px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
}
.resource-icon {
  top: -5px;
}
.resource-identity {
  margin-left: 8px;
  max-width: calc(100% - 115px);
  overflow: hidden;
}
.resource-description {
  max-width: calc(100%);
  overflow: hidden;
  text-overflow: ellipsis;
}
.resource-date {
  position: relative;
  float: right;
  top: 18px;
}
i {
  position: relative;
  top: -2px;
}
.clickabel {
  cursor: pointer;
}
</style>

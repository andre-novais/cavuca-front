<template>
  <DatasetListing :datasets="datasets" :key="datasets"/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import DatasetListing from "@/views/DatasetListing.vue"

@Options({
  components: {
    DatasetListing
  },
  watch:{
    $route (){
      this.fetchDatasets()
    }
}
})
export default class Listing extends Vue {
  datasets = null


  async created() {
    await this.fetchDatasets()
  }

  async fetchDatasets() {
    this.datasets = null

    const axios = require('axios')
    const q = this.$route.query.q
    const isOrganizationQuery = this.$route.path.match(/dados\/organizacoes/i)
    const isTagsQuery = this.$route.path.match(/dados\/tags/i)

    let url = ''
    if(isOrganizationQuery) {
      url = `${process.env.VUE_APP_BACKEND_URL}/datasets/organizations/${this.$route.params.filterOption}`
    } else if(isTagsQuery) {
      url = `${process.env.VUE_APP_BACKEND_URL}/datasets/tags/${this.$route.params.filterOption}`
    } else if(!q) {
      url = `${process.env.VUE_APP_BACKEND_URL}/datasets`

    } else {
      url = `${process.env.VUE_APP_BACKEND_URL}/datasets/search`
    }


    const params = { limit: 20, offset:0, q: q }
    //url += `?limit=${params.limit}&offset=${params.offset}`

    const res = await axios.get(url, { params })
    this.datasets = res.data
      //.then(data => data.json())
      //.then(data => {
      //  this.datasets = data
      //}).catch(err => console.log({err}))
  }
}
</script>

<style>
.search-bar {
  width: 80%;
  margin-bottom: 1rem;
  border-radius: 0.4rem;
  border-color: white
}
</style>

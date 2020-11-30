<template>
  <input type="text" v-model="q" placeholder="Procure datasets brasileiros" class="search-bar"/>
  <DatasetListing :datasets="datasets" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"
import DatasetListing from "@/views/DatasetListing.vue"

@Options({
  components: {
    DatasetListing
  },
  props: {
    category: {
      type: String,
      required: false
    }
  },
  watch: {
    'q': {
      handler: 'onPropertyChanged',
      immediate: false,
      deep: true
    }
  }
})
export default class Listing extends Vue {
  datasets = null
  q = null
  category?: string

  onPropertyChanged(value: any) {
    this.q = value
    this.fetchDatasets()
  }

  async mounted() {
    const debounce = require('debounce')
    await this.fetchDatasets()
    this.fetchDatasets = debounce(this.fetchDatasets, 1000)
  }

  async fetchDatasets() {
    const axios = require('axios')

    let url = ''
    if(this.q === null) {
      url = `${process.env.VUE_APP_BACKEND_URL}/datasets`
      console.log(url)

      if (this.$route.params.filterOption) {
        url += `/${this.category}/${this.$route.params.filterOption}`
      }
    } else {
      url = `${process.env.VUE_APP_BACKEND_URL}/datasets/search`
    }


    const params = { limit: 20, offset:0, q: this.q }
    //url += `?limit=${params.limit}&offset=${params.offset}`

    const res = await axios.get(url, { params })
    console.log(res.data)
    this.datasets = res.data
      //.then(data => data.json())
      //.then(data => {
      //  this.datasets = data
      //}).catch(err => console.log({err}))
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
  margin-top: 3rem;
}

.search-bar {
  width: 80%;
  margin-bottom: 1rem;
  border-radius: 0.4rem;
  border-color: white
}
</style>

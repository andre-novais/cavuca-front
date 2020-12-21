<template>
  <div class="section relevant-organizations">
    <h2>Entidades relacionadas :</h2>
    <span
      class="organization"
      v-for="organization in relevantOrganizations()"
      :key="organization"
      v-on:click="searchOrg(organization)"
    >
      {{ organization.slice(0, 44) }}
    </span>
  </div>
  <Tags :tags="relevantTags()"/>
  <div class="section ads" v-if="hasAds">
    ta
  </div>
</template>

<script lang="ts">

import { DatasetDto } from "@/typings/datasetDto"
import { Options, Vue } from "vue-class-component"
import Tags from "@/components/Tags.vue"

@Options({
  components: {
    Tags
  },
  props: {
    datasets: Array
  }
})
export default class Header extends Vue {
  datasets!: DatasetDto[]
  hasAds = process.env.ADSENCE_ACTIVE


  relevantOrganizations() {
    const organizations = this.datasets!.map(dataset => dataset.organization!.name)

    return this.findRelevant(organizations, 6)
  }

  relevantTags() {
    let tags: string[] = []

    for (const dataset of this.datasets) {
      tags = tags.concat(dataset.tags)
    }

    return this.findRelevant(tags, 9)
  }

  findRelevant(arr: string[], sampleSize: number): string[] {
    arr.sort()

    let prev = ''
    const uniqueFreqArray: [string, number][] = []

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        uniqueFreqArray[uniqueFreqArray.length] = [arr[i], 1]
        prev = arr[i]
      } else {
        uniqueFreqArray[uniqueFreqArray.length - 1][1]++
      }
    }

    uniqueFreqArray.sort((prev, uniqueFreq) => prev[1] < uniqueFreq[1] ? 1 : -1)

    const relevant = uniqueFreqArray
      .slice(0, sampleSize)
      .map(uniqueFreq => uniqueFreq[0])

    return relevant
  }

  searchOrg(organization: string): void {
    this.$router.push('/dados/organizacoes/' + organization)
  }

  searchTag(tag: string): void {
    this.$router.push('/dados/tags/' + tag)
  }
}
</script>

<style scoped>
  .section {
    background-color: white;
    margin-top: 16px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
    margin-top: 16px;
    border-radius: 5px;
    padding: 8px;
  }
  h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
  }
  .relevant-organizations {
    max-height: 219px;
    overflow: hidden;
  }
  span {
    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    background-color: rgba(66,2,61,1);
    width: fit-content;
    max-width: 191px;
    padding: 0 8px 0 8px;
    display: flex;
    align-items: center;
    float: left;
    border-radius: 16px;
    cursor: pointer;
    border: 1px solid rgba(0,0,0,1)
  }
  .organization {
    height: 49px;
    margin-right: 16px;
    margin-bottom: 16px;
  }
</style>

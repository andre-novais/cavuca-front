<template>
  <input v-if="category == 'organizations'" type="text" v-model="q" placeholder="Filtre organizações" class="search-bar"/>
  <div class="sections">
    <a
      class="section "
      v-bind:href="'/datasets/' + category + '/' + section"
      v-for="section in displayedSections" :key="section"
    >
      <div class="qqq">
        <p class="section-text">{{ section }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
//const _ = require('lodash')

@Options({
  props: {
    sections: Array,
    category: String
  },
  watch: {
    'q': {
      handler: 'onPropertyChanged',
      immediate: false,
      deep: true
    }
  }
})
export default class SectionListing extends Vue {
  sections!: string[]
  category!: string
  q = null

  displayedSections = this.sections//_.sampleSize(this.sections, 20)

  onPropertyChanged(value: any) {
    if (value == '') {
      this.displayedSections = this.sections
    } else {
      this.displayedSections = this.sections.filter(section => {
        return section.toLowerCase().includes(value.toLowerCase())
      })
    }

  }
}
</script>

<style scoped>
.sections {
}
.section {
  display: inline-block;
  height: 7rem;
  width: 16rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  background-color: rgba(41, 136, 84, 0.575);
  border-radius: 0.5rem;
  text-align: center;
  vertical-align: middle;
  line-height: 7rem;
  text-decoration: none;
}
.section-text {
  font-size: 1.2rem;
  text-decoration: none;
  color:black;
  line-height: 1.5rem;
  vertical-align: middle;
}
.qqq {
  padding-top: 0.5rem;
  height: 50%;
}
</style>

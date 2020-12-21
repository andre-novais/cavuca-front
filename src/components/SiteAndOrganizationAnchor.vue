<template>
  <div class="organization">
    <i class="fas fa-user fa-xs"></i>
    <h3>
      <h3 v-on:click="searchSite()">{{ site }}</h3>
      /
      <h3 v-on:click="searchOrg()"> {{ organization }} </h3>
    </h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    site: String,
    organization: String
  }
})
export default class SiteAndOrganizationAnchor extends Vue {
  site!: string
  organization!: string

  searchSite(): void {
    this.$router.push('/dados/sites/' + this.site)
  }
  searchOrg(): void {
    this.$router.push('/dados/organizacoes/' + this.organization)
  }
}
</script>

<style scoped>
* {
  display: inline-block;
  white-space: nowrap;
  color: rgba(0,0,0,0.80);
}
h3 {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  cursor: pointer;
}
i {
  position: relative;
  top: -2px;
  margin-right: 2px;
}
</style>

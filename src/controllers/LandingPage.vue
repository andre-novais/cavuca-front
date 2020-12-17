<template>
  <LandingPage />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import LandingPage from '@/views/LandingPage.vue'

@Options({
  components: {
    LandingPage
  }
})
export default class LandingPageController extends Vue{}
</script>

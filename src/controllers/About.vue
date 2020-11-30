<template>
  <About />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import About from '@/views/About.vue'

@Options({
  components: {
    About
  }
})
export default class AboutController extends Vue{}
</script>

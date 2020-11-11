<template>
  <a
    v-bind:href="'/datasets/' + category + '/' + section"
    v-for="section in sections"
    :key="section"
  >
    {{ section }}
    <br />
  </a>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    sections: Array,
    category: String
  }
})
export default class SectionListing extends Vue {
  sections!: string[];
  category!: string;
}
</script>

<style scoped></style>

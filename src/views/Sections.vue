<template>
  <SectionListing :sections="sections" :category="category" :key="sections" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Options, Vue } from "vue-class-component";
import SectionListing from "@/components/SectionListing.vue";
import { Watch } from "vue-property-decorator";

@Options({
  components: {
    SectionListing
  },
  props: {
    category: {
      type: String,
      required: true
    }
  }
})
export default class Sections extends Vue {
  sections = null;
  category!: string;

  mounted() {
    this.fetchSections();
  }

  fetchSections() {
    const url = `http://localhost:3000/datasets/${this.category}`;

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.sections = data;
      });
  }

  @Watch("category")
  onCategoryChange() {
    this.fetchSections();
  }
}
</script>

<style scoped></style>

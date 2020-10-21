<template>
  <a v-bind:href="'/datasets/' + dataset._id" class="dataset-name">
    {{ dataset.name }}
  </a>
  <p class="dataset-description">{{ dataset.description }}</p>
  <Tags :tags="dataset.tags" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Options, Vue } from "vue-class-component";
import Tags from "@/components/Tags.vue";

@Options({
  components: {
    Tags
  },
  props: {
    dataset: Object
  }
})
export default class DatasetListing extends Vue {
  datasets!: Record<string, any>;
}
</script>

<style scoped>
.dataset-name {
  font-size: 16px;
}

.dataset-description {
  font-size: 13px;
}
</style>

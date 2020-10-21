<template>
  <div class="container">
    <div class="row" v-for="dataset in datasets" :key="dataset.name">
      <a v-bind:href="'/datasets/' + dataset._id" class="dataset-name">
        {{ dataset.name }}
      </a>
      <p class="dataset-description">{{ dataset.description }}</p>
      <Tags :tags="dataset.tags" />
    </div>
  </div>
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
    datasets: Array
  }
})
export default class DatasetListing extends Vue {
  datasets!: Record<string, any>[];

  mounted() {
    console.log("######################", typeof this.datasets);
  }
}
</script>

<style scoped>
.dataset-name {
  font-size: 16px;
}

.dataset-description {
  font-size: 13px;
}

.dataset-tag {
  font-size: 12px;
}
</style>

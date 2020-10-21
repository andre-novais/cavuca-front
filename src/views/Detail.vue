<template>
  <Dataset :dataset="dataset" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Options, Vue } from "vue-class-component";
import Dataset from "@/components/Dataset.vue";

@Options({
  components: {
    Dataset
  }
})
export default class Detail extends Vue {
  dataset = null;

  mounted() {
    this.fetchDataset();
  }

  fetchDataset() {
    fetch(`http://localhost:3000/datasets/${this.$route.params.dataset_id}`)
      .then(data => data.json())
      .then(dataset => (this.dataset = dataset));
  }
}
</script>

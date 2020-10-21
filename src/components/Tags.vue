<template>
  <div class="container">
    <div class="row">
      <div class="col-sm col-sm-offset-2">
        <div class="btn btn-primary dataset-tag" v-for="tag in tags" :key="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    tags: Array
  }
})
export default class Tags extends Vue {
  tags!: string[];
}
</script>

<style scoped>
.dataset-tag {
  font-size: 12px;
}
</style>

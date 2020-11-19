<template>
  <div class="dataset-tags">
    <a class="dataset-tag" v-bind:href="'/datasets/tags/' + tag" v-for="tag in tags" :key="tag">
      {{ tag }}
    </a>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    tags: Array
  }
})
export default class Tags extends Vue {
  tags!: string[]
}
</script>

<style scoped>
.dataset-tags {
  text-align: start;
  white-space: pre-line;
  overflow-wrap: break-word;
}
.dataset-tag {
  white-space: nowrap;
  font-size: 0.7rem;
  padding: 0.1rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.2rem;
  text-decoration: none;
  background-color: rgba(41, 136, 84, 0.575);
  border-radius: 0.4rem;
  color:rgb(255, 255, 255);
}
</style>

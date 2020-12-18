<template>
  <div class="section relevant-tags">
    <h2>Tags relevantes:</h2>
    <span
      class="tag"
      v-for="tag in tags"
      :key="tag"
      v-on:click="searchTag(tag)"
    >
      {{ tag.slice(0, 49) }}
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    tags: Array
  }
})
export default class Tags extends Vue {
  tags!: string[]

  searchTag(tag: string): void {
    this.$router.push('/dados/tags/' + tag)
  }
}
</script>

<style scoped>
  h2 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
  }
  span {
    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    background-color: rgba(66,2,61,1);
    width: fit-content;
    max-width: 300px;
    padding: 0 8px 0 8px;
    display: flex;
    align-items: center;
    float: left;
    border-radius: 16px;
    height: 24px;
    margin-right: 8px;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  div {
    max-height: 219px;
    overflow: hidden;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
    background-color: white;
    padding: 8px;
    border-radius: 5px;
    margin-top: 16px;
  }
</style>

<template>
  <input type="text" placeholder="Procure"/>
  <i class="fas fa-search fa-lg"></i>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component"

export default class SearchBar extends Vue {}
</script>

<style scoped>
  input {
    border-radius: 16px;
    height: 36px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
    position: relative;
    float: left;
    top: 35px;
    left: 36px;
    box-sizing: border-box;
    width: calc(100% - 243px);
  }
  i {
    position: relative;
    top: 42px;
    right: 10px;
    color: rgba(0,0,0,0.80)
  }
</style>

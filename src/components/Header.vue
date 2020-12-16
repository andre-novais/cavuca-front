
<template>
  <div class="header-body">
    <h1 class="site-name">Cavuca</h1>
    <input class="search-bar" type="text" placeholder="Procure"/>
    <i class="fas fa-search fa-lg icon"></i>
  </div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component"

@Options({

})
export default class Header extends Vue {
}
</script>

<style scoped>
  .header-body{
    background-color: #2B481F;
    height: 88px;
    white-space: nowrap;
    vertical-align: middle;
  }

  .site-name{
    color: white;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    left: 16px;
    float:left;
  }
  .search-bar{
    border-radius: 16px;
    height: 36px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
    position: relative;
    float: left;
    margin-top: 27px;
    margin-left: 36px;
    box-sizing: border-box;
    width: calc(100% - 243px);
  }
  .icon{
    position: absolute;
    top: 38px;
    right: 22px;
    color: rgba(0,0,0,0.80)
  }
</style>

<template>
  <div class="header-body">
    <a href="/pesquisa">Cavuca</a>
    <input type="text" v-model="q" placeholder="Procure" v-on:keyup.enter="search()"/>
    <i v-on:click="search()" class="fas fa-search fa-lg"></i>
  </div>
</template>

<script lang="ts">

import { Vue } from "vue-class-component"

export default class Header extends Vue {
  q=null

  search() {
    if(this.q) {
      this.$router.push("/pesquisa?q="+this.q)
    } else {
      this.$router.push("/pesquisa")
    }
  }
}
</script>

<style scoped>
  .header-body{
    background-color: #2B481F;
    height: 88px;
    white-space: nowrap;
    vertical-align: middle;
  }

  a {
    color: white;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    position: relative;
    left: 16px;
    float:left;
    text-decoration: none;
    height: 88px;
  }

  a:hover {
    color: white;
  }

  input {
    border-radius: 16px;
    height: 36px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
    position: relative;
    float: left;
    top: 24px;
    left: 36px;
    box-sizing: border-box;
    width: calc(100% - 243px);
  }
  input:focus{
    outline: none;
  }

  i {
    position: relative;
    top: 34px;
    right: 10px;
    color: rgba(0,0,0,0.80);
    cursor: pointer;
  }
</style>

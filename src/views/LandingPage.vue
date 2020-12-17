<template>
  <div>
    <h2>Cavuque dados públicos brasileiros</h2>
    <p>Procure datasets de orgãos governamentais de todo o Brasil.  Explore um hub que agrega dados
       de diversas fontes oficiais, criado para ajudar na divulgação de bases para a pesquisa brasileira</p>
  </div>
  <div>
    <div>
      <input class="search-bar" type="text" v-model="q" placeholder="Procure" v-on:keyup.enter="search()"/>
      <i class="fas fa-search fa-lg icon"></i>
    </div>
  </div>
  <div>
    <h2>O Cavuca é um hub de dados abertos</h2>
    <p>Normalmente nossos dados públicos estão separados entre união, estado e municipio.
      as aqui você podera navegar entre as mais diversas entidades governamentais</p>
    <div>
      <input class="search-bar" type="text" v-model="q" placeholder="Procure" v-on:keyup.enter="search()"/>
      <i class="fas fa-search fa-lg icon"></i>
    </div>
  </div>
  <div>
    <h2>Encontre a melhor base para sua pesquisa</h2>
    <p>Navegue entre os cunjuntos de dados e encontre datasets similares e complementares, explore
       um motor de busca criado para alavancar sua curiosidade.</p>
    <div>
      <input class="search-bar" type="text" v-model="q" placeholder="Procure" v-on:keyup.enter="search()"/>
      <i class="fas fa-search fa-lg icon"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
export default class LandingPage extends Vue{
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
  h2 {
    font-family: Noto Serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0em;
    margin-top: 32px;
  }

  p {
    width: 650px;
    font-family: Noto Serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0,0,0,0.80);
    margin-left: auto;
    margin-right: auto;
    margin-top: 26px;
  }

  .search-bar{
    border-radius: 16px;
    height: 36px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.25);
    position: relative;
    float: center;
    margin-top: 16px;
    margin-left: 36px;
    width: 480px;
  }
  .search-bar:focus{
    outline: none;
  }

  .icon{
    position: relative;
    top: 2px;
    right: 30px;
    color: rgba(0,0,0,0.80)
  }
</style>

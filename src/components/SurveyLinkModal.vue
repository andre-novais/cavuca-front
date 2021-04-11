<template>
  <div class="mask" v-if="visible">
    <div class="wrapper">
      <div class="modal-container">
        Obrigado por usar o Cavuca! <br><br>
        Você poderia no ajudar a melhorar o site respondendo esse <a :href="surveyLink" target="_blank">questionário</a>?<br><br> 
        (menos de 5 minutos!) <br>
        <button v-on:click="visible=false">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({})
export default class SurveyLinkModal extends Vue {
  visible = true
  surveyLink = process.env.VUE_APP_SURVEY_LINK
}
</script>

<style scoped>
  .mask{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  .wrapper {
  display: table-cell;
  vertical-align: middle;
  }
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>

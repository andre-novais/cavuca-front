<template>
  <DatasetListing :datasets="datasets" />
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Options, Vue } from "vue-class-component";
import DatasetListing from "@/components/DatasetListing.vue";
import { Watch } from "vue-property-decorator";

@Options({
  components: {
    DatasetListing
  }
})
export default class Home extends Vue {
  datasets = null;

  mounted() {
    this.fetchDatasets();
  }

  fetchDatasets() {
    fetch("http://localhost:3000/datasets")
      .then(data => data.json())
      .then(data => {
        this.datasets = data;
        //console.log(data[0]);
      });
  }

  @Watch("datasets")
  onDataChange(dataset: any) {
    console.log("hey", dataset);
  }

  get myDatasets() {
    return [{"tags":["bilhetagem eletrônica","demanda","embarque","passageiros","sobe","transporte"],"resources":[{"name":"Metodologia para geração dos dados","description":"Metodologia utilizada para a extração e geração dos dados de estimativa de...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/675ded54-de66-4073-aa7c-47fd31be9bdb/download/metodologia-estimativa-de-embarques-por-ped.pdf","type":"pdf"},{"name":"Dicionário de Dados_Estimativa Embarque por Ponto","description":"Dicionário para a tabela de estimativa de embarque nos pontos de parada do...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/804c613f-6f30-4837-886d-a4b61e4f35b5/download/dicionario_tabela_embarque_por_ped_siu_sublinha_aaaammdd.csv","type":"csv"},{"name":"Estimativa de embarque - junho de 2019","description":"Tabela com a estimativa de embarque nos pontos de parada referente a junho de...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/5739960d-9c6d-47ae-ac0a-119670b7c2b6/download/embarque_por_ped-linha-sublinha_20190605.csv","type":"csv"},{"name":"Estimativa de embarque - julho de 2019","description":"Tabela com a estimativa de embarque nos pontos de parada referente a julho de...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/dce00898-d7a3-462b-8955-4c0f22e5404b/download/embarque_por_ped-linha-sublinha_20190703.csv","type":"csv"},{"name":"Estimativa de embarque - agosto de 2019","description":"Tabela com a estimativa de embarque nos pontos de parada referente a agosto...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/3ad89d42-366b-4fe4-a0e0-9cac9d86c9e9/download/embarque_por_ped-siu-sublinha_20190807.csv","type":"csv"},{"name":"Estimativa de embarque - setembro de 2019","description":"Tabela com a estimativa de embarque nos pontos de parada referente a setembro...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/f107cbe2-e642-4e96-805f-85978bd7e860/download/embarque_por_ped-siu-sublinha_20190904.csv","type":"csv"},{"name":"Estimativa de embarque - outubro de 2019","description":"Tabela com a estimativa de embarque nos pontos de parada referente a outubro...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/b8a18f1a-58f1-41b6-8fbe-40deb0957081/download/embarque_por_ped-siu-sublinha_20191002.csv","type":"csv"},{"name":"Estimativa de embarque - novembro de 2019","description":"Tabela com a estimativa de embarque nos pontos de parada referente a novembro...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/e0ea38af-c411-4c04-93b6-82d7ab43e314/download/embarque_por_ped-siu-sublinha_20191106-1.csv","type":"csv"},{"name":"Estimativa de embarque - dezembro de 2019","description":"Tabela com a estimativa de embarque nos pontos de parada referente a dezembro...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/95883464-aada-4a42-8b50-1a0887f19f11/download/embarque_por_ped-siu-sublinha_20191204.csv","type":"csv"},{"name":"Estimativa de embarque - janeiro de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a janeiro...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/532c664d-a4d4-4c6c-ba91-eb9bb6918952/download/embarque_por_ped-siu-sublinha_20200108.csv","type":"csv"},{"name":"Estimativa de embarque - fevereiro 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/586722ec-61d4-49d5-94b1-29fa050bc328/download/embarque_por_ped-siu-sublinha_20200205.csv","type":"csv"},{"name":"Estimativa de embarque - março 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a março 2020.","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/6f6bf245-a683-46d6-8a85-f44fe0f5173f/download/embarque_por_ped-siu-sublinha_20200304.csv","type":"csv"},{"name":"Estimativa de embarque - abril de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a abril de...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/1462fcd0-d509-4bd8-83fd-6ce754b04090/download/embarque_por_ped-siu-sublinha_20200401.csv","type":"csv"},{"name":"Estimativa de embarque - maio de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a maio de...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/5a5874eb-95a5-4d73-9541-d3030593208a/download/embarque_por_ped-siu-sublinha_20200506.csv","type":"csv"},{"name":"Estimativa de embarque - junho de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a junho de...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/b9e5b079-aae7-4529-b3d3-9f7b4439bf03/download/embarque_por_ped-siu-sublinha_20200603.csv","type":"csv"},{"name":"Estimativa de embarque - julho de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a julho de...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/03f246de-5d15-4491-b626-a8713404ba26/download/embarque_por_ped-siu-sublinha_20200701.csv","type":"csv"},{"name":"Estimativa de embarque - agosto de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a agosto...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/8c20ea6c-c783-4719-87bf-2f5585731c35/download/embarque_por_ped-siu-sublinha_20200805.csv","type":"csv"},{"name":"Estimativa de embarque - setembro de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a setembro...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/82d35e1d-a272-4b0d-a170-9c65175fe3df/download/embarque_por_ped-siu-sublinha_20200902.csv","type":"csv"},{"name":"Estimativa de embarque - outubro de 2020","description":"Tabela com a estimativa de embarque nos pontos de parada referente a outubro...","url":"https://ckan.pbh.gov.br/dataset/47aee907-77fd-4eec-9b77-1e4be9adbe4b/resource/81d34f73-4cb3-4cc1-b1a6-0eae3cb0b9bb/download/embarque_por_ped-siu-sublinha_20201007.csv","type":"csv"}],"groups":null,"_id":"5f8dd03143cf555dc63f5eae","name":"Estimativa_de_embarque_nos_pontos_de_parada_por_linha/sublinha_do_sistema_convencional_de_transporte_coletivo","description":"Estimativa de embarques de passageiros de um dia útil típico do mês vigente por ponto de parada de acordo com os dados da bilhetagem eletrônica.","organization":"Empresa de Transporte e Trânsito de Belo Horizonte","aditionalInfo":{"Fonte":"BHTRANS","Autor":"Marcelo Geraldo Batista","Responsável":"Marcelo Geraldo Batista","Última Atualização":"14 de Outubro de 2020, 18:03 (UTC-03:00)","Criado":"6 de Janeiro de 2020, 16:39 (UTC-03:00)"},"unique_name":"prefeitura_belo_horizonteEstimativa_de_embarque_nos_pontos_de_parada_por_linha/sublinha_do_sistema_con...","site_name":"prefeitura_belo_horizonte","__v":0}]
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div v-if="dataset !== null">
    <h2>{{ dataset.name }}</h2>
    <p>{{ dataset.description }}</p>
    <div class="container">
      <div class="row">
        <div class="col-sm col-sm-offset-2">
          <div
            class="btn btn-primary dataset-tag"
            v-for="tag in dataset.tags"
            :key="tag"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
    {{ dataset.groups }}
    {{ dataset.organization }}
    <table>
      <thead>
        <th>aditional info</th>
        <th>aditional info</th>
      </thead>
      <tbody>
        <tr v-for="(value, key) in dataset.aditionalInfo" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <h3>Arquivos</h3>
    <table>
      <thead>
        <th>nome</th>
        <th>formato</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="resource in dataset.resources" :key="resource.name">
          <td>{{ resource.name }}</td>
          <td>{{ resource.type }}</td>
          <td><a v-bind:href="resource.url">download</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { Vue } from "vue-class-component";

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

<template>
  <div v-if="dataset !== null">
    <h2>{{ dataset.name }}</h2>
    <p>{{ dataset.description }}</p>
    <Tags :tags="dataset.tags" />
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
import "bootstrap/dist/css/bootstrap.min.css"
import { Options, Vue } from "vue-class-component"
import Tags from "@/components/Tags.vue"

@Options({
  components: {
    Tags
  },
  props: {
    dataset: Object
  }
})
export default class Dataset extends Vue {
  dataset!: Record<string, unknown>
}
</script>

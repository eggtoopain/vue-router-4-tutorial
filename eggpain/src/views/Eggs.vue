<template>
  <div v-if="!dataEgg">
    <h1>查无此蛋</h1>
  </div>
  <div v-else>
    <h1>{{ dataEgg.name }}</h1>
    <p>{{ dataEgg.description }}</p>
    <p>{{ dataEgg.flavour }}</p>
    <img :src="`../../src/assets/images/${dataEgg.image}`">
  </div>
</template>

<script>
import dataEggs from '../data.json'
export default {
  computed: {
    eggType() {
      return this.$route.params.eggType
    },
    dataEgg() {
      return dataEggs.find(
        dataEgg => dataEgg.type === this.eggType
      )
    }
  }
}
</script>

<style scoped>
  img {
    width: 150px;
    height: 150px;
  }
</style>

<script>
export default {
  name: 'FoundCards',

  props: {
    filtred: Array,
  } 

}
</script>

<template>

    <div class="found-cards">
        <p>Carte trovate : {{ filtred.length }}</p>
    </div>
  
</template>

<style lang="scss">
.found-cards {
    color: $secondColor;
    font-weight: bold;
    font-size: 20px;
}
</style>
<script>
export default {
  name: 'AppCards',

  props: {
    feature: Object
  }
}
</script>

<template>

    <div class="card"> 

        <img :src="feature.card_images[0].image_url" :alt="feature.name">

        <h3>{{ feature.name }}</h3>

        <h4>{{ feature.type }}</h4>

        <h4>{{ feature.archetype }}</h4>

    </div>
  
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 5 - 20px);
    text-align: center;
    margin: 10px;
    padding: 10px;
    background-color: $secondColor;
    box-shadow: 0px 0px 16px 1px rgba(0,0,0,0.76);
    color: $colorText;
    img {
        width: 100%;
    }
    h3 {
        margin: 10px 0;
    }
    h4 {
        color: $mainColor;
        margin: 10px 0;
    }
}

</style>
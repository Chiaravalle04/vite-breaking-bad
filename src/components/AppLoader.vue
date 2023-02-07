<script>
export default {
  name: 'AppLoader',

  data() {
    return {
      logo: 'https://toyworldmag.co.uk/wp-content/uploads/2022/03/YU-GI-OH-LOGO-copy-1024x418.png',
    }
  }

}
</script>

<template>

    <div id="loader">
        <img :src="logo" alt="Yu-Gi-Oh Logo">
        <div class="circle"></div>
    </div>
  
</template>

<style lang="scss">
#loader {
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 30%;
    }
    .circle {
        border: 6px solid $secondColor;
        border-top: 6px solid transparent;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
}
</style>
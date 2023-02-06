<script>
export default {
  name: 'AppHeader',

  data() {
    return {
        logo: 'https://toyworldmag.co.uk/wp-content/uploads/2022/03/YU-GI-OH-LOGO-copy-1024x418.png',
    }
  }
}
</script>

<template>

    <header>

        <div class="general-container">
    
            <div class="title d-flex ai-center">
    
                <img :src="logo" alt="Yu-Gi-Oh Logo">
    
                <h1>Yu-Gi-Oh API</h1>
    
            </div>
    
        </div>

    </header>

  
</template>

<style lang="scss" scoped>
header {
    background-color: $mainColor;
    .title {
    height: 80px;
        img {
            width: 10%;
        }
        h1 {
            color: $secondColor;
            margin-left: 20px;
        }
    }
}

</style>
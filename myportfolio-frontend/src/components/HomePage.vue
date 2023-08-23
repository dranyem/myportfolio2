<template>
  <v-container class="fill-height">
    <v-row no-gutters>
      <v-col cols="12" class="pa-3 text-h4 text-uppercase text-center">Hello, I'm</v-col>
      <v-col cols="12" class="pName pa-5 text-h2 text-uppercase text-center">Meynard David</v-col>
      <v-col cols="12" class="pa-3 text-h5 text-uppercase text-center">Full Stack Web Developer</v-col>
      <v-col cols="12" class="text-center">
        <v-btn variant="outlined" size="x-large" class="ma-3">
            <router-link to="/aboutme" class="text-decoration-none text-white text-h6 text-uppercase">
              About Me
            </router-link>
        </v-btn>
        <v-btn variant="outlined" size="x-large" class="ma-3">
            <router-link to="/projects" class="text-decoration-none text-white text-h6 text-uppercase text-center">
              Projects
            </router-link>
        </v-btn>
        <Links></Links>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Links from "../components/Links.vue"

  export default{
    components:{
      Links
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap');
  .pName {
    font-family:  'Space Grotesk', sans-serif !important;
  }
</style>

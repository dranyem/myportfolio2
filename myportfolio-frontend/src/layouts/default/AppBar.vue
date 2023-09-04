<template>
  <v-app-bar flat class="bg-blue-grey-darken-2 text-white">

    <v-app-bar-nav-icon @click="this.drawer = !drawer"></v-app-bar-nav-icon>
    
    
    <v-app-bar-title class="text-uppercase">
      <v-btn variant="text" size="x-large">
            <router-link to="/" class="text-decoration-none text-white text-h6 text-uppercase">
              My Portfolio
            </router-link>
        </v-btn>
    </v-app-bar-title>
    
    <!-- <v-btn  @click="this.$router.push('/login')" prepend-icon="mdi-login" class="text-white">Login</v-btn> -->
    <!-- <v-btn v-else @click=logout  prepend-icon="mdi-logout" class="text-white">Logout</v-btn> -->
  
  </v-app-bar>
  <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
        class="d-flex align-center bg-blue-grey-darken-2 text-white"
      >
      <v-container fluid class="text-h6 text-uppercase">
        <v-btn block variant="text" size="x-large">
            <router-link to="/" class="text-decoration-none text-white text-h6 text-uppercase">
              Home
            </router-link>
        </v-btn>

        <v-btn block variant="text" size="x-large">
            <router-link to="/aboutme" class="text-decoration-none text-white text-h6 text-uppercase">
              About Me
            </router-link>
        </v-btn>

        <v-btn block variant="text" size="x-large">
            <router-link to="/projects" class="text-decoration-none text-white text-h6 text-uppercase text-center">
              Projects
            </router-link>
        </v-btn>

        <Links></Links>
    
      </v-container>
      </v-navigation-drawer>
</template>

<script>
import Links from "../../components/Links.vue"
export default {
  components:{
    Links
  },
  data (){
    return{
      drawer:false
    }
  },
  methods:{
    logout(){
      localStorage.removeItem("token")
      this.$router.push("/login")
    },
  }
}
  //
</script>

<template>
    <v-container class="fill-height">
        <v-row no-gutters>
        <v-col cols="3">
            <v-img class="ma-3" src="../assets/myimage.jpg" />
        </v-col>
        <v-col cols="v-col-auto" align-self="center">
            <p class="text-body-1">Hey there!</p>
            <p>
                My name is
                <strong style="font-family: Space Grotesk">Meynard David</strong>, and I am
                a developer based in Calgary, AB. I finished a Full Stack Web
                Development program from InnoTech College and ICT Major in Software Development from SAIT. I am actively looking for
                a position in this field.
            </p>
            <br>
            <p class="text-body-1">
                I love solving problems. Whether it’s finding the most elegant way to
                write a line of code or figuring out the most efficient way to
                implement something, I love the challenge of finding a way and
                discovering solutions.
            </p>
            <br>
            <p class="text-body-1">Check out my projects and links below for more information</p>
            
            <v-row no-gutters>
                <v-col><v-btn variant="outlined" class="ma-3">
                <router-link to="/projects" class="text-decoration-none text-white text-h6 text-uppercase text-center">
                Projects
                </router-link>
                </v-btn></v-col>
            </v-row>
            <v-row no-gutters>
                <v-col> <Links></Links></v-col>
            </v-row>
            
           
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

</style>
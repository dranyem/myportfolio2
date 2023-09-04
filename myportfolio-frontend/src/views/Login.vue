<template>
<v-container class="fill-height">

    <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="bg-blue-grey-darken-1 pa-4 text-center mx-auto ">
        <v-form @submit.prevent="login" method="post">
            <v-container class="fill-height">
                <v-row no-gutters>
                    <v-col cols="12"><v-text-field v-model="username" label="Username" name="username"></v-text-field></v-col>
                     <v-col cols="12"><v-text-field v-model="password" label="Password" name="password" type="password"></v-text-field></v-col>
                     <v-col  v-if="message!==''"><p class="text-red bg-blue-grey-lighten-4 ma-2 pa-2">{{ message }}</p></v-col>
                     <v-col cols="12"><v-btn type="submit" variant="outlined" text="Login"  ></v-btn></v-col>
                </v-row>
                 
            </v-container>
        </v-form>
    </v-sheet>
</v-container>

</template>

<script>
import axios from "axios"

export default {
    beforeMount(){
        const loginToken = localStorage.getItem("token")

        if(loginToken!= null){
            this.$router.push("/dashboard")
        }
    },
    data(){
        return{
            username:"",
            password:"",
            message:""
        }
    },
    methods: {
        async login(){
            try{
               const response = await axios.post("https://api.meynarddavid.me/user/login",{username:this.username,password:this.password})
               localStorage.setItem("token",response.data.token)
               this.$router.push("/dashboard")
            } catch(err){
                this.message = err.response.data.message
            }
        }
    }
}
</script>
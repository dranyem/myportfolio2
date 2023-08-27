<template>
    
    <v-card variant="outlined" width="330" class="bg-blue-grey-lighten-1 text-white ma-3 rounded">
        <v-img :src="projectImage" height="230px" cover></v-img>
        <v-card-title class="text-uppercase">{{ projectTitle }}</v-card-title>
        <v-card-subtitle>{{ projectShortDesc }}</v-card-subtitle>
        <v-card-actions class="justify-center">
            <v-btn @click="dialog=true" variant="outlined">More Details</v-btn>
            <v-dialog
      v-model="dialog"
      width="1024"
    >
      <v-card class="text-white text-center bg-blue-grey-darken-2">
        <v-card-title class="text-uppercase" >{{ projectTitle }}</v-card-title>
        <v-card-text>
            <v-container>
                <v-row no-gutters>
                    <v-col cols="3">
                        <p class="text-caption text-uppercase">Language, Framework and other Technology used</p>
                        <v-chip v-for="tech in projectTechUsed" class="ma-1">{{ tech }}</v-chip>
                    </v-col>
                    <v-col cols="9">
                        <p class="text-body-1 ma-1">{{ projectLongDesc }}</p>
                        <v-btn class="ma-2"><a class="text-decoration-none" :href=projectGithubLink target="_blank">source code</a></v-btn>
                        <v-btn v-if="projectLiveViewLink!=''" class="ma-2"><a class="text-decoration-none" :href=projectLiveViewLink target="_blank">Live View</a></v-btn>
                        <v-btn flat variant="text" v-else class="ma-2" disabled><a class="text-decoration-none text-white" :href=projectGithubLink target="_blank">No Live View</a></v-btn>
                    </v-col>
                </v-row>
                
                
                <v-carousel>
                    <v-carousel-item
                        v-for="images in projectImageList"
                        :src=images       
                    ></v-carousel-item>
                </v-carousel>
                
            </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="white" block @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-card-actions>

    </v-card>

</template>

<script>
export default {
    props:{
        projectId: Number,
        projectImage: String,
        projectTitle: String,
        projectShortDesc: String,
        projectLongDesc: String,
        projectTechUsed: Array,
        projectImageList: Array,
        projectGithubLink: String,
        projectLiveViewLink: String,
    },
    data(){
        return{
            dialog: false
        }
    }

}
</script>
<template>
   <v-container fluid >
    <v-btn prepend-icon="mdi-plus" theme="dark" block>
        Add new project
        <v-dialog
        v-model="dialog"
        activator="parent"
         >
            <v-card>
            <v-card-text>
                <v-form @submit.prevent method="post" enctype="multipart/form-data">
                    <v-container>
                        <v-row >
                            <v-col cols="12" sm="6">
                                <v-text-field label="Project Title" v-model="form.projectTitle"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Project Short Description"  v-model="form.projectShortDesc"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Project Long Description" v-model="form.projectLongDesc"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Language, Framework and Libraries used" v-model="projectTechUsedString"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Github Link" v-model="form.projectGithubLink"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field label="Live View Link"  v-model="form.projectLiveViewLink"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-file-input label="Primary Image" name="projectImage"  v-model="form.projectImage"></v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-file-input label="Project Gallery" name="projectImageList"  v-model="form.projectImageList" multiple></v-file-input>
                            </v-col>
                        </v-row>
                    </v-container>

                </v-form>
                <!-- {{ form }} -->
            </v-card-text>
            <v-card-actions class="justify-space-evenly">
                <v-btn prepend-icon="mdi-content-save" color="success" @click="addProject">Add Project</v-btn>
                <v-btn prepend-icon="mdi-cancel" color="error" @click="dialog = false">Cancel</v-btn>
            </v-card-actions>
            </v-card>
      </v-dialog>

    </v-btn>
    <v-divider thickness="5" class="text-white"></v-divider>
    <v-table fixed-header theme="dark">
    <thead>
      <tr>
        <th class="text-left">
          Project Title
        </th>
        <th class="text-left">
          Actions
        </th>
        </tr>    
    </thead>
    <tbody>
        <tr v-for="project in this.projectList">
            <td>{{ project.projectTitle }}</td>
            <td>
                <v-btn icon="mdi-eye"></v-btn>
                <v-btn icon="mdi-pencil"></v-btn>
                <v-btn icon="mdi-trash-can"></v-btn>

            </td>
        </tr>
    </tbody>
  </v-table>
  {{ message }}
   </v-container>
</template>



<script>
import axios from "axios"
export default{
    beforeCreate(){
        const logintoken = localStorage.getItem("token")

        if(logintoken==null){
            this.$router.push("/login")
        }
        
    },
    data(){
    return {
        projectList:[],
        dialog: false,
        form:{
            projectTitle:"",
            projectShortDesc: "",
            projectLongDesc: "",
            projectTechUsed: [],
            projectGithubLink: "",
            projectLiveViewLink: "",
            projectImage: [],
            projectImageList: []
        },
        projectTechUsedString:"",
        token: localStorage.getItem("token"),
        message:""
    }
    },
    async mounted(){
        const response = await axios("https://api.meynarddavid.me/projects")
        this.projectList = response.data
    },
    methods:{
        async addProject(){
            this.form.projectTechUsed = [... this.projectTechUsedString.split(",")]

            const formData = new FormData()
 
            formData.append("projectTitle", this.form.projectTitle)
            formData.append("projectShortDesc", this.form.projectShortDesc)
            formData.append("projectLongDesc", this.form.projectLongDesc)
            formData.append("projectTechUsed", this.form.projectTechUsed)
            formData.append("projectGithubLink", this.form.projectGithubLink)
            formData.append("projectLiveViewLink", this.form.projectLiveViewLink)
            formData.append("projectImage", this.form.projectImage[0])
            this.form.projectImageList.forEach(imageFile => {
                formData.append("projectImageList", imageFile,imageFile.name)
            })
            
            
            try {
             const response = await axios.post("https://api.meynarddavid.me/projects", 
                                                formData, 
                                                {headers: {'Authorization': `Bearer ${this.token}`, 'Content-Type': 'multipart/form-data'}}) 

            this.message = response.data.message
            this.dialog = !this.dialog
            this.$router.go(0)
            
            } catch (error) {
                console.log(error.stack)
            }
        }
    },
}
</script>
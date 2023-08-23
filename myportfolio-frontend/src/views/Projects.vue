<template>
    <v-container fluid class="fill-height justify-space-around">
        
        <Project v-for="project in projectList"
        :projectId=parseInt(project.projectId)
        :projectImage=project.projectImage
        :projectTitle=project.projectTitle
        :projectShortDesc=project.projectShortDesc
        :projectLongDesc=project.projectLongDesc
        :projectTechUsed=project.projectTechUsed
        :projectImageList=project.projectImageList
        :projectGithubLink=project.projectGithubLink
        v-bind:projectLiveViewLink=project.projectLiveViewLink
        ></Project>

        

        <p class="text-h5 text-uppercase">More projects to come!</p>

    </v-container>
    
</template>

<script>
import Project from "@/components/Project.vue"
import ProjectList from "@/projectList.json"
export default {
    components: {
        Project
    },
    data(){
        return {
            projectList: ProjectList
        }
    }

}
</script>
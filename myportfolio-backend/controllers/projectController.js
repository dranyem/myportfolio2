const asyncHandler = require("express-async-handler")
const Project = require("../models/projectModel")
const fs = require("fs")

// @desc Get projects
// @route GET /projects
// @acess public
const getProjects = asyncHandler(async (req,res) => {
    const projects = await Project.find()
    
    
    res.json(projects)
})

// @desc post projects
// @route POST /projects
// @acess private
const postProject = asyncHandler(async (req,res) => {
    if(!req.body){
        res.status(400)
        throw new Error('please complete fields')
    }

    const project = await Project.create({
        projectTitle: req.body.projectTitle,
        projectShortDesc: req.body.projectShortDesc,
        projectLongDesc: req.body.projectLongDesc,
        projectTechUsed: req.body.projectTechUsed,
        projectGithubLink: req.body.projectGithubLink,
        projectLiveViewLink: req.body.projectLiveViewLink,
        projectImage: req.files["projectImage"][0].path,
        projectImageList: req.files["projectImageList"].map(img => {return img.path})

    })
    res.status(200)
    res.json({message:"Project Added Successfully"})
})

// @desc update projects
// @route PUT /projects/:id
// @acess private
const updateProject = asyncHandler(async (req,res) => {

    await Project.findByIdAndUpdate(req.params.id,{
            projectTitle: req.body.projectTitle,
            projectShortDesc: req.body.projectShortDesc,
            projectLongDesc: req.body.projectLongDesc,
            projectTechUsed: req.body.projectTechUsed,
            projectGithubLink: req.body.projectGithubLink,
            projectLiveViewLink: req.body.projectLiveViewLink,
            projectImage: req.files["projectImage"][0].path,
            projectImageList: req.files["projectImageList"].map(img => {return img.path})       
    })

    res.status(200)
    res.json(await Project.findById(req.params.id))
})

// @desc delete project
// @route DELETE /projects/:id
// @acess public
const deleteProject = asyncHandler(async (req,res) => {
    
    //grab data from id
    const proj = await Project.findById(req.params.id)
    //store the image locations
    const delProjImage = proj.projectImage
    const delProjImageList = proj.projectImageList

    try{
        delProjImageList.forEach(element => {
            fs.unlinkSync(element)
        });
        fs.unlinkSync(delProjImage)
        console.log("files deleted")
    } catch (err) {
        console.log(err)
    }
    

    const project = await Project.findByIdAndRemove(req.params.id)

    res.json(project)
})

module.exports = {
    getProjects,
    postProject,
    updateProject,
    deleteProject
}
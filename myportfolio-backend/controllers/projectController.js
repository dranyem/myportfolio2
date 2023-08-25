
// @desc Get projects
// @route GET /projects
// @acess public
const getProjects = (req,res) => {
    res.json({message: " get projects"})
}

// @desc post projects
// @route POST /projects
// @acess private
const postProject = (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please complete fields')
    }

    res.json({message: " set projects"})
}

// @desc update projects
// @route PUT /projects/:id
// @acess private
const updateProject = (req,res) => {
    res.json({message: "update projects " +req.params.id})
}

// @desc delete project
// @route DELETE /projects/:id
// @acess public
const deleteProject = (req,res) => {
    res.json({message: "delete project " +req.params.id})
}

module.exports = {
    getProjects,
    postProject,
    updateProject,
    deleteProject
}
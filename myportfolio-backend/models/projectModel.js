const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    projectTitle: {
        type: String,
        required: true
    },
    projectShortDesc: {
        type: String,
        required: true
    },
    projectLongDesc: {
        type: String,
        required: true
    },
    projectTechUsed: {
        type: Array,
        required: true
    },
    projectGithubLink: {
        type: String,
    },
    projectLiveViewLink: {
        type: String,
    },
    projectImage: {
        type: String,
    },
    projectImageList: {
        type: Array,
    },

})

module.exports = mongoose.model("Project",projectSchema)
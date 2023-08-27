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
        type: [String],
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
        type: [String],
    },

})

module.exports = mongoose.model("Project",projectSchema)
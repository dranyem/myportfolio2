const express = require("express")
const router = express.Router()
const { getProjects, postProject, updateProject, deleteProject } = require("../controllers/projectController")
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },

    filename: (req, file, cb) => {
        const ext = (file.mimetype.split("/"))[1]
        cb(null, Date.now()+"."+ext)
    }
})

const upload = multer({storage})

const projectImg = upload.fields([{name: "projectImage", maxCount:1},{name:"projectImageList", maxCount:10}])


//clean up code for below codes
// router.route("/").get(getProjects).post(postProject)
// router.route("/:id").put(updateProject).delete(deleteProject)

router.get("/", getProjects)

router.post("/", projectImg, postProject)

router.put("/:id", updateProject)

router.delete("/:id", deleteProject)

module.exports = router
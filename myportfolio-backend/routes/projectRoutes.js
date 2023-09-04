const express = require("express")
const router = express.Router()
const { getProjects, postProject, updateProject, deleteProject } = require("../controllers/projectController")
const multer = require("multer")
const {protect} = require("../middleware/authMiddleware")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },

    filename: (req, file, cb) => {
        cb(null, Date.now()+"-"+file.originalname)
    }
})

const upload = multer({storage})

const projectImg = upload.fields([{name: "projectImage", maxCount:1},{name:"projectImageList", maxCount:10}])


//clean up code for below codes
// router.route("/").get(getProjects).post(postProject)
// router.route("/:id").put(updateProject).delete(deleteProject)

router.get("/", getProjects)

router.post("/",protect, projectImg, postProject)

router.put("/:id",protect, projectImg, updateProject)

router.delete("/:id",protect, deleteProject)

module.exports = router
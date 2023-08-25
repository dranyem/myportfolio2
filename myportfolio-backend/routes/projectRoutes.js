const express = require("express")
const router = express.Router()
const { getProjects, postProject, updateProject, deleteProject } = require("../controllers/projectController")


//clean up code for below codes
// router.route("/").get(getProjects).post(postProject)
// router.route("/:id").put(updateProject).delete(deleteProject)

router.get("/", getProjects)

router.post("/", postProject)

router.put("/:id", updateProject)

router.delete("/:id", deleteProject)

module.exports = router
const Router = require("express").Router()
const { deleteProjectById } = require("../../../processors")
async function deleteProject(req,res){
    try {
        const { entityId } = req.context
        await deleteProjectById({ entityId,id:req.body.id })
        res.sendData({ data: "successful" })
    } catch (error) {
        res.sendData({ error: "Something went wrong." }, 400); 
    }
}
Router.delete("",deleteProject)
module.exports = Router
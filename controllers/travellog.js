const Travellog = require("../models/travellog")
const { Router } = require("express")


/////
//Create my router
/////

const router = Router()

//////
//Routes
//////

//INDEX
router.get("/", async (req,res) => {
    res.json(await Travellog.find({}).catch((error) => res.status(400).json(error)))
});

//SHOW
router.get("/:id", async (req,res) => {
    res.json(await Travellog.findById(req.params.id).catch((error) => res.status(400).json(error)))
})

//POST
router.post("/", async (req,res) => {
    res.json(await Travellog.create(req.body).catch((error) => res.status(400).json(error)))
})

//UPDATE

router.put("/:id", async (req,res) => {
    res.json(await Travellog.findByIdAndUpdate(req.params.id, req.body, {new: true}).catch((error) => res.status(400).json(error)))
})

//DESTROY
router.delete("/:id", async (req,res) => {
    res.json(await Travellog.findByIdAndRemove(req.params.id).catch((error) => res.status(400).json(error)))
})



module.exports = router
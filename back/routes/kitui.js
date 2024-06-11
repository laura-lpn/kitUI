const express = require("express")
const router = express.Router()

const kituiController = require("../controllers/kitui");


// Créer un kitui
router.post("/", (req, res) => {
    kituiController.create(req, res);
});


module.exports = router;
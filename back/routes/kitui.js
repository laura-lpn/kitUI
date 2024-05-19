const express = require("express")
const router = express.Router()

const kituiController = require("../controllers/kitui");


// Créer un kituie
router.post("/", (req, res) => {
    kituiController.create(req, res);
});


module.exports = router;
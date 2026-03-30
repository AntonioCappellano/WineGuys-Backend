const express = require("express");
const router = express.Router();
const wineController = require("../controllers/wineController");

// INDEX
router.get("/vini", wineController.index);

// SHOW
router.get("/vini/:id", wineController.show);

// STORE
router.post("/", wineController.store);


module.exports = router;
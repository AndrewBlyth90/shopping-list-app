const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/Items");


// @route   GET api/items
// @desc    GET all items
// @access  Public
router.get("/", () => (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})




module.exports = router;
const express = require("express")
const Goods = require("../models/Goods")

const router = express.Router({mergeParams: true})

router.get("/:type/:id", async (req, res) => {
    try {
        const {id} = req.params
        const currentItem = await Goods.findById(id).exec()
        res.status(200).send(currentItem)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports = router
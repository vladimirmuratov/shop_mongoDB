const express = require("express")
const Cart = require("../models/Cart")
const auth = require("../middleware/auth.middleware")

const router = express.Router({mergeParams: true})

router.get("/", auth, async (req, res) => {

    try {
        const list = await Cart.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

router.post("/", auth, async (req, res) => {

    try {
        const newCart = await Cart.create({
            ...req.body,
            userId: req.user._id
        })
        await newCart.save()
        res.status(200).send(newCart)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports = router
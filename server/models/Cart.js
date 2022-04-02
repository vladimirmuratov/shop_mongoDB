const {Schema, model} = require("mongoose")

const schema = new Schema({
    itemId: {type: Schema.Types.ObjectId, ref: "Goods", required: true},
    count: {type: String, required: true}
}, {
    timestamps: true
})

module.exports = model("Cart", schema)
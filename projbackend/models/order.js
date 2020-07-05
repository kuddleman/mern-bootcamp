const mongoose = require('mongoose')
const { model } = require('./product')

const { ObjectId } = mongoose.Schema 

const ProductCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product"
  },
  name: String,
  count: Number,
  price: Number,
})

const ProductCart = mongoose.model("ProductCart", ProductCartSchema)

const OrderSchema = new mongoose.Schema({
  // array of products IN THE CART
  products: [ProductCartSchema],
  transaction_id: {},
  amount: { type: Number },
  address: String,
  updated: Date,
  user: {
    type: ObjectId,
    ref: "User"
  }
}, { timestamps: true }
)

const Order = mongoose.model("Order", OrderSchema)

model.exports = { Order, ProductCart }

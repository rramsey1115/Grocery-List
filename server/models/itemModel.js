import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema({
  name: {type: String, required: true},
  details: {type: String, required: false},
  amount: {type: Number, required: true}
})
const Item = mongoose.model("Item", ItemSchema);

export default Item;
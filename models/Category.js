import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: 'category',
    },
    image: {
      type: String,
      required: true,
    },
    colors: { type: Object },
    level: { type: Number, required: true },
    children: { type: Array },
  },
  { timestamps: true }
)

const Category =
  mongoose.models.category || mongoose.model('category', CategorySchema)

export default Category

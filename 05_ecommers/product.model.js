import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 32,
        },
        image: {
           type : String,
        },
        price: {
            type: Number,
            default: 0,
        },
        stock: {
            default: 0,
            type: Number,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    }, { timestamps: true });
 export const Product = mongoose.model('Product', productSchema);
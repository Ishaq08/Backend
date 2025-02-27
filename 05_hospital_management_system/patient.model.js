import mongoose from 'mongoose';

const patiantSchema = new mongoose.Schema(
  {
    patiantName: {
      type: String,
      reqiured: true,
    },
    diagonsedWith: {
      type: String,
      reqiured: true,
    },
    address: {
      type: String,
      reqiured: true,
    },
    age: {
      type: Number,
      reqiured: true,
        },
    bloodGroup: {
        type: String,
        enum: ['A-', 'A+', 'AB+', 'AB-', 'O-', 'O+', 'B+', 'B-']
        },
    grnder: {
        type: String,
        enum: ['M', 'F'],
        required : true
        },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }
  },
  { timestamps: true }
);

export const Patiant  = mongoose.model("patiant", patiantSchema)
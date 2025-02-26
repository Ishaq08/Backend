import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const subToDoSchema = new mongoose.Schema(
  {
    contant: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.Objects,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const SubToDo = mongoose.model('SubToDo', subToDoSchema);

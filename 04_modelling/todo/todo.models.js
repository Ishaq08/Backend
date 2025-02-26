import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema(
  {
    contant: {
      type: String,
      requied: true,
    },
    complet: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subToDos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubToDo',
      },
    ], // array of sub todos
  },
  { timestamps: true }
);

export const ToDo = mongoose.model('ToDo', toDoSchema);

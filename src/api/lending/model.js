import mongoose, { Schema } from 'mongoose';

const lendingSchema = new Schema(
  {
    reader: {
      type: Schema.ObjectId,
      ref: 'Reader'
    },
    book: {
      type: Schema.ObjectId,
      ref: 'Book'
    },
    deadline: {
      type: String
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      }
    }
  }
);

lendingSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      reader: this.reader,
      book: this.book,
      deadline: this.deadline,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };

    return full
      ? {
          ...view
          // add properties for a full view
        }
      : view;
  }
};

const model = mongoose.model('Lending', lendingSchema);

export const schema = model.schema;
export default model;

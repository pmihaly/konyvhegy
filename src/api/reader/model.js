import mongoose, { Schema } from 'mongoose';

const readerSchema = new Schema(
  {
    fullName: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    birthDate: {
      type: Date
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

readerSchema.methods = {
  view(full) {
    const birthDate = new Date(Date.parse(this.birthDate));
    const view = {
      // simple view
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      birthDate: birthDate.toLocaleDateString('hu-HU'),
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

const model = mongoose.model('Reader', readerSchema);

export const schema = model.schema;
export default model;

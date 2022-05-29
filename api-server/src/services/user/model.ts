import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema(
  {
    authLevel: { type: String },
    dateOfBirth: { type: Date },
    deviceId: { type: String },
    deviceVersion: { type: String },
    devicePass: { type: String },
    distanceMetric: { type: Boolean },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    gender: { type: Number }, // 0 | 1 | 2 | 3;
    height: { type: Number },
    heightMetric: { type: Boolean },
    id: { type: Number },
    isConfirmed: { type: Boolean },
    key: { type: String },
    language: { type: String },
    lastName: {
      type: String,
      required: true
    },
    password: { type: String },
    picture: { type: String },
    weight: { type: Number },
    weightMetric: { type: Boolean }
  },
  { timestamps: true }
);

export default model("User", userSchema);
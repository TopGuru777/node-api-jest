import mongoose, { Document, Model, Schema } from 'mongoose';

// Interface to define the properties a User Document should have
export interface IUser extends Document {
  name: string;
  email: string;
}

// Schema corresponding to the document interface
const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

// Creating the model
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
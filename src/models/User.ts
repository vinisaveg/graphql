import { Document, Schema, model } from "mongoose"

export interface UserType extends Document {
  firstName: string
  lastName: string
  email?: string
  active: boolean
}

const UserSchema = new Schema<UserType>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  active: {
    type: Boolean,
    required: true,
  },
})

export default model<UserType>("User", UserSchema)

import { Document, Schema, model } from "mongoose"

export interface Post extends Document {
  title: string
  content: string
  author: string
}

const PostSchema = new Schema<Post>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

export default model<Post>("Post", PostSchema)

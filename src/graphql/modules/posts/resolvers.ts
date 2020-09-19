import Post from "../../../models/Post"

export default {
  Query: {
    posts: () => Post.find(),
    post: (_: any, { id }: any) => Post.findById(id),
  },
  Mutation: {
    createPost: (_: any, { data }: any) => Post.create(data),
    updatePost: (_: any, { id, data }: any) => Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_: any, { id }: any) => {
      const deleted = await Post.findOneAndDelete(id)
      return !!deleted
    },
  },
}

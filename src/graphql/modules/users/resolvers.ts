import User from "../../../models/User"

export default {
  Query: {
    users: () => User.find(),
    user: (_: any, { id }: any) => User.findById(id),
  },
  Mutation: {
    createUser: (_: any, { data }: any) => User.create(data),
    updateUser: (_: any, { id, data }: any) => User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_: any, { id }: any) => {
      const deleted = await User.findOneAndDelete({ _id: id })
      return !!deleted
    },
  },
}

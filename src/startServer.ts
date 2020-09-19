import { ApolloServer, Config } from "apollo-server"
import mongoose from "mongoose"

const startServer = ({ typeDefs, resolvers }: Config) => {
  connectDb().catch((error) => {
    console.log(error)
  })

  const server = new ApolloServer({ typeDefs, resolvers })

  server
    .listen()
    .then(({ url }) => {
      console.log(`💡 Server started at ${url}`)
    })
    .catch((error) => {
      console.log(`Failure to start application ${error.message}`)
    })
}

const connectDb = (): Promise<typeof mongoose> => {
  return mongoose.connect("mongodb://localhost:27017/graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
}

export default startServer

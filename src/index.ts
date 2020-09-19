import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    active: Boolean
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`
interface UserType {
  id: string
  name: string
  email: string
  active: boolean
}

const users: Array<UserType> = [
  {
    id: String(Math.random()),
    name: "Vinicius",
    email: "vinisaveg@gmail.com",
    active: false,
  },
  {
    id: String(Math.random()),
    name: "Beatriz",
    email: "biazinha@gmail.com",
    active: false,
  },
]

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    users: () => users,
    getUserByEmail: (_: any, args: any) => {
      return users.find((user) => user.email === args.email)
    },
  },
  Mutation: {
    createUser: (_: any, args: any) => {
      const newUser: UserType = {
        id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: false,
      }

      users.push(newUser)

      return newUser
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`🚀 Server started at ${url}`))

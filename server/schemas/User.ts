import gql from "graphql-tag";

export default gql`
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
  }
  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
    me: Boolean
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!, avatar: String): User!
    login(email: String!, password: String!): User!
    logout: Boolean
  }
`;
import gql  from "graphql-tag";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
  }
  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }
`;
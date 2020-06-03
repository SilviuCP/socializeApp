import gql from "graphql-tag";

export default gql`
  type Post {
    id: Int!
    user_id: Int!
    username: String!
    visibility: Boolean!
    image: String
    description: String
  }
  type Query {
    # getPost(id: Int!): Post!
    getMyPosts: [Post!]!
    # getAllAvailablePosts: [Post!]!
  }
  type Mutation {
    createPost(user_id: Int, username: String, visibility: Boolean!, image: String, description: String): Post!
  }
`;

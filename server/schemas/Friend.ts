import gql from "graphql-tag";

export default gql`
  type Friend {
    id: Int!
    user_id: Int!
    friend_id: Int!
    status: Int!
    action_user_id: Int!
  }
  type Query {
    getFriends: [User!]!
    addFriend(user_id: Int!): Boolean!
  }
  type Mutation {
    addFriend(user_id: Int!, friend_id: Int!): Boolean!
    getFriends(user_id: Int!): [User!]!
  }
`;
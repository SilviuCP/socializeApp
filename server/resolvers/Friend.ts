export default {
    Query: {
        // getFriends: (parent, { id }, context) => context.models.Friend.findAll({}, (friend) => context.user_id == friend.user_id ||context.user_id == friend.friend_id ),
    },
    Mutation: {
        addFriend: (parent, args, {models}) => {
            return new Promise((resolve) => {
                resolve(models.Friend.create({
                    ...args,
                    status: 0,
                }))
            })
        }

    },
};

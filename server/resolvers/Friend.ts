export default {
    Query: {
        getFriends: (parent, { id }, { models }) => models.Friend.findAll(),
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

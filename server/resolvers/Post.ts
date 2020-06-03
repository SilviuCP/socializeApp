export default {
    Query: {
        // getAllPosts: (parent, { id }, { models }) => models.Post.findAll(),
        // getAllAvailablePosts: (parent, args, context) => context.models.Post.findAll({}, (post) => post.user_id == context.user_id),
        getMyPosts: (parent, args, context) => context.models.Post.findAll({}, (post) => post.user_id == context.user_id),
    },
    Mutation: {
        createPost: (parent, args, context) => {
            return new Promise((resolve) => {
                resolve(context.models.Post.create({
                    ...args,
                    user_id: context.getUser().id,
                    username: context.getUser().username,
                }))
            })
        }
    },
};

// export default {
//     Query: {
//         getPostLikes: (parent, args, { models }) => models.Like.find((post) => post.user_id === args.user_id),
//         getLiked: (parent, args, { models }) => models.Post.find((post) => post.user_id === args.user_id),
//     },
//     Mutation: {
//         addLike: (parent, args, {models}) => {
//             return new Promise((resolve) => {
//                 resolve(models.Post.create({
//                     ...args,
//                 }))
//             })
//         },
//         removeLike: (parent, args, {models}) => {
//             return new Promise((resolve) => {
//                 resolve(models.Post.create({
//                     ...args,
//                 }))
//             })
//         }
//     },
// };

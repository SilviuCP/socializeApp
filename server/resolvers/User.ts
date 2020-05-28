import bcrypt from "bcrypt";

export default {
    Query: {
        getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
        allUsers: (parent, args, { models }) => models.User.findAll(),
    },
    Mutation: {
        createUser: async(parent, args, { models }) => {
            const password = await bcrypt.genSalt(2)
            return models.User.create({
                ...args,
                password,
            })
        },
    },
};
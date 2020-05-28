import bcrypt from "bcrypt";

export default {
    Query: {
        getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
        allUsers: (parent, args, { models }) => models.User.findAll(),
        me: (parent, args, { req }) => req.user,
    },
    Mutation: {
        createUser: (parent, args, { models }) => {
            return new Promise((resolve) => {
                bcrypt.genSalt(5, function (err, salt) {
                    if (err) throw (err);

                    bcrypt.hash(args.password, salt, function (err, hash) {
                        if (err) throw (err);
                        resolve(models.User.create({
                            ...args,
                            password: hash,
                        }))
                    });
                });
            })
        },
        login: async (parent, { email, password }, { models, authenticate, login }) => {
            const { user } = await authenticate("graphql-local", { email, password })
            login(user);
            return user;
        }
    },
};

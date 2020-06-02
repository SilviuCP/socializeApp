import bcrypt from "bcrypt";

export default {
    Query: {
        getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
        allUsers: (parent, args, { models }) => models.User.findAll(),
        me: (parent, args, context) => {
            if (context.getUser().username){
                return true;
            }
            return false;
        },
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
        login: async (parent, { email, password }, { req, authenticate, login }) => {
            const { user, info } = await authenticate("graphql-local", { email, password })
            login(user);
            return user;
        },
        logout: async (parent, { email, password }, { logout }) => {
            await logout();
            return true;
        }
    },
};

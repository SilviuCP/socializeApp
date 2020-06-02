export default (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        user_id: {
            type: DataTypes.INTEGER,
        },
        username: {
            type: DataTypes.STRING,
        },
        visibility: {
            type: DataTypes.BOOLEAN,
        },
        image: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        }
    });

    return Post;
};

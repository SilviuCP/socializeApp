export default (sequelize, DataTypes) => {
    const Friend = sequelize.define('friend', {
      user_id: {
        type: DataTypes.INTEGER,
      },
      friend_id: {
        type: DataTypes.INTEGER,
      },
      status: DataTypes.INTEGER,
    });
  
    return Friend;
  };
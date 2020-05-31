import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nenos", "admin", "123", {
    host: "localhost",
    dialect: "mysql"
});
const models = {
    User: sequelize.import("./User"),
    Friend: sequelize.import("./Friend"),
    sequelize,
}

export default models
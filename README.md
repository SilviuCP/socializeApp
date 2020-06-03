# socializeApp

To use locally a MySql DB is required, the DB connection can be modified from server/models/index.ts
const sequelize = new Sequelize("DB_Name", "User", "Password", {
    host: "localhost",
    dialect: "mysql"
});

the server and the client must be started separately using the "npm run dev" command

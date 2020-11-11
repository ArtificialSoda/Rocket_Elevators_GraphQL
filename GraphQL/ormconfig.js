module.exports = [
  {
    name: "Rocket_app_development",
    type: "mysql",
    database: "Rocket_app_development",
    synchronize: false,
    logging: true,
    username: "root",
    password: "WJg0r3n0!",
    entities: ["src/entity/**/*.ts"]
  },
  {
    name: "Fabien_Dimitrov_DWH",
    type: "postgres",
    url: "codeboxx-postgresql.cq6zrczewpu2.us-east-1.rds.amazonaws.com",
    database: "Fabien_Dimitrov_DWH",
    username: "codeboxx",
    password: "Codeboxx1!",
    synchronize: false, // switch this to false once you have the initial tables created and use migrations instead
    logging: false,
    entities: ["src/entity/**/*.ts"]
  }
];

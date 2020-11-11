module.exports = [
  {
    name: "default",
    type: "mysql",
    database: "Rocket_app_development",
    synchronize: false,
    logging: true,
    username: "root",
    password: "WJg0r3n0!",
    entities: ["src/entity/**/*.ts"]
  },
  {
    name: "postgres",
    type: "postgres",
    //url: "codeboxx-postgresql.cq6zrczewpu2.us-east-1.rds.amazonaws.com",
    database: "postgres",
    username: "postgres",
    password: "WJg0r3n0",
    schema: 'public',
    synchronize: false, 
    logging: true,
    entities: ["src/entity/**/*.ts"]
  }
];
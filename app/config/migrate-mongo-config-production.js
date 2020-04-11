module.exports = {
  mongodb: {
    url: "mongodb://localhost:27017",
    databaseName: "project",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  migrationsDir: "../migrations",
  changelogCollectionName: "migrations"
};
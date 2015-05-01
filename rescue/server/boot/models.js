module.exports = function(app) {
  app.dataSources.mysqlDatasource.automigrate('Recipe');
};

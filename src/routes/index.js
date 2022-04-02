module.exports = (app) => {
  const gameController = app.controllers.gameController;

  app.route("/").get((req, res) => res.send("<h1>Welcome to Jokenpo!</h1>"));

  app.route("/jokenpo").get(gameController.execTransform);
};
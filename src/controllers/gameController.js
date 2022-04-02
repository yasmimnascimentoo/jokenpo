module.exports = (app) => {
  const controller = {};
  const jokenpoService = app.services.jokenpoService;

  controller.execTransform = (req, res) => jokenpoService.jokenpoGame(req, res);

  return controller;
};
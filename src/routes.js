const AnalyzeController = require("./controllers/analyze.controller")

module.exports = (app) => {
  app.post('/analyze', AnalyzeController.getPredictionHandler)
}
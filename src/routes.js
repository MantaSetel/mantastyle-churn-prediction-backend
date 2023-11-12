const AnalyzeController = require("./controllers/analyze.controller")

module.exports = (app) => {
  app.get('/health-check', (req, res) => res.send('OK'))
  app.post('/analyze', AnalyzeController.getPredictionHandler)
  app.get('/device-class', AnalyzeController.getDeviceClassHandler)
  app.get('/churn', AnalyzeController.getChurnHandler)
  app.get('/monthly-purchase-per-device', AnalyzeController.getMonthlyPurchasePerDeviceHandler)
}
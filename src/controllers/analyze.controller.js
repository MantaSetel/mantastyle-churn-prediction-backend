const { CustomerChurn } = require('../models');

const getPredictionHandler = async (req, res) => {
  const customerChurn = req.body;
  try {
    const churn = await CustomerChurn.create({
      tenure_month: customerChurn.tenure_month,
      location: customerChurn.location,
      device_class: customerChurn.device_class,
      games_product: customerChurn.games_product,
      music_product: customerChurn.music_product,
      education_product: customerChurn.education_product,
      video_product: customerChurn.video_product,
      call_center: customerChurn.call_center,
      use_my_app: customerChurn.use_my_app,
      payment_method: customerChurn.payment_method,
      monthly_purchase: customerChurn.monthly_purchase,
    });

    return res.status(201).send({ message: 'Success', data: churn });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

const AnalyzeController = {
  getPredictionHandler
}

module.exports = AnalyzeController
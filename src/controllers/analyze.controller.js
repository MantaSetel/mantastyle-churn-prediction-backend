const { CustomerChurn } = require('../models');
const { CustomerChurnService } = require('../services')

// curl -X POST -H "Content-Type: application/json" -d '{
//   "TenureMonths": 2,
//   "GamesProduct": 1,
//   "MusicProduct": 0,
//   "EducationProduct": 0,
//   "CallCenter": 0,
//   "VideoProduct": 0,
//   "UseMyApp": 0,
//   "MonthlyPurchase": 70.005,
//   "CLTV": 4210.7,
//   "DeviceClass_HighEnd": 0,
//   "DeviceClass_LowEnd": 1,
//   "DeviceClass_MidEnd": 1,
//   "PaymentMethod_Credit": 0,
//   "PaymentMethod_Debit": 0,
//   "PaymentMethod_DigitalWallet": 1,
//   "PaymentMethod_Pulsa": 0
// }' https://aksihijau-production.et.r.appspot.com/customer-churn-predict

const getPredictionHandler = async (req, res) => {
  console.log(req.body)
  const customerChurn = req.body;
  try {
    const churnResult = await CustomerChurnService.predict(customerChurn)

    const churn = await CustomerChurn.create({
      tenure_month: customerChurn.tenure_months,
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
      cltv: customerChurn.cltv,
      churn: churnResult
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
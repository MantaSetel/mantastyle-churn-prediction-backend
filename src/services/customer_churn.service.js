const fetch = require('node-fetch')

const predict = async (customerChurn) => {
  const customerChurnDataTransformed = {
    "TenureMonths": customerChurn.tenure_months,
    "GamesProduct": customerChurn.games_product,
    "MusicProduct": customerChurn.music_product,
    "EducationProduct": customerChurn.education_product,
    "CallCenter": customerChurn.call_center,
    "VideoProduct": customerChurn.video_product,
    "UseMyApp": customerChurn.use_my_app,
    "MonthlyPurchase": customerChurn.monthly_purchase,
    "CLTV": customerChurn.cltv,
    "DeviceClass_HighEnd": customerChurn.device_class === 'HighEnd' ? 1 : 0,
    "DeviceClass_LowEnd": customerChurn.device_class === 'LowEnd' ? 1 : 0,
    "DeviceClass_MidEnd": customerChurn.device_class === 'MidEnd' ? 1 : 0,
    "PaymentMethod_Credit": customerChurn.payment_method === 'Credit' ? 1 : 0,
    "PaymentMethod_Debit": customerChurn.payment_method === 'Debit' ? 1 : 0,
    "PaymentMethod_DigitalWallet": customerChurn.payment_method === 'DigitalWallet' ? 1 : 0,
    "PaymentMethod_Pulsa": customerChurn.payment_method === 'Pulsa' ? 1 : 0
  }
  
  const response = await fetch('https://aksihijau-production.et.r.appspot.com/customer-churn-predict', {
    method: 'POST',
    body: JSON.stringify(customerChurnDataTransformed),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  console.log("response", response)
  const data = await response.json()
  console.log("result", data.churn[0])
  return data.churn[0]
}

const CustomerChurnService = {
  predict
}

module.exports = CustomerChurnService
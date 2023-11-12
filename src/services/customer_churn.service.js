const fetch = require('node-fetch')
const { CustomerChurn } = require('../models')

const replaceValue = (value) => {
  return value === 'Yes' ? 'Yes' : 'No'
}

const predict = async (customerChurn) => {
  console.log("customerChurn", customerChurn)
  const customerChurnDataTransformed = {
    "TenureMonths": parseInt(customerChurn.tenure_months),
    "GamesProduct": replaceValue(customerChurn.games_product),
    "MusicProduct": replaceValue(customerChurn.music_product),
    "EducationProduct": replaceValue(customerChurn.education_product),
    "CallCenter": replaceValue(customerChurn.call_center),
    "VideoProduct": replaceValue(customerChurn.video_product),
    "UseMyApp": replaceValue(customerChurn.use_my_app),
    "MonthlyPurchase": parseFloat(customerChurn.monthly_purchase),
    "CLTV": parseFloat(customerChurn.cltv),
    "DeviceClass_HighEnd": customerChurn.device_class === 'High End' ? 1 : 0,
    "DeviceClass_LowEnd": customerChurn.device_class === 'Low End' ? 1 : 0,
    "DeviceClass_MidEnd": customerChurn.device_class === 'Mid End' ? 1 : 0,
    "PaymentMethod_Credit": customerChurn.payment_method === 'Credit' ? 1 : 0,
    "PaymentMethod_Debit": customerChurn.payment_method === 'Debit' ? 1 : 0,
    "PaymentMethod_DigitalWallet": customerChurn.payment_method === 'Digital Wallet' ? 1 : 0,
    "PaymentMethod_Pulsa": customerChurn.payment_method === 'Pulsa' ? 1 : 0
  }
  
  const response = await fetch('https://aksihijau-production.et.r.appspot.com/customer-churn-predict', {
    method: 'POST',
    body: JSON.stringify(customerChurnDataTransformed),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()
  return data.churn[0]
}

const getDeviceClassCount = async () => {
  const highEndCount = await CustomerChurn.count({ where: { device_class: 'High End' } })
  const lowEndCount = await CustomerChurn.count({ where: { device_class: 'Low End' } })
  const midEndCount = await CustomerChurn.count({ where: { device_class: 'Mid End' } })
  return { highEndCount, lowEndCount, midEndCount }
}

const getChurnCount = async () => {
  const churnCount = await CustomerChurn.count({ where: { churn: true } })
  const notChurnCount = await CustomerChurn.count({ where: { churn: false } })
  console.log("churnCount", churnCount)
  console.log("churnCount", churnCount)
  return { churnCount, notChurnCount }
}

const getMonthlyPurchasePerDevice = async () => {
  const highEnd = await CustomerChurn.findAll({ where: { device_class: 'High End' } })
  const lowEnd = await CustomerChurn.findAll({ where: { device_class: 'Low End' } })
  const midEnd = await CustomerChurn.findAll({ where: { device_class: 'Mid End' } })

  const highEndMonthlyPurchase = highEnd.reduce((counter, obj) => counter + obj.monthly_purchase, 0)
  const lowEndMonthlyPurchase = lowEnd.reduce((counter, obj) => counter + obj.monthly_purchase, 0)
  const midEndMonthlyPurchase = midEnd.reduce((counter, obj) => counter + obj.monthly_purchase, 0)

  return { highEndMonthlyPurchase, lowEndMonthlyPurchase, midEndMonthlyPurchase }
}

const CustomerChurnService = {
  predict,
  getDeviceClassCount,
  getChurnCount,
  getMonthlyPurchasePerDevice
}

module.exports = CustomerChurnService
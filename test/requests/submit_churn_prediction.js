const { app } = require("../../app")

describe('Submit Churn Prediction', () => {
  it ('should return 200', async () => {
    const res = await request(app).post('/analyze').send({
      months: 1,
      location: 'Urban',
      device_class: 'Phone',
      games_product: 'Yes',
      music_product: 'Yes',
      education_product: 'Yes',
      video_product: 'Yes',
      call_center: 'Yes',
      use_my_app: 'Yes',
      payment_method: 'CC',
      tenure_month: 1,
    })

    expect(res.statusCode).toEqual(200)
  })
})
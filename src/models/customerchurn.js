'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerChurn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerChurn.init({
    tenure_months: DataTypes.NUMBER,
    location: DataTypes.STRING,
    device_class: DataTypes.STRING,
    games_product: DataTypes.STRING,
    music_product: DataTypes.STRING,
    education_product: DataTypes.STRING,
    video_product: DataTypes.STRING,
    call_center: DataTypes.BOOLEAN,
    use_my_app: DataTypes.BOOLEAN,
    monthly_purchase: DataTypes.NUMBER,
    cltv: DataTypes.NUMBER,
    payment_method: DataTypes.STRING,
    churn: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CustomerChurn',
  });
  return CustomerChurn;
};
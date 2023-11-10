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
    months: DataTypes.NUMBER,
    location: DataTypes.STRING,
    device_class: DataTypes.STRING,
    games_product: DataTypes.STRING,
    music_product: DataTypes.STRING,
    education_product: DataTypes.STRING,
    video_product: DataTypes.STRING,
    call_center: DataTypes.BOOLEAN,
    use_my_app: DataTypes.BOOLEAN,
    payment_method: DataTypes.STRING,
    tenure_month: DataTypes.NUMBER,
    churn: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CustomerChurn',
  });
  return CustomerChurn;
};
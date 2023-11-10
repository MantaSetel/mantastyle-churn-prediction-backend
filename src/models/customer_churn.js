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
    tenure_month: DataTypes.NUMBER,
    location: DataTypes.STRING,
    device_class: DataTypes.STRING,
    games_product: {
      type: DataTypes.ENUM("Yes", "No", "No internet service")
    },
    music_product: {
      type: DataTypes.ENUM("Yes", "No", "No internet service")
    },
    education_product: {
      type: DataTypes.ENUM("Yes", "No", "No internet service")
    },
    video_product: {
      type: DataTypes.ENUM("Yes", "No", "No internet service")
    },
    call_center: DataTypes.BOOLEAN,
    use_my_app: DataTypes.BOOLEAN,
    payment_method: DataTypes.STRING,
    monthly_purchase: DataTypes.BIGINT,
    churn: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'CustomerChurn',
  });
  return CustomerChurn;
};
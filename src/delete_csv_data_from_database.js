const { CustomerChurn } = require("./models");

const deleteCsvDataFromDatabase = async () => {
    try {
        await CustomerChurn.destroy({ truncate: true });
        console.log("Success delete data from database");
    } catch (error) {
        console.error(error);
    }
};

deleteCsvDataFromDatabase();
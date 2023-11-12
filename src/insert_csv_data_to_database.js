const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const { CustomerChurn } = require("./models");

const csvFilePath = path.join(__dirname, "data/telco_customer_churn.csv");

const data = [];
fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (row) => {
        // Mengonversi setiap baris CSV menjadi objek dan menambahkannya ke array data
        data.push({
            tenure_months: row["tenure_months"],
            location: row["location"],
            device_class: row["device_class"],
            games_product: row["games_product"],
            music_product: row["music_product"],
            education_product: row["education_product"],
            video_product: row["video_product"],
            call_center: row["call_center"],
            use_my_app: row["use_my_app"],
            payment_method: row["payment_method"],
            monthly_purchase: row["monthly_purchase"],
            cltv: row["cltv"],
            churn: row["churn"] === "Yes" ? true : false,
        });
    })
    .on("end", () => {
        // Memasukkan data ke dalam tabel CustomerChurns
        const reducedData = data.slice(0, 1000);
        CustomerChurn.bulkCreate(reducedData);
        console.log("Success insert data to database");
    });

const mongoose = require('mongoose');
const dbConnect=async ( ) => {
    try{

        await mongoose.connect(
            "mongodb+srv://sumitchaubey76:password@cluster0.nn6s3ai.mongodb.net/",
            {
            dbName: "mongo-auth",
           
            }
        );
        console.log("connected to MongoDB");
            }
             
    catch(error)
    {
        console.log("failed to connect to database");
    }
};
module.exports = dbConnect;

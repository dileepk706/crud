const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected:${connect.connection.host}`);
    }catch(err){
        console.log('please fix the ERROR : '+err);
    }
}

module.exports = connectDB;
 
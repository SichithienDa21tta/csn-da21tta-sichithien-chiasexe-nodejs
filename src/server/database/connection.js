//./server/database/connection.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`Kết nối thành công đến MongoDB!!!!!`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
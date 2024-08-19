const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        const conn = await mongoose.connect(
            'mongodb+srv://oscar:oscar@cluster0.8azzn.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0',
      );
        console.log(`Mongo connected:`);

    } catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDb;
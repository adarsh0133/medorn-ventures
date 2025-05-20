const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://adarsh90399:r1VgqzutBI5t3kUN@cluster0.uekecv5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
exports.connectDatabase = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}
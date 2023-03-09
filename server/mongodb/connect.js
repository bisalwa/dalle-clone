import mongoose from 'mongoose';
// mongodb.com.atlas.database - free account with b@gmail.com
// instance - dall-e-cluster0.g0oya2h.mongodb.net
// db un - b, pw - 275W3$t => must be urlencoded due to $
const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.error(err));
}

export default connectDB;
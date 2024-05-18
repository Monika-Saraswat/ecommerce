const mongoose = require('mongoose');

const dbConnect = () => mongoose.connect('mongodb+srv://saraswatmonika55:shopApp@cluster0.cwtvd5e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log("Connecting Database");
}).catch((err) => {
    console.log(err);
});
module.exports = dbConnect;

// mongodb://127.0.0.1:27017/shopApp
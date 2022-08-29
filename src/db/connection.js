const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.HOST_NAME}:${process.env.DATABASE_PORT_NUMBER}/${process.env.COLLECTION_NAME}`,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is successful");
}).catch((err) => {
    console.log(`${err} : connection failed!....`);
});
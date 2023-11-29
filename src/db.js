const mongoose = require('mongoose');
const passwordDB= process.env.PASSWORD_DB_CONNECTION
const userDB=process.env.USER_DB_CONNECTION



    mongoose.connect(`mongodb+srv://${userDB}:${passwordDB}@cluster0.7mwljff.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
            console.log(("Connect to database succesfully"));
        })
        .catch((error) => {
            console.log("Error connecting to database " +
                error);
        })

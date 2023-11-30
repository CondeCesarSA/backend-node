const User = require("../models/User");


const userDal ={
    createUser: async (userNuevo) => {
        return await User.create(userNuevo)
    },
    getOneUserById: async (id) => {
        return await User.findById(id);
    },
}


module.exports = userDal
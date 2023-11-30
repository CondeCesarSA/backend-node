const userDAL= require('../repositories/userDAL')

const userService = {

    createUser: async (userNuevo) => {
        const user = await userDAL.createUser(userNuevo);
        try{
            if (user) {
                return user;
            } else {
                return null;
            }
        }catch(e){
            throw new Error(e.message)
        }
    
    },

}



module.exports = userService;


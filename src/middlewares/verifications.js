const Joi = require('joi');


const userSchema = Joi.object({ 
    nombre: Joi.string().min(1).max(30).required()
        .messages({
             'string.base': 'El nombre debe ser una cadena de texto.',
              'string.empty': 'El nombre no puede estar vacío.',
               'string.min': 'El nombre debe tener al menos {#limit} caracteres.',
                'string.max': 'El nombre no puede tener más de {#limit} caracteres.',
                'any.required': 'El nombre es obligatorio.', }),
    lastname: Joi.string().min(1).max(30).required()
    .messages({
         'string.base': 'El apellido debe ser una cadena de texto.', 
         'string.empty': 'El apellido no puede estar vacío.',
          'string.min': 'El apellido debe tener al menos {#limit} caracteres.',
           'string.max': 'El apellido no puede tener más de {#limit} caracteres.',
            'any.required': 'El apellido es obligatorio.', }),
    age: Joi.number().integer().min(18).max(150).required()
        .messages({
         'number.base': 'La edad debe ser un número.',
          'number.integer': 'La edad debe ser un número entero.',
           'number.min': 'La edad debe ser mayor o igual a {#limit}.',
            'number.max': 'La edad no puede ser mayor de {#limit}.',
             'any.required': 'La edad es obligatoria.', }),
    email: Joi.string().email().required()
        .messages({
            'string.base': 'El correo electrónico debe ser una cadena de texto.',
            'string.email': 'El correo electrónico debe tener un formato válido.',
            'any.required': 'El correo electrónico es obligatorio.', }),
    password: Joi.string().min(6).required()
        .messages({
             'string.base': 'La contraseña debe ser una cadena de texto.', 
             'string.min': 'La contraseña debe tener al menos {#limit} caracteres.',
             'any.required': 'La contraseña es obligatoria.', }),
    role: Joi.string().required()
});




const verifications={
    verifyData:(req, res, next)=>{

        
        next()
    }
}

module.exports=verifications
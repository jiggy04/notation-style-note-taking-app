const Joi  = require('joi');

const createNoteSchema = Joi.object({
    title:Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
    category: Joi.string().optional(),
    tags: Joi.array().items(Joi.string()).optional()
});


const updateNoteSchema = Joi.object({
    title:Joi.string().min(5),
    content: Joi.string().min(10),
    category: Joi.string(),
    tags: Joi.array().items(Joi.string())
});


module.exports = {createNoteSchema,
    updateNoteSchema
};
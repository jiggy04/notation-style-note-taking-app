const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            index: true
        },
        content: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        category: {
            type: String,

        },
        tags: {
            type: [String],
            default: []
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    }, {timestamps: true});

    module.exports = mongoose.model('Note', noteSchema);
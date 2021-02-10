const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
        isbn: { type: String, required: true },
        title: { type: String, required: true },
        author: { type: String, required: true },
        publication_year: { type: Number, required: true },
        publisher: { type: String, required: true },
        image_url_s: { type: String, required: true },
        image_url_m: { type: String, required: true },
        image_url_l: { type: String, required: true },
        copies: { type: Number, required: true },
        available: { type: Number, required: true },


        // ==>> changed by Elnur
        // name: { type: String, required: true },
        // daysOfWeek: {type: Map, of: String, required: false},
        // timeframeNote: {type: String,required: false },
        // priority: {type: Number,required: false},
        // content: { type: String,required: true},
    },
    { timestamps: true },
);

module.exports = mongoose.model('books', Item);

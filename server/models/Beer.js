const { Schema, model } = require('mongoose');

const beerSchema = new Schema({
    name:
    {
        type: String,
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    beerId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
});

const Beer = model('Beer', reviewSchema);

module.exports = Beer;
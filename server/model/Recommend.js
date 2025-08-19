const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    place_id: {
        type: String,
    },
    place_name: {
        type: String,
    },
    SentimentRatio: {
        type: String,
    },
    SentimentScore: {
        type: Number,
    },
    StyleNatural: {
        type: Number
    },
    StyleBright: {
        type: Number
    },
    StyleVintage: {
        type: Number
    },
    StyleMonochrome: {
        type: Number
    },
    StyleClear: {
        type: Number
    },
    StyleAnalog: {
        type: Number
    },
    StylePastel: {
        type: Number
    },
    ThemeIdol: {
        type: Number,
    },
    ThemeCharacter: {
        type: Number,
    },
    ThemeBrand: {
        type: Number
    },
    ThemeSeason: {
        type: Number
    },
    ThemeMedia: {
        type: Number
    },
    PropsVarious: {
        type: Number
    },
    PropsCostume: {
        type: Number
    },
    PropsHair: {
        type: Number
    },
    PropsGlasses: {
        type: Number
    },
    PropsPlants: {
        type: Number
    },
    PlaceSpacious: {
        type: Number
    },
    PlaceQuiet: {
        type: Number
    },
    PlaceCouple: {
        type: Number
    },
    PlaceGroup: {
        type: Number
    },
    PlaceAccessibility: {
        type: Number
    },
    PlaceCleanliness: {
        type: Number
    },
    PlacePopularity: {
        type: Number
    }
},  { collection: 'photo_studios' });

const Recommend = mongoose.model('Recommend', recommendSchema);

module.exports = { Recommend }
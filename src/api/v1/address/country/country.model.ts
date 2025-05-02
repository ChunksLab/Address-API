import { Schema, model } from "mongoose";

const countrySchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    iso3: {
        type: String,
        required: true,
        unique: true,
    },
    iso2: {
        type: String,
        required: true,
        unique: true,
    },
    numeric_code: {
        type: String,
        required: true,
        unique: true,
    },
    phonecode: {
        type: String,
        required: true,
    },
    capital: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    currency_name: {
        type: String,
        required: true,
    },
    currency_symbol: {
        type: String,
        required: true,
    },
    tld: {
        type: String,
        required: true,
    },
    native: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    region_id: {
        type: Number,
        required: true,
    },
    subregion: {
        type: String,
        required: true,
    },
    subregion_id: {
        type: Number,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    timezones: [
        {
            zoneName: {
                type: String,
                required: true,
            },
            gmtOffset: {
                type: Number,
                required: true,
            },
            gmtOffsetName: {
                type: String,
                required: true,
            },
            abbreviation: {
                type: String,
                required: true,
            },
            tzName: {
                type: String,
                required: true,
            },
        },
    ],
    translations: {
        ko: {
            type: String,
            required: true,
        },
        "pt-BR": {
            type: String,
            required: true,
        },
        pt: {
            type: String,
            required: true,
        },
        nl: {
            type: String,
            required: true,
        },
        hr: {
            type: String,
            required: true,
        },
        fa: {
            type: String,
            required: true,
        },
        de: {
            type: String,
            required: true,
        },
        es: {
            type: String,
            required: true,
        },
        fr: {
            type: String,
            required: true,
        },
        ja: {
            type: String,
            required: true,
        },
        it: {
            type: String,
            required: true,
        },
        "zh-CN": {
            type: String,
            required: true,
        },
        tr: {
            type: String,
            required: true,
        },
        ru: {
            type: String,
            required: true,
        },
        uk: {
            type: String,
            required: true,
        },
        pl: {
            type: String,
            required: true,
        },
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    emoji: {
        type: String,
        required: true,
    },
    emojiU: {
        type: String,
        required: true,
    },
});

export const Country = model("Country", countrySchema);
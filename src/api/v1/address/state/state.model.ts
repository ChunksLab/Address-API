import { Schema, model } from "mongoose";

const stateSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    country_id: {
        type: Number,
        required: true,
    },
    country_code: {
        type: String,
        required: true,
    },
    country_name: {
        type: String,
        required: true,
    },
    state_code: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
});

export const State = model("State", stateSchema);
import mongoose from "mongoose";

const recordSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number,
    country: {
        type: String,
        default: "US"
    },
    date: {
        type: Date,
        default: new Date()
    },
});

const RecordData = mongoose.model("RecordData", recordSchema)

export default RecordData;
import mongoose from "mongoose";

const recordSchema = mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: String,

    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: {
            values: [ 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY' ],
            message: '{VALUE} is not a valid state abbreviation',
        },
        required: true
    },
    zip: {
        type: String,
        required: [true, "Minimum 5, maximum 9 characters required"]
    },
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
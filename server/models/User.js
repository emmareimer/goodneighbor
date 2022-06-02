const { Schema, model } = require('mongoose');


// TODO (Emma): Change posted tasks and claimed tasks to full task json data instead of objectId

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        isEmail: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address.'],
    },
    password: {
        type: String,
        required: true,
    },
    posted_tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task',
    }],
    claimed_tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task',
    }],
    zip_code: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },

});

const User = model('User', userSchema);

module.exports= User;
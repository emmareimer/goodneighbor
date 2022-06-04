const { Schema, model } = require('mongoose');


const userSchema = new Schema ({
    name: {
        type: String,
    },
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        isEmail: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address.'],
        trim: true,
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
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip_code: {
        type: Number,
    },
    streetAddress: {
        type: String,
    },
    optionalUnitNumber: {
        type: String,
    }
});

const User = model('User', userSchema);

module.exports= User;
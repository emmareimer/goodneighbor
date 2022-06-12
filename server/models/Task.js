const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    name: {
        type: String,
        // required: true,
    },
    taskDescription: {
        type: String,
        // required: true,
    },
    open: {
        type: Boolean,
    },
    category: {
        type: String,
        // required: true,
    },
    instructions: {
        type: String,
        // required: true,
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    claimed_by:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
    ,
    completed_by:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
    ,
    completed_at: {
        type: Date,
        default: Date.now,
    },
    contactless: {
        type: Boolean,
    },
    city: {
        type: String,
        // required: true,
    },
    state: {
        type: String,
        // required: true,
    },
    zipcode: {
        type: Number,
        // required: true,
    },
    streetAddress: {
        type: String,
        // required: true,
    },
    optionalUnitNumber: {
        type: String,
    }
});

const Task = model('Task', taskSchema);

module.exports = Task;
const { Schema, model } = require('mongoose');

const taskSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    taskDescription: {
        type: String,
        required: true,
    },
    open: {
        type: Boolean,
    },
    category: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    created_by: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
    claimed_by: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    completed_by: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    completed_at: {
        Type: Date,
    },
    contactless: {
        Type: Boolean,
    },
    city: {
        Type: String,
        required: true,
    },
    state: {
        Type: String,
        required: true,
    },
    zipcode: {
        Type: Number,
        required: true,
    },
    streetAddress: {
        Type: String,
        required: true,
    },
    optionalUnitNumber: {
        Type: String,
    }
});

const Task = model('Task', taskSchema);

module.exports = Task;
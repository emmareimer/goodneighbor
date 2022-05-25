const { Schema, model } = require('mongoose');

const taskSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    task_text: {
        type: String,
        required: true,
    },
    open: {
        type: Boolean,
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
    completed_at: {
        Type: Date,
    },
    contactless: {
        Type: Boolean,
    },
});

const Task = model('Task', taskSchema);

module.exports = Task;
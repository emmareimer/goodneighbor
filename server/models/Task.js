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
    created_by: [userSchema],
    created_at: {
        type: Date,
    },
    claimed_by: [userSchema],
    completed_at: {
        Type: Date,
    },
    contactless: {
        Type: Boolean,
    },
});

const Task = model('Task', taskSchema);

module.exports = Task;
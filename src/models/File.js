const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toObject: { vituals: true },
    toJSON: { virtuals: true }
});

File.virtual('url').get(function () {
    const url = 'http://192.168.3.13:3333'
    return `${url}/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model('File', File);
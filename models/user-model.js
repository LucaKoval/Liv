const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name: { type: String, required: true },
    doctor: { type: String, required: true },
    hospital: { type: String, required: true },
    conditions: { type: String, required: true },
    approved: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('User', User)

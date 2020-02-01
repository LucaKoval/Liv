const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    date_of_birth: { type: String, default: '' },
    doctor: { type: String, default: '' },
    hospital: { type: String, default: '' },
    blood_type: { type: String, default: '' },
    conditions: { type: String, default: '' },
    medications: { type: String, default: '' },
    medical_history: { type: String, default: '' },
    approved: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('User', User)

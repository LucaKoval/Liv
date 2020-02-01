const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    doctor: { type: String, required: true },
    hospital: { type: String, required: true },
    blood_type: { type: String, required: true },
    conditions: { type: String, required: true },
    medications: { type: String, required: true },
    medical_history: { type: String, required: true },
    approved: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('User', User)

const mongoose = require('mongoose')

// TODO: Not have this in plaintext
let password = 'PhorPhysics5'
let passwordEncoded = encodeURIComponent(password)

let uri = 'mongodb+srv://SpaceProtocol:'+passwordEncoded+'@cluster0-dtlxt.mongodb.net/test?retryWrites=true&w=majority'

mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

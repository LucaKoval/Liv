const User = require('../models/user-model')

createUser = (req, res) => {

    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user'
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user.save(function(err, user) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                err,
                message: 'User not created!'
            })
        } else {
            console.log('No error! User was created with id ' + user._id + '.')
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        }
    })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }

        // TODO: Make it dynamic
        user.name = body.name
        user.cellPhone = body.cellPhone
        user.password = body.password
        user.date_of_birth = body.date_of_birth
        user.doctor = body.doctor
        user.hospital = body.hospital
        user.blood_type = body.blood_type
        user.conditions = body.conditions
        user.medications = body.medications
        user.medical_history = body.medical_history
        user.approved = body.approved

        user.save(function(err, user) {
            if (err) {
                console.log(err)
                return res.status(404).json({
                    err,
                    message: 'User not updated!',
                })
            } else {
                console.log('No error! User with id ' + user._id + ' was updated.')
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            }
        })
    })
}

updateUserByName = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ name: req.params.name }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }

        // TODO: Make it dynamic
        user.name = body.name
        user.cellPhone = body.cellPhone
        user.password = body.password
        user.date_of_birth = body.date_of_birth
        user.doctor = body.doctor
        user.hospital = body.hospital
        user.blood_type = body.blood_type
        user.conditions = body.conditions
        user.medications = body.medications
        user.medical_history = body.medical_history
        user.approved = body.approved

        user.save(function(err, user) {
            if (err) {
                console.log(err)
                return res.status(404).json({
                    err,
                    message: 'User not updated!',
                })
            } else {
                console.log('No error! User with name ' + user.name + ' was updated.')
                return res.status(200).json({
                    success: true,
                    name: user.name,
                    message: 'User updated!',
                })
            }
        })
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'User not found' })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'User not found' })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserByName = async (req, res) => {
    await User.findOne({ name: req.params.name }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'User not found' })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: 'No users stored' })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

sendToPhone = async (id, res, userName) => {
    console.log('id: ' + id)
            await User.findOne({ _id: id }, (err, user) => {
                if (err) {
                    return res.status(400).json({ success: false, error: err })
                }
            
                if (!user) {
                    return res
                        .status(404)
                        .json({ success: false, error: 'User not found' })
                }

                let twilio = require('twilio')
    
                let accountSid = 'AC4a57deb020a74ad9f5b39388046c1224'; // Your Account SID from www.twilio.com/console
                let authToken = 'e04a4208e8d17e15b879ea60b1d2a7d3';   // Your Auth Token from www.twilio.com/console
                
                let client = new twilio(accountSid, authToken);
                
                client.messages.create({
                    body: 'Notification! ' + userName + ' is in need of help!',
                    to: '+1'+user.cellPhone,  // Text this number
                    from: '+12026290604' // From a valid Twilio number
                })
                .then(
                    (message) => console.log(message.sid)
                )
            
                return res.status(200).json({ success: true })
            })
}

blast = async (req, res) => {
    console.log('id: ' + req.body.uniqueID)
    console.log('lat: ' + req.body.latitude)
    console.log('longitude: ' + req.body.longitude)

    await User.findOne({ _id: req.body.uniqueID }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: 'User not found' })
        }

        console.log(user.approved)
        console.log(user.cellPhone)

        for (let i = 0; i < user.approved.length; i++) {
            sendToPhone(user.approved[i], res, user.name)
        }
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    getUserByName,
    blast,
    updateUserByName
}

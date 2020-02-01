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
        user.creator = body.creator
        user.date = body.date
        user.title = body.title
        user.answers = body.answers
        user.length = body.length

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

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
}

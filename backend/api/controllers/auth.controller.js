const { User } = require('../models/user.model')
const { Shelter } = require('../models/shelter.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signup(req, res) {  

  try {
    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT))
    const hash = bcrypt.hashSync(req.body.password, salt)
    req.body.password = hash
    const user = await User.create(req.body, {
      fields: ['name', 'userName', 'email', 'password', 'role', 'followers']
    })
    const token = jwt.sign({ email: user.email, type: 'user' }, process.env.JWT_SECRET, { expiresIn: '3h' })

    return res
      .status(200)
      .json({
        message: 'User created',
        result: { token: token, id: user.id, role: user.role,}


      })
  } catch (error) {
    res.status(500).json({
      message: 'Error signing up',
      result: error
    })
  }
}

async function login(req, res) {
  try {
    const shelter = await Shelter.findOne({
      where: {
        email: req.body.email
      }
    })

    if (shelter === null) {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (!user && !shelter) { return res.status(404).send('Error: Email or Password incorrect') }
      if (user) {
        const comparePassUser = bcrypt.compareSync(req.body.password, user.password)
        if (comparePassUser) {
          const payload = { email: user.email, type: 'user' }
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' })
          return res.status(200).json({
            message: "Login succesful",
            result: {
              token,
              role: user.role,
              id: user.id
            }
          })
        }
      }
    }

    if (shelter) {
      const comparePassShelter = bcrypt.compareSync(req.body.password, shelter.password)
      if (comparePassShelter) {
        const payload = { email: shelter.email, type: 'manager' }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' })
        return res.status(200).json({
          message: "Login succesful",
          result: {
            token,
            role: shelter.role,
            id: shelter.id
          }
        })
      }
      return res.status(404).json({ message: 'Error: Email or Password incorrect' })
    }
  }
  catch (error) {
    res.status(500).json({
      message: 'Error Log in ',
      result: error
    })
  }
}

async function signupShelter(req, res) {
  try {
    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT))
    const hash = bcrypt.hashSync(req.body.password, salt)
    req.body.password = hash
    const shelter = await Shelter.create(req.body, {
      fields: ['shelterName', 'email', 'password', 'cif', 'role', 'tlf']
    })
    const token = jwt.sign({ email: shelter.email, type: 'manager' }, process.env.JWT_SECRET, { expiresIn: '3h' })

    return res
      .status(200)
      .json({
        message: 'Shelter created',
        result: {
          token: token,
          id: shelter.id,
          role: shelter.role,
        },
      })
  } catch (error) {
    console.error('ERROR EN SIGNUPSHELTER:', error)
    res.status(500).json({
      message: 'Error signing up',
      result: error.message
    })
  }
}


module.exports = {
  signup,
  login,
  signupShelter
}
const User = require("../models/user")
const bcrypt = require("bcrypt")



exports.createUser = async function(req, res) {
    try {
      const salt = await bcrypt.genSalt(10)
      const hashedPass = await bcrypt.hash(req.body.address, salt)
  
      const newUser = new User({
        image: req.body.image,
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        address: hashedPass,
        birth: req.body.birth
      })
  
      const user = await newUser.save()
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
exports.getUsers = async function(req, res) {
  try {
  const algo = await User.find() 
  res.json(algo)
  } catch {
    res.status(401).json({ message: 'No se a podido obtener los usuarios correctamente' });
  }
};
const User = require('../models/user.js');
const jwt = require('jsonwebtoken'); // import the jwt library
const bcrypt = require('bcrypt'); // import bcrypt

const SALT_ROUNDS = 6; // // tell bcrypt how many times to randomize the generation of salt. usually 6 is enough.

module.exports = {
    create,
    login,  
};

async function create(req,res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
        console.log("hello5")
        const user = await User.create({name: req.body.name, email:req.body.email, password:hashedPassword,});
        console.log("hello4")
        // creates a jwt (analogy: employee ID card)
        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
        console.log("hello3")
        res.status(200).json(token)
        console.log("hello")
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}

async function login(req,res) {
    try {
        const user = await User.findOne({ email: req.body.email})
        if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();

        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
        res.status(200).json(token)
        console.log("hello2")
    } catch {
        res.status(400).json('BAD CREDENTIALS');
    }
}
const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get('/', (req, res) => {
    res.send('Welcome to Router Page');
})

router.post('/register', async (req, res) => {
    const {name, email, age, mobile, work, add, desc} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !desc){
        return res.status(422).json("Plz fill the form properly");
    }

    try {
        // finding the preUser first
        const preUser = await User.findOne({email});
        if(preUser){
            return res.status(422).json("This user is already present");
        }else{
            const user = new User({name, email, age, mobile, work, add, desc});
            await user.save();
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(422).json(error);
    }
})

//get UserData
router.get('/getData', async (req, res) => {
    try {
        const userData = await User.find();
        res.status(201).json(userData);
    } catch (error) {
        res.status(422).json(error);
    }
})

//get Individual User
router.get('/getData/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const userData = await User.findById(id);
        if(!userData){
            return res.status(422).json("No user found");
        }
        res.status(201).json(userData);
    } catch (error) {
        res.status(422).json(error)
    }
})

// Update userData
router.patch('/updateData/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updateUser = await User.findByIdAndUpdate(id, req.body,{
            new: true
        })
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(422).json(error);
    }
})

//Delete UserData
router.delete("/delete/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete({_id:id});
        res.status(201).json("User Deleted");
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;
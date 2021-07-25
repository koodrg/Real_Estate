const User = require('../../models/User')
const bcrypt = require("bcryptjs")

const signUp = (req,res)=>{
    console.log(req.body)
    const {name,username,password} = req.body
    if(!username || !password || !name){
        res.status(422).json({error:"Please fill all the field"})
    }
    User.findOne({username:username})
    .then((saveUser)=>{
        if(saveUser){
            res.status(422).json({error:"User already exists with that email"})
 
        }
        bcrypt.hash(password,12)
        .then(hashedpassword => {
            const user = new User({
                username,
                name,
                password: hashedpassword,
            })
    
            user.save()
            .then(user =>{
                res.json({message:"save successfully"})
            })
            .catch(err => {
                console.log(err)
            })
            
        })
    })
    .catch(err => {
        console.log(err)
    })

}

module.exports = signUp;
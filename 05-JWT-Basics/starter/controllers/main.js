
const CustomAPIError = require('../errors/custom-error')


const login = async (req,res)=>{
    const {username, password}= req.body;
    if(!username || password){
        throw new CustomAPIError('Please provide email and password')
    }
    console.log(username, !password)
const id = new Date().getDate()
    const token = jwt.sign({id, usernamen}, process.env.JWT_SECRET,{expiresIn: '30d'} )
    
    res.send('Fake login/register/signup Route')
};

const dashboard = async (req,res)=>{
    const luckyNumber = Math.floor(Mathe.random()*100)
    res.status(200).json({msg: `Hello, Mariana Osorio`, secret:`Here is your authorazied data, your lucky number is ${luckyNumber}`})
};

module.exports = {
    login, 
    dashboard,
}
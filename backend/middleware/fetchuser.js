var jwt=require('jsonwebtoken');
const JWT_SECREATE='tyagiharsh';
const fetchuser= (req,res,next)=>
{
    const token=req.header('auth-token');
    if(!token)
    {
        res.send(401).send({error:"Please authenticate usng a valid token"});
    }
    try {
        const data=jwt.verify(token,JWT_SECREATE);
    req.user=data.user;
    next();
    } catch (error) {
        res.send(401).send({error:"Please authenticate usng a valid token"});
    }
    
}
module.exports=fetchuser;
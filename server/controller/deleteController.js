const userDb = require('../model/model');

exports.delete = (req,res) => {
    const userId = req.params.userId;
    userDb.findByIdAndDelete(userId)
    .then(result => {
        if (!result) {
            res.status(401).send({
            massge:`Canot delete the user with Id: ${userId}. Maybe the user id has wrong`
            })
        }else{
            res.send({
            massge:`The user with Id: ${userId} deleted succefully`});
        }
    })
    .catch(err => {
        res.status(501).send({ massge:err})
    })
}
const userDb = require('../model/model');
 
//find all users or specific users
exports.find = (req,res) => {
    
    if (req.query.id) {
        const id = req.query.id;
        console.log(id);
        console.log('hi');
        userDb.findById(id)
        .then( result => {
            if(!result){
                res.status(404).send({
                    massge:'User does not exist with this userId'+id
                });
            }
            res.send(result)
        })
        .catch( err => {
            res.status(501).send({
                massage:err
            })
        });
    }else{
    userDb.find()
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        res.status(501).send({
            massge:err
        })
    });
    }
}




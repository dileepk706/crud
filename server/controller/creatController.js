const userDb = require('../model/model');

exports.create = (req,res) => {

    if ( !req.body.name,!req.body.gender,!req.body.status) {
        res.status(501).send({massge:'Content canot be empty'});
    }else{
        const user = new userDb({
            name:req.body.name,
            email:req.body.email,
            gender:req.body.gender,
            status:req.body.status
        });
        user.save(user)             
        .then(result => {
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(501).send({ massge:err.massge ||'some errors are found \n Or please check the provided email id' })
        });  
    }
   
}

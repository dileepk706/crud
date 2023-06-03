const userDb = require('../model/model');
 
exports.update = (req,res) => {
    if (!req.body) {
        res.status(404).send({massage:'Data for update canot be empty'})
    }
    const userId = req.params.userId;
    userDb.findById(userId)
    .then( result => {
        if (!result) {
            res.status(404).send({
            massge:`Canot update the user with userId: ${userId}. Maybe the userId has wrong..Check that`  
            })
        }
        result.name = req.body.name
        result.email = req.body.email
        result.gender = req.body.gender
        result.status = req.body.status

        return result.save()
    })
    .then( result => {
        res.status(200).send(result)
    })
    .catch( err => {
        res.status(500).send({
            massage:err
        })
    });

}

    // userDb.findByIdAndUpdate(userId,req.body,{useFindAndModify:false})
    // .then( result => {
    //     if (!result) {
    //         res.status(401).send({
    //             massge:`Canot update the user with userId: ${userId}. Maybe the userId has wrong..Check that`
    //         });
    //     }else{
    //         res.send(result);
    //     };
    // })
    // .catch( err => {
    //     res.status(500).send({
    //         massage:err
    //     });
    // });


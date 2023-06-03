const axios=require('axios');

exports. homePage = (req,res) => {
    axios.get('http://localhost:3000/api/user')
    .then(response=>{
        var data=response.data;
        res.render('index',{user:data});
    })
    .catch(err =>{
        res.status(501).send({
            massage:err
        })
    });  
};

exports. add_user = (req,res) => {
    res.render('add_user');
};

exports. update_user = (req,res) => {
    console.log('hello'+req.query.id); 
    axios.get('http://localhost:3000/api/user',{params:{id:req.query.id}})
    .then( response => {
        res.render('update_user',{user:response.data});
    })
    .catch(err =>{
        res.status(501).send({
            Massage:err
        })
    });
};
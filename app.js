
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());

//env file setup
dotenv.config({path:'config.env'});
const PORT = process.env.PORT;l

//log requests
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse requst to body parser
//app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set('view engine','ejs');

//load static asset
app.use('/css',express.static(path.resolve(__dirname,'assets/css')) );
app.use('/img',express.static(path.resolve(__dirname,'assets/img')) );
app.use('/js',express.static(path.resolve(__dirname,'assets/js')) );

//load routers
// const router = require('./server/routes/router');
// app.use(router);

app.get('/',(req,res)=>{

    let meals=[
    {
        strMealThumb:'https://t3.ftcdn.net/jpg/02/48/92/96/240_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg'
    },
    {
        strMealThumb:'https://t3.ftcdn.net/jpg/02/48/92/96/240_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg'
    },
    {
        strMealThumb:'https://t3.ftcdn.net/jpg/02/48/92/96/240_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg'
    },
    {
        strMealThumb:'https://t3.ftcdn.net/jpg/02/48/92/96/240_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg'
    },
    
    ]
    res.json({meals:meals})
})



app.listen(3001,()=>{ console.log(`Server is running on http://localhost:${PORT}`);}) 



  
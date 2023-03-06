import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res) =>{

    console.log('Nuxt get /')
    res.json({
        success:true
    })
})

app.post('/',(req,res) =>{
    
    res.cookie('test',{
        test:true
    },{
        httpOnly:true,
        
    })
    res.json({
        code:200,
        success:true
    })
})

module.exports = {
 
    path: "/api",
    handler: app,
  };
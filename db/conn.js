const mongoose = require('mongoose');


const DB = "mongodb+srv://Nivethitha:83Hh-Gm_SP4WBQj@cluster0.4tn5tmz.mongodb.net/mernstack?retryWrites=true&w=majority"




mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('connection started')).catch((error)=>console.log(error.message));
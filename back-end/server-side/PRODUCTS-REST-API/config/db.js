const mongoose = require('mongoose'); 

const initiateDBconnection = async () => { 
  try{
        await mongoose.connect(process.env.MONGO_CONNECTION_URI); 
        console.log('connected to mongo db server');
  }    catch(error){
        console.log(error);
  }

};
module.exports= initiateDBconnection;
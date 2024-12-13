
const express = require ("express");
const app = express (); 







const dotenv= require('dotenv'); 



dotenv.config({ 
  path: './config/.env'
  });
  
const PORT =process.env.PORT; 


const initiateDBconnection= require('./config/db'); 



app.listen(PORT,async()=> {


  console.log(`server started and listening to port ${PORT}`);
  await initiateDBconnection(); 
});



const productsRouter = require ('./routes/products');
app.use('/products', productsRouter); 






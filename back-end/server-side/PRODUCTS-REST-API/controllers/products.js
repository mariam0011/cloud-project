const ProductsService= require('../services/products'); 

module.exports.getProducts=async(req,res)=>{
   try {
    const products= await ProductsService.findAllProducts(); 

    res.send({products});
    console.log(`server started and listening to port ${PORT}`);
 }  catch(err){
    res.status(500);
    res.send({
      error:err , msg: 'error from controller'
    });

   }

};
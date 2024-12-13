const ProductModel= require('../models/Product'); 

module.exports.findAllProducts=async()=>{ 
 try {
    const products= await ProductModel.find();
    return this.findAllProducts; 
 }  catch(err){
    throw new Error ('couldnt retrive products');
 }

};


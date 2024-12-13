const{Schema,model}=require('mongoose'); 


const productSchema= new Schema({   
  id:{
    type:'number',
    required: true
  },

  name:{
    type:'string',
    required: true
  },

  description:{
    type:'string',
    required: true
  },


  price:{
    type:'number',
    required: true
  },


  image:{
    type:'string'
  }

});



const ProductModel = model('product',productSchema)
module.exports=ProductModel;



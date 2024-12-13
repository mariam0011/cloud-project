const{Schema,model}=require('mongoose'); 



const shopSchema= new Schema({   
  id:{
    type:'number',
    required: true
  },

  name:{
    type:'string',
    required: true
  },

  logo:{
    type:'string',
    required: true
  },


  customers:{
    type:'string',
  },

});



const ShopModel = model('product',shopSchema)
module.exports=ShopModel;


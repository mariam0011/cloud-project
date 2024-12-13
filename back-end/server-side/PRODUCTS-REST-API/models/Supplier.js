
const{Schema,model}=require('mongoose');
const SupplierSchema= new Schema({
  
  name:{
    type:'string',
    required: true
  },

  email:{
    type:'string',
    required: true
  },




  address:{
    type:'string',
    required: true
  },


  location:{
    lat:{
        type: 'Number',
        required: true
    },
    lng:{
        type: 'Number',
        required: true
    },

    imgURL:{
        type:'string'
      }


  }




});

const SupplierModel = model('supplier',SupplierSchema);
module.exports=SupplierModel;








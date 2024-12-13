const SupplierModel= require('../models/Supplier');

module.exports.addNewSupplier= async (supplierInfo ,supplierCoords)=> {
  const supplier=new SupplierModel({
    name:supplierInfo.name,
    email:supplierInfo.email,
    address:supplierInfo.address,
    imgURL:supplierInfo.imgURL,
    location:{
        lat:supplierCoords.lat,
        lng:supplierCoords.lng
    }




  });
try{
    const addeddSupplier= await supplier.save()
    return addeddSupplier;

}catch(error){
    console.log(error)
    throw new Error('couldnot find supplier')
}



};



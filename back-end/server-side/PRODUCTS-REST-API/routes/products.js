const productsController = require ('../controllers/products');

const {Router} = require ('express'); 
const productsRouter=Router();


productsRouter.get('/',productsController.getProducts); 
module.exports=productsRouter;
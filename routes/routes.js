var express = require('express');
var productCtrl = require('./productController');
var wishlistCtrl = require('./wishlistController');

var router = express.Router();

router.route('/product').post(productCtrl.postProduct);
router.route('/product').get(productCtrl.getAllProducts);

router.route('/wishlist').post(wishlistCtrl.newWishlist);
router.route('/wishlist').get(wishlistCtrl.getAllWishlists);
router.route('/wishlist/product/add').put(wishlistCtrl.addProductToWishlist);

module.exports = router;
var Cart = require('../model/cart');
var Wishlist = require('../model/wishlist');

module.exports = {
    
    postCart: function(req, res){
        var cart = new Cart();
        cart.title = req.body.title;
        cart.price = req.body.price;
        cart.save(function(err, savedCart){
            if (err) {
                res.status(500).send({"error":"Could not save product"});
            } else {
                res.status(200).send(savedProduct);
            }
        });
    },
    getAllCart: function(req, res){
        Product.find({}, function(err, products){
            if (err) {
                res.status(500).send({"error":"Could not fetch products"});
            } else {
                res.send(products);
            }
    
        });
    }

}
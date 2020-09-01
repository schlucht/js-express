const Product = require('../models/product');
const carts = []
exports.getProducts = (req, res, next) => {  
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId 
  const pro = Product.findById(prodId, (p => {    
    console.log(pro)
    res.render('shop/product-detail', {
      prod: p,
      path: '/products',
      pageTitle: 'Product Details',
    })
  }))
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};
exports.postCart = (req, res, next) => {
  const id = req.body.productId
  Product.findById(id, (pro => {
    carts.push(pro)    
    console.log(pro)
    res.render('shop/orders', {
      orders: carts,
      pageTitle: 'Orders',
      path: '/orders'
    })  
  }))
};
exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Order your Product'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

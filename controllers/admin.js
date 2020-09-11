const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  console.log(req.query.productid)
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/edit-product'        
    });
};
exports.getEditProduct = (req, res, next) => {  
  const id = req.params.productid
  const edit = req.query.edit == 'true' ? true : false
  console.log(edit + ' ' + id)
  if (edit) {
    Product.findById(id, (prod => {   
      if (!prod) {
        return res.redirect('/')
      }
      res.render('admin/edit-product', {
            pageTitle: 'Add Product',
            path: '/admin/edit-product',
            product: prod ,
            editing: edit 
        });
    }))
  } else {
    res.render('admin/edit-product', {
            pageTitle: 'Add Product',
            path: '/admin/edit-product',
            product: null ,
            editing: edit 
        });
  }    
};

exports.postEditProduct = (req, res, next) => {  
  const product = req.body
  
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, 
            req.body.imageUrl, 
            req.body.price, 
            req.body.description);
    product.save();
    res.redirect('/');
};
exports.postDelProduct = (req, res, next) => {
  
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Product',
            path: '/admin/products'            
        });
    });
};
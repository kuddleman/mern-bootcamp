const Category = require('../models/category')

exports.getCategoryById = ( req, res, next, id ) => {
  
  Category.findById( id ).exec(( err, cate ) =>{
    if ( err ) {
      return res.status( 400 ).json({
        error: 'Category not found in database'
      })
    }

  })
  req.category = cate
  next()
}

exports.createCategory  = ( req, res ) => {
  const category = new Category( req.body )
  category.save(( err, category ) =>{
    if( err ) {
      return res.status( 400 ).json({
        error: 'Category could not be saved in database'
      })
    }
    res.json({ category })
  })
}
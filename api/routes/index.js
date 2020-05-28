var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('/views/index.html', { title: 'Online Home Inventory Manager' });
});

// endpoints 
app.post('/addinventory', (req, res) => {
  // add inventory to database
  
});



module.exports = router;

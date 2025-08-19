const express = require('express');
const router = express.Router();


//=================================
//          Recommned
//=================================

router.post('/', (req, res) => {

  console.log(req.body)

})


module.exports = router;
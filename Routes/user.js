const { Router, json } = require("express")
var express = require('express');
const { find } = require("../databaseModels/User");
var router = express.Router()
var User = require('../databaseModels/User');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

  // define the home page route
  router.post('/register', async (req, res)=> {
      try{
        const user = await new User(req.body)
        user.save();
        console.log(req.body)
        res.send(user)
      }
      catch(e)
      {
          res.send(e);
      }
    
  })

  router.delete('/delete/:id', async (req, res)=> {
    try{
     
      console.log(req.params.id)
      const user = await User.findByIdAndDelete(req.params.id)
      res.send(user)
    }
    catch(e)
    {
        res.send(e);
    }
  
})

router.put('/update/:id', async (req, res)=> {
  try{
    console.log(req.params.id)
    const user = await User.findOneAndUpdate(req.params.id,req.body)
    
     
    res.send(user)
  }
  catch(e)
  {
      res.send(e);
  }

})

router.get('/:id', async (req, res)=> {
  try{
    
    console.log(req.params.id)
    const user = await User.findById(req.params.id)
    // user.update(req.body)
    res.send(user);
  }
  catch(e)
  {
      res.send(e);
  }

})



  router.get('/', async(req, res)=> {
      try{
        const user = await User.find({});
        console.log(user)
        res.send(user)
      }
      catch(e)
      {
          res.send(e);
      }
    
  })


  
  module.exports = router
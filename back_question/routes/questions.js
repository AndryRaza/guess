var express = require('express');
var router = express.Router();

const questionC = require('../src/controllers/question/controller')

/* GET home page. */
router.post('/create', function(req, res, next) {
  questionC.create(req,res)
});

router.get('/random',function(req,res,next){
  questionC.getRandomQuestion(req,res)
})

module.exports = router;



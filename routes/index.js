var express = require('express');
var router = express.Router();
const axios = require('axios');
var mob ;
var age;
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});



router.post('/selectlanguage',function(req,res,next){
 
   res.render("selectlang");

})
router.get('/informationPage',function(req,res,next){
   res.render('info');

})

router.get('/survey',function(req,res,next){
   console.log(req.query.selectedState);
   console.log(req.query.selectedDistrict);
   console.log(req.query.gender);
   console.log(req.query.is_resident);
   console.log(req.query.age);
   age = req.query.age;
  res.render("survey")

})

// router.post("/survey",function(req,res,next){

//    console.log(req.body.FQ1)
//    console.log(req.body.FQ3)
//    console.log(req.body.FQ4)
//    console.log(req.body.FQ5)
//    console.log(req.body.FQ6)
//    console.log(req.body.FQ7)
//    console.log(req.body.FQ8)
//    console.log(req.body.FQ9)



//    res.send("hello")


// })


router.get('/thanks',function(req,res,next){
  res.render("thanks");
})

router.post('/test',async function(req,res,next){
  try{
    var FQ1 = req.body.FQ1 ;
    var FQ2 = req.body.FQ2;
    var FQ3 = req.body.FQ3;
    var FQ4 = req.body.FQ4;
    var FQ5 = req.body.FQ5;
    var FQ6 = req.body.FQ6;
    var FQ7 = req.body.FQ7;
    var FQ8 = req.body.FQ8;
    var FQ9 = req.body.FQ9;
   //api
      const result = await axios.get('http://api.swachh.city/v1_1/survey/7/polls?vendor_name=Morena&access_key=zl4o7yja',{
        "data": [
          {
          "id": 1,
          "title": "What is your age -- (15-99)?",
          "isRequired": true,
          "locale": "What is your age -- (15-99)?",
          "type":  "text"
          },
          {
          "id": 2,
          "title": "Is the waste collected daily from your household?",
          "isRequired": true,
          "locale": "Is the waste collected daily from your household?",
          "type": "radio_btn",
          "options": `${FQ1}`
          },
          {
          "id": 3,
          "title": "Do you segregate waste (Wet & Dry) separately in your household?",
          "isRequired": true,
          "type": "radio_btn",
          "options":`${FQ2}`,
          "locale": "Do you segregate waste (Wet & Dry) separately in your household?"
          },
          {
          "id": 4,
          "title": "Are the drains or nallahs in your neighbourhood visibly clean?",
          "isRequired": true,
          "type": "radio_btn",
          "options":`${FQ3}`,
          "locale": "Are the drains or nallahs in your neighbourhood visibly clean?"
          },
          {
          "id": 5,
          "title": "Are you aware of the RRR (Reduce, Reuse and Recycle) Center in your city?",
          "isRequired": true,
          "type": "radio_btn",
          "options":`${FQ4}`,
          "locale": "Are you aware of the RRR (Reduce, Reuse and Recycle) Center in your city?"
          },
          {
          "id": 6,
          "title": "Have you recently used a Community/ Public Toilet (CT/PT) in your city?",
          "isRequired": true,
          "type": "radio_btn",
          "options": `${FQ5}`,
          "locale": "Have you recently used a Community/ Public Toilet (CT/PT) in your city?"
          },
          {
          "id": 7,
          "title": "Are the Community/ Public Toilets in the city clean & well maintained?",
          "isRequired": true,
          "type": "radio_btn",
          "options":`${FQ6}` ,
          "locale": "Are the Community/ Public Toilets in the city clean &well maintained?"
          },
          {
          "id": 8,
          "title": "Are you aware that you can find the nearest Community/ Public Toilet (CT/PT) on digital maps?",
          "isRequired": true,
          "type": "radio_btn",
          "options":`${FQ7}`,
          "locale": "Are you aware that you can find the nearest Community/ Public Toilet (CT/PT) on digital maps?"
          },
          {
          "id": 9,
          "title": "How will you rate the overall cleanliness of your neighbourhood?",
          "isRequired": true,
          "type": "radio_btn",
          "options":`${FQ8}`,
          "locale": "How will you rate the overall cleanliness of your neighbourhood?"
          },
          {
          "id": 10,
          "title": "How will you rate the overall cleanliness of your city?",
          "isRequired": true,
          "type": "radio_btn",
          "options":`${FQ9}`,
          "locale": "How will you rate the overall cleanliness of your city?"
          }
          ]
      })
      console.log(result);
     console.log(FQ1,FQ2,FQ3,FQ4,FQ5,FQ6,FQ7,FQ8,FQ9);
      res.redirect("/thanks")
    
  }catch(err){
    console.log(err);
   res.redirect("/")
  }

})
module.exports = router;

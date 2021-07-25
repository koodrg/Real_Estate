const { RealEstate } = require("../../models");

const getAllRealEstate = async function (req, res) {
  try {
    //console.log(123);
    const realEstate = await RealEstate.find((err,util)=>{
      if(err){
        return console.log(err)
      } else{
        res.render('realestate/all-real-estate',{
          util: util
        });
      }
    });
    // console.log('access')
    // res.set({
    //   "Access-Control-Allow-Credentials": "true",
    //   "Access-Control-Allow-Methods": "GET, POST,   ",
    //   "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    //   "Access-Control-Allow-Origin": "*",
    // });
    // res.status(200).json(realEstate);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = getAllRealEstate;
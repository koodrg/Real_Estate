const {Categories, Utilities, RealEstate } = require('../../src/models/index')


const MigrateApartmentForSale = async () => {
  const { data } = require("./apartmentForSale.json");
  const category = await findCategory("Căn hộ bán")
  
  data.map(async (apartmentDetail) => {
    let utilitiesList = apartmentDetail.utilList

    let listUtilities = await createUtilitiesList(utilitiesList)


    let newRealEstate = {
      _id: null,
      id_category: category,
      name: apartmentDetail.apartment_name,
      area: apartmentDetail.area,
      area_by_num: apartmentDetail.area_by_num,
      direction: apartmentDetail.direction,
      num_bedroom: apartmentDetail.num_bedroom,
      num_wc: apartmentDetail.num_wc,
      full_address: apartmentDetail.full_address,
      detail_address: apartmentDetail.detail_address,
      price: apartmentDetail.price,
      price_by_num: apartmentDetail.price_by_num,
      more_description: apartmentDetail.more_description,
      imgList: apartmentDetail.imgList,
      utilsList: listUtilities,
      isConfirmed: true,
      postedBy: null,
    }; 
  
    let realEstate = new RealEstate(newRealEstate)

    //console.log(newRealEstate)
      try {
        const saveRealEstate = await realEstate.save();
        if (saveRealEstate) console.log(saveRealEstate);
      } catch (error) {
        console.log(error);
      }
    })

    //console.log(listUtilities)

}

const MigrateApartmentForRent = async () => {
  const { data } = require("./apartmentForRent.json");
  const category = await findCategory("Căn hộ cho thuê")
  
  data.map(async (apartmentDetail) => {
    let utilitiesList = apartmentDetail.utilList

    let listUtilities = await createUtilitiesList(utilitiesList)


    let newRealEstate = {
      _id: null,
      id_category: category,
      name: apartmentDetail.apartment_name,
      area: apartmentDetail.area,
      area_by_num: apartmentDetail.area_by_num,
      direction: apartmentDetail.direction,
      num_bedroom: apartmentDetail.num_bedroom,
      num_wc: apartmentDetail.num_wc,
      full_address: apartmentDetail.full_address,
      detail_address: apartmentDetail.detail_address,
      price: apartmentDetail.price,
      price_by_num: apartmentDetail.price_by_num,
      more_description: apartmentDetail.more_description,
      imgList: apartmentDetail.imgList,
      utilsList: listUtilities,
      isConfirmed: true,
      postedBy: null,
    }; 
  
    let realEstate = new RealEstate(newRealEstate)

    //console.log(newRealEstate)
      try {
        const saveRealEstate = await realEstate.save();
        if (saveRealEstate) console.log(saveRealEstate);
      } catch (error) {
        console.log(error);
      }
    })

    //console.log(listUtilities)

}

const MigrateHometownForRent = async () => {
  const { data } = require("./hometownForRent.json");
  const category = await findCategory("Nhà phố cho thuê")
  
  data.map(async (apartmentDetail) => {
    let utilitiesList = apartmentDetail.utilList

    let listUtilities = await createUtilitiesList(utilitiesList)


    let newRealEstate = {
      _id: null,
      id_category: category,
      name: apartmentDetail.apartment_name,
      area: apartmentDetail.area,
      area_by_num: apartmentDetail.area_by_num,
      direction: apartmentDetail.direction,
      num_bedroom: apartmentDetail.num_bedroom,
      num_wc: apartmentDetail.num_wc,
      full_address: apartmentDetail.full_address,
      detail_address: apartmentDetail.detail_address,
      price: apartmentDetail.price,
      price_by_num: apartmentDetail.price_by_num,
      more_description: apartmentDetail.more_description,
      imgList: apartmentDetail.imgList,
      utilsList: listUtilities,
      isConfirmed: true,
      postedBy: null,
    }; 
  
    let realEstate = new RealEstate(newRealEstate)

    //console.log(newRealEstate)
      try {
        const saveRealEstate = await realEstate.save();
        if (saveRealEstate) console.log(saveRealEstate);
      } catch (error) {
        console.log(error);
      }
    })
    //console.log(listUtilities)
}

const MigrateHometownForSale = async () => {
  const { data } = require("./hometownForSale.json");
  const category = await findCategory("Nhà phố bán")
  
  data.map(async (apartmentDetail) => {
    let utilitiesList = apartmentDetail.utilList

    let listUtilities = await createUtilitiesList(utilitiesList)


    let newRealEstate = {
      _id: null,
      id_category: category,
      name: apartmentDetail.apartment_name,
      area: apartmentDetail.area,
      area_by_num: apartmentDetail.area_by_num,
      direction: apartmentDetail.direction,
      num_bedroom: apartmentDetail.num_bedroom,
      num_wc: apartmentDetail.num_wc,
      full_address: apartmentDetail.full_address,
      detail_address: apartmentDetail.detail_address,
      price: apartmentDetail.price,
      price_by_num: apartmentDetail.price_by_num,
      more_description: apartmentDetail.more_description,
      imgList: apartmentDetail.imgList,
      utilsList: listUtilities,
      isConfirmed: true,
      postedBy: null,
    }; 
  
    let realEstate = new RealEstate(newRealEstate)

    //console.log(newRealEstate)
      try {
        const saveRealEstate = await realEstate.save();
        if (saveRealEstate) console.log(saveRealEstate);
      } catch (error) {
        console.log(error);
      }
    })
    //console.log(listUtilities)
}





const findCategory = async (cateName) => {
  try {
    const category = await Categories.findOne({ cate_name: cateName });
    return category._id
  } catch(err){
    console.log(err)
  }
}

const detectUtility = async (utilName) => {
      try {
        const utility = await Utilities.findOne({ name: utilName });
        return utility._id
      } catch (err) {
        console.log(err);
      }
}

const createUtilitiesList = async (listUtilitiesName) => {
    const result = listUtilitiesName.map(async (name) => {
      const obj = await detectUtility(name)
      return obj._id;
    });
    return await Promise.all(result);
    //return result
  };

function MigrateRealEstate(){
    //MigrateApartmentForSale()
    //MigrateApartmentForRent()
    //MigrateHometownForRent()
    //MigrateHometownForSale()
}


MigrateRealEstate()

module.exports = MigrateRealEstate
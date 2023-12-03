//1.convert rawdata(rawdata array of objects to nested array of arrays)->for pg-format
function parseObjToNestedArr(arrayofObj){
    return outputArr = arrayofObj.map((obj)=>{
       const objCopy = {...obj}
         return Object.keys(objCopy).map((key)=>{
              return objCopy[key]
           })
    })
 }

 function createWingsRef(wingsData){//for orders
     const wingsLookup = {}
     wingsData.map((wing)=>{
      wingsLookup[wing.shape_name ]= wing.wing_id
     })
     return wingsLookup
 }

 function createOrdersRef(orderData){//for families
    const orderLookup = {}
    orderData.map((order)=>{
     orderLookup[order.o_scientific_name]= order.order_id
    })
    return orderLookup
}

function createFamiliesRef(familyData){//for birds
    const familyLookup = {}
    familyData.map((family)=>{
      familyLookup[family.scientific_fam_name]= family.family_id
     })
    return familyLookup
}




function addWIdToOrders(orderData,wingsLookup){//switch out shape in bird_orders
  const newOrdersArray = orderData.map((order)=>{
    const orderCpy = {...order}
    orderCpy.shape_id = wingsLookup[orderCpy.shape]
    delete orderCpy.shape
    return orderCpy
  })
  return newOrdersArray
}


function addOIdToFamilies(familyData,orderLookup){//switch out order in bird_families for o_id
  const newFamiliesArray = familyData.map((family)=>{
    const familyCpy = {...family}
    familyCpy.o_id = orderLookup[familyCpy.order]
    delete familyCpy.order
    return familyCpy
  })
  return newFamiliesArray
}

function addFIdToBirds(birdsData,familyLookup){//switch out family in birds for f_id
  const newBirdsArray =birdsData.map((bird)=>{
    const birdsCpy = {...bird}
    birdsCpy.f_id = familyLookup[birdsCpy.family]
    delete birdsCpy.family
    return birdsCpy
  })
  return newBirdsArray
}

module.exports = {parseObjToNestedArr,createWingsRef,createOrdersRef,createFamiliesRef,addWIdToOrders,addOIdToFamilies,addFIdToBirds}

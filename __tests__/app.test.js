const request = require("supertest")
const db = require("../db/index.js")
const {wing_shapeData,birdsOrdersData,birdsFamiliesData,birdsData,birdwatchersData,rookeryTourData,watcherTourData} = require("../db/data/test-data/index.js")
const seed = require("../db/seed.js")
const app = require("../app.js")

beforeEach(() =>seed({wing_shapeData,birdsOrdersData,birdsFamiliesData,birdsData,birdwatchersData,rookeryTourData,watcherTourData}))

afterAll(() =>db.end())


describe("Endpoint(path) is not recognized and cannot be found for rookery",()=>{

    it.only("Should return http status code 404 when path is not found",()=>{
        return request(app).get('/api/fjrofjiro303gjvn200').expect(404).then(({ body }) => {
            
            expect(body.msg).toBe('path not found');
          });
    })
})

describe("GET ALL endpoint(path) tests controller functions",()=>{

    it("Request to GET ALL endpoint /api/birds should respond with status 200 code",()=>{//1

        return request(app).get("/api/birds").expect(200)

    })
    it("Request to GET ALL endpoint /api/shapes should respond with status 200 code",()=>{//2

        return request(app).get("/api/shapes").expect(200)

    })
    it("Request to GET ALL endpoint /api/families should respond with status 200 code",()=>{//3

        return request(app).get("/api/families").expect(200)

    })
    it("Request to GET ALL endpoint /api/orders should respond with status 200 code",()=>{//4

        return request(app).get("/api/orders").expect(200)

    })
    it("Request to GET ALL endpoint /api/birdwatchers should respond with status 200 code",()=>{//5

        return request(app).get("/api/birdwatchers").expect(200)

    })
    it("Request to GET ALL endpoint /api/tours should respond with status 200 code",()=>{//6

        return request(app).get("/api/tours").expect(200)

    })
    it("Request to GET ALL endpoint /api/watchertours should respond with status 200 code",()=>{//7

        return request(app).get("/api/watchertours").expect(200)

    })
})

describe("GET ALL endpoint returned data tests",()=>{

    it("should return bird test data after test database has been seeded and maintaining insertion order",()=>{

        return request(app).get("/api/birds")
        .expect(200)
        .then(({body:{birds}}) => {
          expect(birds.length).toBeGreaterThan(0);
          expect(birds.length).toEqual(9);
          expect(birds).toBeSortedBy();
          birds.forEach((row) => {
           expect(row).toHaveProperty("bird_id", expect.any(Number));
           expect(row).toHaveProperty("common_name", expect.any(String));
           expect(row).toHaveProperty("species_name", expect.any(String));
           expect(row).toHaveProperty("wing_colour",expect.any(String));
           expect(row).toHaveProperty("diet",expect.any(String));
           expect(row).toHaveProperty("can_fly",expect.any(Boolean));
           expect(row).toHaveProperty("length_cm",expect.any(Number));
           expect(row).toHaveProperty("weight_g",expect.any(Number));
           expect(row).toHaveProperty("lay_season",expect.any(String));
           expect(row).toHaveProperty("fun_fact",expect.any(String));
           expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
           expect(row).toHaveProperty("f_id",expect.any(Number));

          })
        })
    })

 
    it("should return birdwatcher test data after test database has been seeded and maintaining insertion order",()=>{

        return request(app).get("/api/birdwatchers")
        .expect(200)
        .then(({body:{birdwatchers}}) => {
          expect(birdwatchers.length).toBeGreaterThan(0);
          expect(birdwatchers.length).toEqual(6);
          expect(birdwatchers).toBeSortedBy();
          birdwatchers.forEach((row) => {
           expect(row).toHaveProperty("bw_id", expect.any(Number));
           expect(row).toHaveProperty("formal_title", expect.any(String));
           expect(row).toHaveProperty("first_name", expect.any(String));
           expect(row).toHaveProperty("last_name",expect.any(String));
           expect(row).toHaveProperty("age",expect.any(Number));
           expect(row).toHaveProperty("email_address",expect.any(String));
          })
        })
    })

    it("should return bird families test data after test database has been seeded and maintaining insertion order",()=>{

        return request(app).get("/api/families")
        .expect(200)
        .then(({body:{families}}) => {
          expect(families.length).toBeGreaterThan(0);
          expect(families.length).toEqual(6);
          expect(families).toBeSortedBy();
          families.forEach((row) => {
           expect(row).toHaveProperty("family_id", expect.any(Number));
           expect(row).toHaveProperty("scientific_fam_name", expect.any(String));
           expect(row).toHaveProperty("f_description", expect.any(String));
           expect(row).toHaveProperty("clutch_size",expect.any(Number));
           expect(row).toHaveProperty("no_of_genera",expect.any(Number));
           expect(row).toHaveProperty("no_of_species",expect.any(Number));
           expect(row).toHaveProperty("o_id",expect.any(Number));

          })
        })
    })

    it("should return bird order test data after test database has been seeded and maintaining insertion order",()=>{

        return request(app).get("/api/orders").expect(200).then(({body:{orders}}) => {
          expect(orders.length).toBeGreaterThan(0);
          expect(orders.length).toEqual(6);
          expect(orders).toBeSortedBy();
          orders.forEach((row) => {
           expect(row).toHaveProperty("order_id", expect.any(Number));
           expect(row).toHaveProperty("o_scientific_name", expect.any(String));
           expect(row).toHaveProperty("order_image", expect.any(Object));
           expect(row).toHaveProperty("shape_id",expect.any(Number));
           expect(row).toHaveProperty("o_description",expect.any(String));
          })
        })
    })

    it("should return rookery tour test data after test database has been seeded and maintaining insertion order",()=>{

        return request(app).get("/api/tours").expect(200).then(({body:{tours}}) => {
          expect(tours.length).toBeGreaterThan(0);
          expect(tours.length).toEqual(11);
          expect(tours).toBeSortedBy();
          tours.forEach((row) => {
           expect(row).toHaveProperty("rtour_id", expect.any(Number));
           expect(row).toHaveProperty("tour_name", expect.any(String));
           expect(row).toHaveProperty("tour_type", expect.any(String));
           expect(row).toHaveProperty("length_minutes",expect.any(Number));
           expect(row).toHaveProperty("location",expect.any(String));
           expect(row).toHaveProperty("cost_pennies",expect.any(String));//BIGINT
           expect(row).toHaveProperty("date",expect.any(String));

          })
        })
    })

    it("should return wing shape test data after test database has been seeded and maintaining insertion order",()=>{

        return request(app).get("/api/shapes").expect(200).then(({body:{shapes}}) => {
          expect(shapes.length).toBeGreaterThan(0);
          expect(shapes.length).toEqual(3);
          expect(shapes).toBeSortedBy();
          shapes.forEach((row) => {
           expect(row).toHaveProperty("wing_id", expect.any(Number));
           expect(row).toHaveProperty("shape_name", expect.any(String));
           expect(row).toHaveProperty("w_description", expect.any(String));
           expect(row).toHaveProperty("image",expect.any(Object));

          })
        })
    })

    it("should return watcher tour test data after test database has been seeded and maintaining insertion order",()=>{

        return request(app).get("/api/watchertours").expect(200).then(({body:{watcher_tours}}) => {
          expect(watcher_tours.length).toBeGreaterThan(0);
          expect(watcher_tours.length).toEqual(14);
          expect(watcher_tours).toBeSortedBy();
          watcher_tours.forEach((row) => {
           expect(row).toHaveProperty("watcher_tour_id", expect.any(Number));
           expect(row).toHaveProperty("watcher_id", expect.any(Number));
           expect(row).toHaveProperty("tour_id", expect.any(Number));

          })
        })
    })

  })

  describe("GET ALL endpoint tests for birds with queries and sort_by keys",()=>{
        let sort_by1 = "sort_byfirst="
        let sort_by2 = "sort_bysecond="
        let diet = "diet="
        let queryValue;
    it("should return all birds according to their diet (piscivorous)",()=>{
        return request(app).get(`/api/birds?${diet}piscivorous`).expect(200).then(({body:{birds}})=>{
          expect(birds.length).toEqual(2);
          expect(birds).toBeSortedBy();
          birds.forEach((row) => {
           expect(row).toHaveProperty("bird_id", expect.any(Number));
           expect(row).toHaveProperty("common_name", expect.any(String));
           expect(row).toHaveProperty("species_name", expect.any(String));
           expect(row).toHaveProperty("wing_colour",expect.any(String));
           expect(row).toHaveProperty("diet",expect.any(String));
           expect(row).toHaveProperty("can_fly",expect.any(Boolean));
           expect(row).toHaveProperty("length_cm",expect.any(Number));
           expect(row).toHaveProperty("weight_g",expect.any(Number));
           expect(row).toHaveProperty("lay_season",expect.any(String));
           expect(row).toHaveProperty("fun_fact",expect.any(String));
           expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
           expect(row).toHaveProperty("f_id",expect.any(Number));

          })

        })
    })

    it("should return all birds according to their diet (carnivorous)",()=>{
        return request(app).get(`/api/birds?${diet}carnivorous`).expect(200).then(({body:{birds}})=>{
          expect(birds.length).toEqual(2);
          expect(birds).toBeSortedBy();
          birds.forEach((row) => {
           expect(row).toHaveProperty("bird_id", expect.any(Number));
           expect(row).toHaveProperty("common_name", expect.any(String));
           expect(row).toHaveProperty("species_name", expect.any(String));
           expect(row).toHaveProperty("wing_colour",expect.any(String));
           expect(row).toHaveProperty("diet",expect.any(String));
           expect(row).toHaveProperty("can_fly",expect.any(Boolean));
           expect(row).toHaveProperty("length_cm",expect.any(Number));
           expect(row).toHaveProperty("weight_g",expect.any(Number));
           expect(row).toHaveProperty("lay_season",expect.any(String));
           expect(row).toHaveProperty("fun_fact",expect.any(String));
           expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
           expect(row).toHaveProperty("f_id",expect.any(Number));

          })

        })
    })

    it("should return all birds according to their diet (insectivorous)",()=>{
      return request(app).get(`/api/birds?${diet}insectivorous`).expect(200).then(({body:{birds}})=>{
        expect(birds.length).toEqual(3);
        expect(birds).toBeSortedBy();
        birds.forEach((row) => {
         expect(row).toHaveProperty("bird_id", expect.any(Number));
         expect(row).toHaveProperty("common_name", expect.any(String));
         expect(row).toHaveProperty("species_name", expect.any(String));
         expect(row).toHaveProperty("wing_colour",expect.any(String));
         expect(row).toHaveProperty("diet",expect.any(String));
         expect(row).toHaveProperty("can_fly",expect.any(Boolean));
         expect(row).toHaveProperty("length_cm",expect.any(Number));
         expect(row).toHaveProperty("weight_g",expect.any(Number));
         expect(row).toHaveProperty("lay_season",expect.any(String));
         expect(row).toHaveProperty("fun_fact",expect.any(String));
         expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
         expect(row).toHaveProperty("f_id",expect.any(Number));

        })

      })
   })

   it("should return all birds according to their diet (molluscivorous)",()=>{
    return request(app).get(`/api/birds?${diet}molluscivorous`).expect(200).then(({body:{birds}})=>{
      expect(birds.length).toEqual(1);
      expect(birds).toBeSortedBy();
      birds.forEach((row) => {
       expect(row).toHaveProperty("bird_id", expect.any(Number));
       expect(row).toHaveProperty("common_name", expect.any(String));
       expect(row).toHaveProperty("species_name", expect.any(String));
       expect(row).toHaveProperty("wing_colour",expect.any(String));
       expect(row).toHaveProperty("diet",expect.any(String));
       expect(row).toHaveProperty("can_fly",expect.any(Boolean));
       expect(row).toHaveProperty("length_cm",expect.any(Number));
       expect(row).toHaveProperty("weight_g",expect.any(Number));
       expect(row).toHaveProperty("lay_season",expect.any(String));
       expect(row).toHaveProperty("fun_fact",expect.any(String));
       expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
       expect(row).toHaveProperty("f_id",expect.any(Number));

      })

    })
  })
  it("should return all birds according to their diet (granivorous)",()=>{
    return request(app).get(`/api/birds?${diet}granivorous`).expect(200).then(({body:{birds}})=>{
      expect(birds.length).toEqual(1);
      expect(birds).toBeSortedBy();
      birds.forEach((row) => {
       expect(row).toHaveProperty("bird_id", expect.any(Number));
       expect(row).toHaveProperty("common_name", expect.any(String));
       expect(row).toHaveProperty("species_name", expect.any(String));
       expect(row).toHaveProperty("wing_colour",expect.any(String));
       expect(row).toHaveProperty("diet",expect.any(String));
       expect(row).toHaveProperty("can_fly",expect.any(Boolean));
       expect(row).toHaveProperty("length_cm",expect.any(Number));
       expect(row).toHaveProperty("weight_g",expect.any(Number));
       expect(row).toHaveProperty("lay_season",expect.any(String));
       expect(row).toHaveProperty("fun_fact",expect.any(String));
       expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
       expect(row).toHaveProperty("f_id",expect.any(Number));

      })

    })
  })

 
  it("should return all birds according to their diet (frugivorous)",()=>{
    return request(app).get(`/api/birds?${diet}frugivorous`).expect(200).then(({body:{birds}})=>{
      expect(birds.length).toEqual(1);
      expect(birds).toBeSortedBy();
      birds.forEach((row) => {
       expect(row).toHaveProperty("bird_id", expect.any(Number));
       expect(row).toHaveProperty("common_name", expect.any(String));
       expect(row).toHaveProperty("species_name", expect.any(String));
       expect(row).toHaveProperty("wing_colour",expect.any(String));
       expect(row).toHaveProperty("diet",expect.any(String));
       expect(row).toHaveProperty("can_fly",expect.any(Boolean));
       expect(row).toHaveProperty("length_cm",expect.any(Number));
       expect(row).toHaveProperty("weight_g",expect.any(Number));
       expect(row).toHaveProperty("lay_season",expect.any(String));
       expect(row).toHaveProperty("fun_fact",expect.any(String));
       expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
       expect(row).toHaveProperty("f_id",expect.any(Number));

      })

    })
  })

  it("should return all birds according to their diet (omnivorous)",()=>{
    return request(app).get(`/api/birds?${diet}omnivorous`).expect(200).then(({body:{birds}})=>{
      expect(birds.length).toEqual(2);
      expect(birds).toBeSortedBy();
      birds.forEach((row) => {
       expect(row).toHaveProperty("bird_id", expect.any(Number));
       expect(row).toHaveProperty("common_name", expect.any(String));
       expect(row).toHaveProperty("species_name", expect.any(String));
       expect(row).toHaveProperty("wing_colour",expect.any(String));
       expect(row).toHaveProperty("diet",expect.any(String));
       expect(row).toHaveProperty("can_fly",expect.any(Boolean));
       expect(row).toHaveProperty("length_cm",expect.any(Number));
       expect(row).toHaveProperty("weight_g",expect.any(Number));
       expect(row).toHaveProperty("lay_season",expect.any(String));
       expect(row).toHaveProperty("fun_fact",expect.any(String));
       expect(row).toHaveProperty("wingspan_cm",expect.any(Number));
       expect(row).toHaveProperty("f_id",expect.any(Number));

      })

    })
  })


  it.only("Should return http status code 404 when particular diet for bird does not exist in the seeded dataset",()=>{
    return request(app).get(`/api/birds?${diet}nectivorous`).expect(404).then(({body})=>{
      const {err} = body
      expect(err).toBe("No birds with that type of diet.")

    })
  })

})

//SORT BY query tests for birds


describe("sort by and order tests for birds relation(table) GET all requests",()=>{

  let queryStr1=`sort_byfirst=`
  let queryStr2=`sort_bysecond=`
  let order1=`order1=`
  let order2=`order2=`
  const asc = `ASC`
  const desc = `DESC`
  const lengthprop = "length_cm"
  const weightprop = "weight_g"
  const wingspanprop = "wingspan_cm"
  const nameprop = "common_name"

  it.only("returns a 400 error status when sort_byfirst query string is not on the greenlist (birds)",()=>{

    return request(app).get(`/api/birds?${queryStr1}height&${order1}${desc}&${queryStr2}${nameprop}&${order2}${asc}`)
    .expect(400).then(({body})=>{

        const{err} = body
        
        expect(err).toBe('Invalid sort_byfirst query string')
    })
  })

  it.only("returns a 400 error status when sort_bysecond query string is not on the greenlist (birds)",()=>{

    return request(app).get(`/api/birds?${queryStr1}${lengthprop}&${order1}${desc}&${queryStr2}flightname&${order2}${asc}`)
    .expect(400).then(({body})=>{
        const{err} = body
        expect(err).toBe('Invalid sort_bysecond query string')
    })
  })

  it.only("returns a 400 error status when order1 query string is not on the greenlist (birds)",()=>{

    return request(app).get(`/api/birds?${queryStr1}${lengthprop}&${order1}highest&${queryStr2}${nameprop}&${order2}${asc}`)
    .expect(400).then(({body})=>{
      const{err} = body

        expect(err).toBe('Invalid order1 query string')
    })
  })

  it.only("returns a 400 error status when order2 query string is not on the greenlist (birds)",()=>{

    return request(app).get(`/api/birds?${queryStr1}${lengthprop}&${order1}${asc}&${queryStr2}${nameprop}&${order2}lowest`)
    .expect(400).then(({body})=>{
      const{err} = body
        expect(err).toBe('Invalid order2 query string')
    })
  })

  it("returns list of birds with 200 status sorting first by length descending  and then secondarily by common bird name in ascending order ",()=>{

    return request(app).get(`/api/birds?${queryStr1}${lengthprop}&${order1}${desc}&${queryStr2}${nameprop}&${order2}${asc}`)
    .expect(200).then(({body:{birds}})=>{
        expect(birds).toBeSortedBy(lengthprop, {descending: true})
    })

  })

  it("returns list of birds with 200 status sorting sorting first by length ascending  and then secondarily by common bird name in descending order ",()=>{

    return request(app).get(`/api/birds?${queryStr1}${lengthprop}&${order1}${asc}&${queryStr2}${nameprop}&${order2}${desc}`)
    .expect(200).then(({body:{birds}})=>{
        expect(birds).toBeSortedBy(lengthprop, {descending: false})
    })

  })


  it("returns list of birds with 200 status for sorting first by weight descending and then secondarily by common bird name in ascending order ",()=>{

    return request(app).get(`/api/birds?${queryStr1}${weightprop}&${order1}${desc}&${queryStr2}${nameprop}&${order2}${asc}`)
    .expect(200).then(({body:{birds}})=>{
        expect(birds).toBeSortedBy(weightprop, {descending: true})
    })

  })

  it("returns list of birds with 200 status for sorting first by weight ascending and then secondarily by common bird name in descending order ",()=>{

    return request(app).get(`/api/birds?${queryStr1}${weightprop}&${order1}${asc}&${queryStr2}${nameprop}&${order2}${desc}`)
    .expect(200).then(({body:{birds}})=>{
        expect(birds).toBeSortedBy(weightprop, {descending: false})
    })

  })


  it("returns list of birds with 200 status for sorting first by wingspan ascending and then secondarily by common bird name in descending order ",()=>{

    return request(app).get(`/api/birds?${queryStr1}${wingspanprop}&${order1}${asc}&${queryStr2}${nameprop}&${order2}${desc}`)
    .expect(200).then(({body:{birds}})=>{
        expect(birds).toBeSortedBy(wingspanprop, {descending: false})
    })

  })


  it("returns list of birds with 200 status for sorting first by wingspan descending and then secondarily by common bird name in ascending order ",()=>{

    return request(app).get(`/api/birds?${queryStr1}${wingspanprop}&${order1}${desc}&${queryStr2}${nameprop}&${order2}${asc}`)
    .expect(200).then(({body:{birds}})=>{
        expect(birds).toBeSortedBy(wingspanprop, {descending: true})
    })

  })
})


//SORT BY query tests for bird families


describe("sort by and order tests for bird_families relation(table) GET all requests",()=>{

  let queryStr1=`sort_byfirst=`
  let queryStr2=`sort_bysecond=`
  let order1=`order1=`
  let order2=`order2=`
  const asc = `ASC`
  const desc = `DESC`
  const clutchprop = "clutch_size"
  const snameProp = "scientific_fam_name"

    //bird_families error

    it.only("returns a 400 error status when sort_byfirst query string is not on the greenlist (bird_families)",()=>{

      return request(app).get(`/api/families?${queryStr1}nestshape&${order1}${desc}&${queryStr2}${snameProp}&${order2}${asc}`)
      .expect(400).then(({body})=>{
          const {err} = body
          expect(err).toBe('Invalid sort_byfirst query string')
      })
    })
  
    it.only("returns a 400 error status when sort_bysecond query string is not on the greenlist (bird_families)",()=>{
  
      return request(app).get(`/api/families?${queryStr1}${clutchprop}&${order1}${desc}&${queryStr2}generasize${order2}${asc}`)
      .expect(400).then(({body})=>{
          const {err} = body
          expect(err).toBe('Invalid sort_bysecond query string')
      })
    })
  
    it.only("returns a 400 error status when order1 query string is not on the greenlist (bird_families)",()=>{
  
      return request(app).get(`/api/families?${queryStr1}${clutchprop}&${order1}UP&${queryStr2}${snameProp}&${order2}${asc}`)
      .expect(400).then(({body})=>{
        const {err} = body
          expect(err).toBe('Invalid order1 query string')
      })
    })
  
    it.only("returns a 400 error status when order2 query string is not on the greenlist (bird_families)",()=>{
  
      return request(app).get(`/api/families?${queryStr1}${clutchprop}&${order1}${asc}&${queryStr2}${snameProp}&${order2}DOWN`)
      .expect(400).then(({body})=>{
          const {err} = body
          expect(err).toBe('Invalid order2 query string')
      })
    })

    it("returns a list of bird families with a 200 status sorting first by clutch size descending and then by scientific family name ascending",()=>{

        return request(app).get(`/api/families?${queryStr1}${clutchprop}&${order1}${desc}&${queryStr2}${snameProp}&${order2}${asc}`)
        .expect(200).then(({body:{families}})=>{
            expect(families).toBeSortedBy(clutchprop, {descending: true})
        })
    })


    it("returns a list of bird families with a 200 status sorting by clutch size ascending and then by scientific family name descending",()=>{

      return request(app).get(`/api/families?${queryStr1}${clutchprop}&${order1}${asc}&${queryStr2}${snameProp}&${order2}${desc}`)
      .expect(200).then(({body:{families}})=>{
          expect(families).toBeSortedBy(clutchprop, {descending: false})
      })
  })
  
})


//SORT BY query tests for bird orders
describe("sort by and order tests for bird orders relation(table) GET all requests",()=>{

  let queryStr1=`sort_by=`
  let order =`order=`
  const asc = `ASC`
  const desc = `DESC`
 
  const onameProp = "o_scientific_name"

//bird orders errors
  it.only("returns a 400 error status when sort_by query string is not on the greenlist (bird_orders)",()=>{

    return request(app).get(`/api/orders?${queryStr1}ordergroup&${order}${desc}`)
    .expect(400).then(({body})=>{
        const {err} = body
        expect(err).toBe('Invalid sort_by query string')
    })
  })

 

  it.only("returns a 400 error status when order query string is not on the greenlist (bird_orders)",()=>{

    return request(app).get(`/api/orders?${queryStr1}${onameProp}&${order}DOWNWARDS`)
    .expect(400).then(({body})=>{
       const {err} = body
        expect(err).toBe('Invalid order query string')
    })
  })

  

   it("returns a list of bird orders with 200 status sorting by order scientific name (ascending)",()=>{

       return request(app).get(`/api/orders?${queryStr1}${onameProp}&${order}${asc}`)
       .expect(200).then(({body:{orders}})=>{
        expect(orders).toBeSortedBy(onameProp, {descending: false})
    })

   })

   it("returns a list of bird orders with 200 status sorting by order scientific name (descending)",()=>{
        
      return request(app).get(`/api/orders?${queryStr1}${onameProp}&${order}${desc}`)
      .expect(200).then(({body:{orders}})=>{
      expect(orders).toBeSortedBy(onameProp, {descending: true})
   })
        


   })
})


//SORT BY query tests for birdwatchers
describe("sort by and order tests for birdwatchers relation(table) GET all requests",()=>{

     const email_suffix1 = `.com`;
     const bademailSuffix = `@crazyglobalist.ie`
     const emailStr1 = `email_address=`;
     const orderStr = `order=`;
     const sortQuery = `sort_by=`;
     const ageValue = `age`;
     const fnameValue = `first_name`;
     const lnameValue = `last_name`;
     const asc = `ASC`
     const desc = `DESC`

   //birdwatchers error

   
   it.only("returns a 404 error status when email address regex pattern is not in birdwatchers relation(table)",()=>{

    return request(app).get(`/api/birdwatchers?${emailStr1}${bademailSuffix}`)
    .expect(404).then(({body})=>{
        const{err} = body
        expect(err).toBe('No record(s) with that email pattern.')
    })
  })

   it.only("returns a 400 error status when sort_by query string is not on the greenlist (birdwatchers relation(table))",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}nationality`)
    .expect(400).then(({body})=>{
        const{err} = body
        expect(err).toBe('Invalid sort_by query string.')
    })
  })

  it.only("returns a 400 error status when order query string is not on the greenlist (birdwatchers relation(table))",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}${ageValue}&${orderStr}$VERYHIGH`)
    .expect(400).then(({body})=>{
        const{err} = body

        expect(err).toBe('Invalid order query string.')
    })
  })

  it("should return 200 status with a list of birdwatchers when filtering by a specific email address regex that end in .com ",()=>{

      return request(app).get(`/api/birdwatchers?${emailStr1}${email_suffix1}`)
      .expect(200).then(({body:{birdwatchers}})=>{
      expect(birdwatchers).toHaveLength(4)

     })     
  })

  it("should return 200 status with a list of birdwatchers when sorting birdwatchers by age in ascending order",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}${ageValue}&${orderStr}${asc}`)
    .expect(200).then(({body:{birdwatchers}})=>{
     expect(birdwatchers).toBeSortedBy(ageValue, {descending: false})

    })     
  })

  it("should return 200 status with a list of birdwatchers when sorting birdwatchers by age in descending order",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}${ageValue}&${orderStr}${desc}`)
    .expect(200).then(({body:{birdwatchers}})=>{
     expect(birdwatchers).toBeSortedBy(ageValue, {descending: true})

    })     
  })

  it("should return 200 status with a list of birdwatchers when sorting birdwatchers by first name in ascending order",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}${fnameValue}&${orderStr}${asc}`)
    .expect(200).then(({body:{birdwatchers}})=>{
     expect(birdwatchers).toBeSortedBy(fnameValue, {descending: false})

    })     
  })

  it("should return 200 status with a list of birdwatchers when sorting birdwatchers by first name in descending order",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}${fnameValue}&${orderStr}${desc}`)
    .expect(200).then(({body:{birdwatchers}})=>{
     expect(birdwatchers).toBeSortedBy(fnameValue, {descending: true})

    })     
  })

  it("should return 200 status with a list of birdwatchers when sorting birdwatchers by last name in ascending order",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}${lnameValue}&${orderStr}${asc}`)
    .expect(200).then(({body:{birdwatchers}})=>{
     expect(birdwatchers).toBeSortedBy(lnameValue, {descending: false})

    })     
  })

  it("should return 200 status with a list of birdwatchers when sorting birdwatchers by last name in descending order",()=>{

    return request(app).get(`/api/birdwatchers?${sortQuery}${lnameValue}&${orderStr}${desc}`)
    .expect(200).then(({body:{birdwatchers}})=>{
     expect(birdwatchers).toBeSortedBy(lnameValue, {descending: true})

    })     
  })
})


//SORT BY query tests for rookery tour
describe("sort by and order tests for rookery_tour relation(table) GET all requests",()=>{

  let queryStr1=`sort_byfirst=`
  let queryStr2=`sort_bysecond=`
  let tourQuery = `tour_type=`
  let costProp = `cost_pennies`
  let lengthProp = `length_minutes`
  let locationProp = `location`
  let dateProp = `date`
  let order1=`order1=`
  let order2=`order2=`
  const asc = `ASC`
  const desc = `DESC`
  const tourtype1 = "Educational"
  const tourtype2 = "Entertainment"

  it.only("returns a 404 error status when tour_type query is not in the entertainment or educational category rookery_tour relation(table)",()=>{

    return request(app).get(`/api/tours?${tourQuery}Factual`)
    .expect(404).then(({body})=>{
        const {err} = body
        expect(err).toBe('No tours of that type.')
    })
  })

  it.only("returns a 400 error status when sort_byfirst query string is not on the greenlist (rookery_tour relation(table))",()=>{

    return request(app).get(`/api/tours?${queryStr1}tourratings&${order1}${asc}&${queryStr2}${dateProp}&${order2}${desc}`)
    .expect(400).then(({body})=>{
        const {err} = body
        expect(err).toBe('Invalid sort_byfirst query string')
    })
  })

  it.only("returns a 400 error status when sort_bysecond query string is not on the greenlist (rookery_tour relation(table))",()=>{

    return request(app).get(`/api/tours?${queryStr1}${costProp}&${order1}${asc}&${queryStr2}sitesize&${order2}${desc}`)
    .expect(400).then(({body})=>{
      const {err} = body

        expect(err).toBe('Invalid sort_bysecond query string')
    })
  })

  it.only("returns a 400 error status when order1 query string is not on the greenlist (rookery_tour relation(table))",()=>{

    return request(app).get(`/api/tours?${queryStr1}${costProp}&${order1}ELEVATE&${queryStr2}${dateProp}&${order2}${desc}`)
    .expect(400).then(({body})=>{
        const{err} = body
        expect(err).toBe('Invalid order1 query string')
    })
  })

  it.only("returns a 400 error status when order2 query string is not on the greenlist (rookery_tour relation(table))",()=>{

    return request(app).get(`/api/tours?${queryStr1}${costProp}&${order1}${desc}&${queryStr2}${dateProp}&${order2}DECLINE`)
    .expect(400).then(({body})=>{
        const {err} = body
        expect(err).toBe('Invalid order2 query string')
    })
  })

    it("should return a 200 status and show all the tour records that are education-based.",()=>{
      
      return request(app).get(`/api/tours?${tourQuery}${tourtype1}`)
      .expect(200).then(({body:{tours}})=>{
          expect(tours).toHaveLength(5)
      })

    })

    it("should return a 200 status and show all the tour records that are entertainment-based.",()=>{
      
      return request(app).get(`/api/tours?${tourQuery}${tourtype2}`)
      .expect(200).then(({body:{tours}})=>{
          expect(tours).toHaveLength(6)
      })

    })
    it("should return 200 status and show all tours sorted first by cost ascending and then secondarily by the date descending",()=>{
      
      return request(app).get(`/api/tours?${queryStr1}${costProp}&${order1}${asc}&${queryStr2}${dateProp}&${order2}${desc}`)
      .expect(200).then(({body:{tours}})=>{
          expect(tours).toBeSortedBy(costProp,{descending: false, coerce: true})
      })

    })

    it("should return 200 status and show all tours sorted first by cost descending and then secondarily by the date ascending",()=>{
      
      return request(app).get(`/api/tours?${queryStr1}${costProp}&${order1}${desc}&${queryStr2}${dateProp}&${order2}${asc}`)
      .expect(200).then(({body:{tours}})=>{
          expect(tours).toBeSortedBy(costProp,{descending: true, coerce: true})
      })

    })

    it("should return 200 status and show all tours sorted first by tour length ascending and then secondarily by the location descending",()=>{
      
      return request(app).get(`/api/tours?${queryStr1}${lengthProp}&${order1}${asc}&${queryStr2}${locationProp}&${order2}${desc}`)
      .expect(200).then(({body:{tours}})=>{
          expect(tours).toBeSortedBy(lengthProp,{descending: false})
      })

    })

    it("should return 200 status and show all tours sorted first by tour length descending and then secondarily by the location ascending",()=>{
      
      return request(app).get(`/api/tours?${queryStr1}${lengthProp}&${order1}${desc}&${queryStr2}${locationProp}&${order2}${asc}`)
      .expect(200).then(({body:{tours}})=>{
          expect(tours).toBeSortedBy(lengthProp,{descending: true})
      })

    })

})


describe("Get by data record(row) by ID tests",()=>{
  //error ID tests

   const badBirdID = 145
   const badFamilyID = 11
   const badOrderID = 9
   const badBw_ID = 20
   const badRTour_ID = 50
   const badWing_ID = 5
   const badwatcherTourID = 200
   const stringBirdID = "threehouse"
   const stringFamilyID = "&*Strigidae!"
   const objectOrderID = {order: "transcendals"}
   const birdwatcherIDNone = null
   const boolrookeryID = false
   const badFormatWingShapeID= ['oblique']
   const wrongFormatWatcherTour = "1_"


  it.only("should return a 400 error status if supplied a bird_id that is not a number datatype",()=>{

        return request(app).get(`/api/birds/${stringBirdID}`).expect(400).then(({body})=>{
          const{err} = body
          expect(err).toBe(`Bad request: passed in bird_id is not a valid id.`)
        })
  })

  it.only("should return a 400 error status if supplied a family_id that is not a number datatype",()=>{

    return request(app).get(`/api/families/${stringFamilyID}`).expect(400).then(({body})=>{
      const{err} = body
      expect(err).toBe(`Bad request: passed in family_id is not a valid id.`)
    })
  })

  it.only("should return a 400 error status if supplied an order_id that is not a number datatype",()=>{

    return request(app).get(`/api/orders/${objectOrderID}`).expect(400).then(({body})=>{
      const{err} = body

      expect(err).toBe(`Bad request: passed in order_id is not a valid id.`)
    })
  })

  it.only("should return a 400 error status if supplied a birdwatcher id that is not a number datatype",()=>{

    return request(app).get(`/api/birdwatchers/${birdwatcherIDNone}`).expect(400).then(({body})=>{

      const{err} = body

      expect(err).toBe(`Bad request: passed in birdwatcher is is not a valid id.`)
    })
  })

  it.only("should return a 400 error status if supplied a rookery tour id that is not a number datatype",()=>{

    return request(app).get(`/api/tours/${boolrookeryID}`).expect(400).then(({body})=>{
      const{err} = body

      expect(err).toBe(`Bad request: passed in rookery tour id is not a valid id.`)
    })
  })

  it.only("should return a 400 error status if supplied a wing shape id that is not a number datatype",()=>{

    return request(app).get(`/api/shapes/${badFormatWingShapeID}`).expect(400).then(({body})=>{
      const{err} = body

      expect(err).toBe(`Bad request: passed in wing shape id is not a valid id.`)
    })
  })

  it.only("should return a 400 error status if supplied a watcher-tour id that is not a number datatype",()=>{

    return request(app).get(`/api/watchertours/${wrongFormatWatcherTour}`).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe(`Bad request: passed in watcher_tour id is not a valid id.`)
    })
  })

  it("should return the correct row from the bird relation(table) and 200 status when supplied bird id",()=>{
    const bird_id = 4
       return request(app).get(`/api/birds/${bird_id}`).expect(200).then(({body:{bird}})=>{
        expect(bird.common_name).toBe('Humboldt penguin')
        expect(bird.species_name).toBe('Spheniscus humboldti')
        expect(bird.wing_colour).toBe('greyish-black')
        expect(bird.diet).toBe('piscivorous')
        expect(bird.can_fly).toBe(false)
        expect(bird.length_cm).toBe(13)
        expect(bird.weight_g).toBe(4400)
        expect(bird.lay_season).toBe('all-year')
        expect(bird.wingspan_cm).toBe(52)
        expect(bird.f_id).toBe(3)
       })
  })

  it.only("should return a 404 error status when searching for a bird row after having supplied a bird_id that does not exist",()=>{
       
       return request(app).get(`/api/birds/${badBirdID}`).expect(404).then(({body})=>{
          const{err} = body
          expect(err).toBe(`Bird with that bird_id ${badBirdID} cannot be found.`)

       })

  })

  it("Should return the correct row from the bird_families relation(table) and 200 status when supplied family id",()=>{
    const family_id = 5
       return request(app).get(`/api/families/${family_id}`).expect(200).then(({body:{family}})=>{
        console.log(family)
        expect(family.scientific_fam_name).toBe('Phasianidae')
        expect(family.clutch_size).toBe(13)
        expect(family.no_of_genera).toBe(185)
        expect(family.no_of_species).toBe(54)
        expect(family.o_id).toBe(5)
       })
  })

  it.only("should return a 404 error status when searching for a bird family row after having supplied a family_id that does not exist",()=>{
       
    return request(app).get(`/api/families/${badFamilyID}`).expect(404).then(({body})=>{
       const {err} = body
       expect(err).toBe(`No record with that family_id ${badFamilyID} can be found.`)

    })

  })

  it("Should return the correct row from the bird_orders relation(table) and 200 status when supplied order id",()=>{
    const order_id = 4
       return request(app).get(`/api/orders/${order_id}`).expect(200).then(({body:{order}})=>{
        expect(order.o_scientific_name).toBe('Passeriformes')
        expect(typeof order.order_image).toBe('object')
        expect(order.shape_id).toBe(2)
       })
  })

  it.only("should return a 404 error status when searching for a bird order row after having supplied an order_id that does not exist",()=>{
       
    return request(app).get(`/api/orders/${badOrderID}`).expect(404).then(({body})=>{
      const {err} = body
       expect(err).toBe(`No record with that order_id ${badOrderID} can be found.`)

    })

  })

  it("Should return the correct row from the birdwatchers relation(table) and 200 status when supplied birdwatcher id",()=>{
    const bw_id = 4
       return request(app).get(`/api/birdwatchers/${bw_id}`).expect(200).then(({body:{birdwatcher}})=>{
        expect(birdwatcher.formal_title).toBe('Mrs')
        expect(birdwatcher.first_name).toBe('Nori')
        expect(birdwatcher.last_name).toBe('Yokohama')
        expect(birdwatcher.email_address).toBe('noriyoko@cybermail.jp')

       })
  })

  it.only("should return a 404 error status when searching for a birdwatcher row after having supplied a birdwatcher id that does not exist",()=>{
       
    return request(app).get(`/api/birdwatchers/${badBw_ID}`).expect(404).then(({body})=>{

       const{err} = body
       expect(err).toBe(`No record with that birdwatcher id ${badBw_ID} can be found.`)

    })

  })


   it("Should return the correct row from the rookery_tour relation(table) and 200 status when supplied rookery tour id",()=>{
     const rtour_id = 6
        return request(app).get(`/api/tours/${rtour_id}`).expect(200).then(({body:{tour}})=>{
         expect(tour.tour_name).toBe('Ongoya Downsouth')
         expect(tour.tour_type).toBe('Educational')
         expect(tour.length_minutes).toBe(2340)
         expect(tour.location).toBe("South Africa")
         expect(tour.cost_pennies).toBe("342600")
         expect(tour.date).toBe(new Date('2024-08-11 10:12:59+2').toISOString())
       })
   })

   it.only("should return a 404 error status when searching for a rookery_tour row after having supplied a rookery tour id that does not exist",()=>{
       
    return request(app).get(`/api/tours/${badRTour_ID}`).expect(404).then(({body})=>{
      const {err}= body
       expect(err).toBe(`No record with that rookery tour id ${badRTour_ID} can be found.`)

    })

  })

   it("Should return the correct row from the wing_shape relation(table) and 200 status when supplied wing id",()=>{
    const wing_id = 3
       return request(app).get(`/api/shapes/${wing_id}`).expect(200).then(({body:{shape}})=>{
        expect(shape.shape_name).toBe('Tapered flipper wings')
        expect(typeof shape.image).toBe('object')

       })
  })

  it.only("should return a 404 error status when searching for a wing shape row after having supplied a wing id that does not exist",()=>{
       
    return request(app).get(`/api/shapes/${badWing_ID}`).expect(404).then(({body})=>{
      const {err} = body
       expect(err).toBe(`No record with that wing shape id ${badWing_ID} can be found.`)

    })

  })

  it("Should return the correct row from the watchers_tours relation(table) and 200 status when supplied watcher-tour id",()=>{
    const watcher_tour_id = 2
       return request(app).get(`/api/watchertours/${watcher_tour_id}`).expect(200).then(({body:{watcher_tour}})=>{
        expect(watcher_tour.watcher_id).toBe(1)
        expect(watcher_tour.tour_id).toBe(1)
        

       })
      
  })

  it.only("should return a 404 error status when searching for a watchers_tour row after having supplied a watcher_tour_id that does not exist",()=>{
       
    return request(app).get(`/api/watchertours/${badwatcherTourID}`).expect(404).then(({body})=>{
       const {err} = body
       expect(err).toBe(`Watcher tour with that watcher_tour_id ${badwatcherTourID} cannot be found.`)

    })

  })
})

describe("POST request data to rookery database tests",()=>{

  const encoder = new TextEncoder(); 
  
  const newBirdOrder = {
    o_scientific_name: "Apodiformes",
    order_image: `${__dirname}/../bird_images/bird_order_pics/Apodiformes.png`,
    shape_id: 1,
    o_description:"This order includes hummingbirds and swifts. Their feet are scaleless and their young are born blind and hairless." 
  }

  const newBirdFamily ={
      scientific_fam_name: "Sturnidae",
      f_description:"This family of birds includes starlings, rhabdornis and mynahs.They commonly have iridescent green plumage (with a metallic sheen) as well distributed across the continents (except Antarctica).They compete with native bird species in order to be invasive species. They have diverse vocalizations and are known to embed artifical noises like car alarms and human speech patterns into their own calls and imitate sounds too. They may or may not have erectile crests/feathers and are gregarious by nature. Also, they are known for distributing parasitic mistletoe seeds.",
      clutch_size: 7,
      no_of_genera: 27,
      no_of_species: 111,
      o_id: 4
    
  }

  const newBird ={
    common_name: "Emperor penguin",
    species_name: "Aptenodytes forsteri",
    wing_colour: "bluish-black",
    diet: "piscivorous",
    can_Fly: "FALSE",
    length_cm: 120,
    weight_g: 23000,
    lay_season: "spring/summer",
    fun_fact:"These are the biggest species of penguin today; they can dive deep into ice cold water up to a recorded depth of 565m when catching fish and can hold their breath underwater for 22 minutes in water.",
    wingspan_cm: 83,
    f_id: 3
  }

  const newBirdWatcher ={
    formal_title: "Mrs",
    first_name: "Anna",
    last_name: "Williams",
    age: 35,
    email_address: "anRwilliams@aol.com"
  }

  const newTour = {
    tour_name :"Budongo Forest Reserve",
    tour_type :"Educational",
    length_minutes:  4034,
    location : "Uganda",
    cost_pennies: 391589,
    date: '2024-09-10 12:11:16+3'//11
  }

  const newWatcherTour ={
    watcher_id: 2,
    tour_id: 1

  }

  const emptyObj = {

  }

  const malformedBird1 = {
      common_name : "White-breasted mesite",
      species_name : "Mesitornis variegatus",
      wing_colour : "rufous brown",
      diet : "insectivorous/granivorous",
      can_Fly: "TRUE"
  }

  const malformedBird2 =
  {
    common_name: "Adélie penguin",
    species_name: "Pygoscelis adeliae",
    wing_colour: "black",
    diet: "piscivorous",
    can_Fly: "FALSE",
    length_cm: 70,
    weight_g: 4700,
    lay_season: "autumn/winter/summer",
    fun_fact:"These penguins are small but extremely feisty and will confidently take on larger predators like seals and large seabirds and funnily steal rocks; but the population is currently under threat in their habitat.",
    wingspan_cm: 56,
    family: "Spheniscidae",
    habbits: "Bullying other penguins"
  }

  const malformedFamily1 = {
    scientific_fam_name: "Sturnidae",
    f_description:"This family of birds includes starlings, rhabdornis and mynahs.They commonly have iridescent green plumage (with a metallic sheen) as well distributed across the continents (except Antarctica).They compete with native bird species in order to be invasive species. They have diverse vocalizations and are known to embed artifical noises like car alarms and human speech patterns into their own calls and imitate sounds too. They may or may not have erectile crests/feathers and are gregarious by nature. Also, they are known for distributing parasitic mistletoe seeds.",
    clutch_size: 7,
    no_of_genera: 27
    
  }

  const malformedFamily2 ={
    scientific_fam_name: "Sturnidae",
    f_description:"This family of birds includes starlings, rhabdornis and mynahs.They commonly have iridescent green plumage (with a metallic sheen) as well distributed across the continents (except Antarctica).They compete with native bird species in order to be invasive species. They have diverse vocalizations and are known to embed artifical noises like car alarms and human speech patterns into their own calls and imitate sounds too. They may or may not have erectile crests/feathers and are gregarious by nature. Also, they are known for distributing parasitic mistletoe seeds.",
    clutch_size: 7,
    no_of_genera: 27,
    no_of_species: 111,
    o_id: 4,
    family_ratings: 6
  
  }

  const malformedOrder1 = {
    o_scientific_name: "Apodiformes",
    order_image: `${__dirname}/../bird_images/bird_order_pics/Apodiformes.png`,
  }

  const malformedOrder2 = {
    o_scientific_name: "Apodiformes",
    order_image: `${__dirname}/../bird_images/bird_order_pics/Apodiformes.png`,
    shape_id: 1,
    o_description:"This order includes hummingbirds and swifts. Their feet are scaleless and their young are born blind and hairless.",
    order_nesting_habits: "like to build circular nests"

  }

  const malformedBW1 ={
    first_name: "Anna",
    last_name: "Williams",
    age: 35,
    
  }

  const malformedBW2 ={
    formal_title: "Mrs",
    first_name: "Anna",
    last_name: "Williams",
    age: 35,
    email_address: "anRwilliams@aol.com",
    location: "Amsterdam"
  }

  const malformedTour1 = {
    tour_name :"Budongo Forest Reserve",
    tour_type :"Educational",
    length_minutes:  4034,
    date: '2024-09-10 12:11:16+3'//11
  }

  const malformedTour2 = {
    tour_name :"Budongo Forest Reserve",
    tour_type :"Educational",
    length_minutes:  4034,
    location : "Uganda",
    cost_pennies: 391589,
    date: '2024-09-10 12:11:16+3',//11
    bookings: 45
  }


  const malformedWatcherTours1 ={
    watcher_id: 2
   
  }

  const malformedWatcherTours2 ={
    watcher_id: 2,
    tour_id: 1,
    affiliation: "Tempo Inc"

  }

  const nullBird = {
    common_name: "Emperor penguin",
    species_name: "Aptenodytes forsteri",
    wing_colour: null,
    diet: "piscivorous",
    can_Fly: "FALSE",
    length_cm: 120,
    weight_g: 23000,
    lay_season: "spring/summer",
    fun_fact:"These are the biggest species of penguin today; they can dive deep into ice cold water up to a recorded depth of 565m when catching fish and can hold their breath underwater for 22 minutes in water.",
    wingspan_cm: 83,
    f_id: 3
  }


  const nullBirdFamily ={
    scientific_fam_name: null,
    f_description:"This family of birds includes starlings, rhabdornis and mynahs.They commonly have iridescent green plumage (with a metallic sheen) as well distributed across the continents (except Antarctica).They compete with native bird species in order to be invasive species. They have diverse vocalizations and are known to embed artifical noises like car alarms and human speech patterns into their own calls and imitate sounds too. They may or may not have erectile crests/feathers and are gregarious by nature. Also, they are known for distributing parasitic mistletoe seeds.",
    clutch_size: 7,
    no_of_genera: 27,
    no_of_species: 111,
    o_id: 4
  
  }

  const nullBirdOrder = {
    o_scientific_name: null,
    order_image: `${__dirname}/../bird_images/bird_order_pics/Apodiformes.png`,
    shape_id: 1,
    o_description:"This order includes hummingbirds and swifts. Their feet are scaleless and their young are born blind and hairless." 
  }

  const nullBirdWatcher ={
    formal_title: null,
    first_name: "Anna",
    last_name: "Williams",
    age: 35,
    email_address: "anRwilliams@aol.com"
  }

  const nullTour = {
    tour_name : null,
    tour_type : null,
    length_minutes:  4034,
    location : "Uganda",
    cost_pennies: 391589,
    date: '2024-09-10 12:11:16+3'//11
  }

  const newBirdWrongType = {
      common_name: "Emperor penguin",
      species_name: "Aptenodytes forsteri",
      wing_colour: "bluish-black",
      diet: "piscivorous",
      can_Fly: "FALSE",
      length_cm: "one-hundred-and-twenty",
      weight_g: 23000,
      lay_season: "spring/summer",
      fun_fact:"These are the biggest species of penguin today; they can dive deep into ice cold water up to a recorded depth of 565m when catching fish and can hold their breath underwater for 22 minutes in water.",
      wingspan_cm: 83,
      f_id: 3
    }
  

    const newFamilyWrongType ={
      scientific_fam_name: "Sturnidae",
      f_description:"This family of birds includes starlings, rhabdornis and mynahs.They commonly have iridescent green plumage (with a metallic sheen) as well distributed across the continents (except Antarctica).They compete with native bird species in order to be invasive species. They have diverse vocalizations and are known to embed artifical noises like car alarms and human speech patterns into their own calls and imitate sounds too. They may or may not have erectile crests/feathers and are gregarious by nature. Also, they are known for distributing parasitic mistletoe seeds.",
      clutch_size: 7,
      no_of_genera: "TRUE",
      no_of_species: 111,
      o_id: 4
    
  }

  const newOrderWrongType = {
    o_scientific_name: "Charadriiformes",
    order_image: "../bird_images/bird_order_pics/Charadriiformes.jpg",
    shape_id: "3A@R@R",
    o_description: 158
  }
  

  const newTourWrongType = {
    tour_name :"Budongo Forest Reserve",
    tour_type :"Educational",
    length_minutes:  4034,
    location : "Uganda",
    cost_pennies: 12.56,
    date: '2024-09-10 12:11:16+3'//11
  }

  const newBirdWatcherBadType ={
    formal_title: "Mrs",
    first_name: "Anna",
    last_name: "Williams",
    age: "FALSE",
    email_address: "anRwilliams@aol.com"
  }


  const newWatcherTourWrongType ={
    watcher_id: 2,
    tour_id: [1,2]

  }


  //birds


  //Wrong datatypes
   
  it.only("POST request should return a 400 status if the request body has bird property field of the wrong datatype",()=>{
    return request(app).post('/api/birds').send(newBirdWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })
  })

  it.only("POST request should return a 400 status if the request body has bird family property field of the wrong datatype",()=>{
    return request(app).post('/api/families').send(newFamilyWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })
  })

  it.only("POST request should return a 400 status if the request body has bird order property field of the wrong datatype",()=>{
    
    return request(app).post('/api/orders').send(newOrderWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })
  })

  it.only("POST request should return a 400 status if the request body has tour property field of the wrong datatype",()=>{
    
    return request(app).post('/api/tours').send(newTourWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })
  })

  it.only("POST request should return a 400 status if the request body has birdwatcher property field of the wrong datatype",()=>{
    
    return request(app).post('/api/birdwatchers').send(newBirdWatcherBadType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })
  })

  it.only("POST request should return a 400 status if the request body has watcher-tour property field of the wrong datatype",()=>{
    
    return request(app).post('/api/watchertours').send(newWatcherTourWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })
  })


  //

  //null tests

  it.only("POST request should return a 406 status if the request body has a property that is null when it should not be (birds relation(table))",()=>{
    return request(app).post('/api/birds').send(nullBird).expect(406).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("violates not-null constraint not acceptable request body or missing column or field")
    })
  })

  it.only("POST request should return a 406 status if the request body has a property that is null when it should not be (bird_families relation(table))",()=>{
    return request(app).post('/api/families').send(nullBirdFamily).expect(406).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("violates not-null constraint not acceptable request body or missing column or field")
    })
  })

  it.only("POST request should return a 406 status if the request body has a property that is null when it should not be (bird_orders relation(table))",()=>{
    return request(app).post('/api/orders').send(nullBirdOrder).expect(406).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("violates not-null constraint not acceptable request body or missing column or field")
    })
  })

  it.only("POST request should return a 406 status if the request body has a property that is null when it should not be (birdwatchers relation(table))",()=>{
    return request(app).post('/api/birdwatchers').send(nullBirdWatcher).expect(406).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("violates not-null constraint not acceptable request body or missing column or field")
    })
  })

  it.only("POST request should return a 406 status if the request body has a property that is null when it should not be (rookery_tour relation(table))",()=>{
    return request(app).post('/api/tours').send(nullTour).expect(406).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("violates not-null constraint not acceptable request body or missing column or field")
    })
  })
  //

  it.only("POST request should return a 400 status if the request body is an empty object (birds relation(table))",()=>{

    return request(app).post('/api/birds').send(emptyObj).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })
  })

  it.only("POST request should return a 400 status if the request body has less than the number of required fields (birds relation(table))",()=>{

    return request(app).post('/api/birds').send(malformedBird1).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  it.only("POST request should return a 400 status if the request body has more than the number of required fields (birds relation(table))",()=>{

    return request(app).post('/api/birds').send(malformedBird2).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  //family below

  it.only("POST request should return a 400 status if the request body is an empty object (bird_families relation(table))",()=>{

    return request(app).post('/api/families').send(emptyObj).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })
  })

  it.only("POST request should return a 400 status if the request body has less than the number of required fields (bird_families relation(table))",()=>{

    return request(app).post('/api/families').send(malformedFamily1).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  it.only("POST request should return a 400 status if the request body has more than the number of required fields (bird_families relation(table))",()=>{

    return request(app).post('/api/families').send(malformedFamily2).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  //orders below

  it.only("POST request should return a 400 status if the request body is an empty object (bird_orders relation(table))",()=>{

    return request(app).post('/api/orders').send(emptyObj).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })
  })

  it.only("POST request should return a 400 status if the request body has less than the number of required fields (bird_orders relation(table))",()=>{

    return request(app).post('/api/orders').send(malformedOrder1).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  it.only("POST request should return a 400 status if the request body has more than the number of required fields (bird_orders relation(table))",()=>{

    return request(app).post('/api/orders').send(malformedOrder2).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  //birdwatchers below

  it.only("POST request should return a 400 status if the request body is an empty object (birdwarchers relation(table))",()=>{

    return request(app).post('/api/birdwatchers').send(emptyObj).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })
  })

  it.only("POST request should return a 400 status if the request body has less than the number of required fields (birdwatchers relation(table))",()=>{

    return request(app).post('/api/birdwatchers').send(malformedBW1).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  it.only("POST request should return a 400 status if the request body has more than the number of required fields (birdwatchers relation(table))",()=>{

    return request(app).post('/api/birdwatchers').send(malformedBW2).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  //rookery tour below

  it.only("POST request should return a 400 status if the request body is an empty object (rookery_tour relation(table))",()=>{

    return request(app).post('/api/tours').send(emptyObj).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })
  })

  it.only("POST request should return a 400 status if the request body has less than the number of required fields (rookery_tour relation(table))",()=>{

    return request(app).post('/api/tours').send(malformedTour1).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  it.only("POST request should return a 400 status if the request body has more than the number of required fields (rookery_tour relation(table))",()=>{

    return request(app).post('/api/tours').send(malformedTour2).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  //watchers_tours below

  it.only("POST request should return a 400 status if the request body is an empty object (watchers_tours relation(table))",()=>{

    return request(app).post('/api/watchertours').send(emptyObj).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })
  })

  it.only("POST request should return a 400 status if the request body has less than the number of required fields (watchers_tours relation(table))",()=>{

    return request(app).post('/api/watchertours').send(malformedWatcherTours1).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })

  it.only("POST request should return a 400 status if the request body has more than the number of required fields (watchers_tours relation(table))",()=>{

    return request(app).post('/api/watchertours').send(malformedWatcherTours2).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe("malformed body or missing required fields")
    })

  })



  it("POST request of a new bird order to the database",()=>{
       
      return request(app).post('/api/orders').send(newBirdOrder).expect(201).then(({body})=>{
        const {addedOrder} = body
        expect(addedOrder).toMatchObject({
            o_scientific_name: "Apodiformes",
            order_image: Object.assign({"type": "Buffer"},{data: encoder.encode(`${__dirname}/../bird_images/bird_order_pics/Apodiformes.png`)}),
            shape_id: expect.any(Number),
            o_description:"This order includes hummingbirds and swifts. Their feet are scaleless and their young are born blind and hairless." 
        })
      })
  })

  it("POST request of a new bird family to the database",()=>{
       
    return request(app).post('/api/families').send(newBirdFamily).expect(201).then(({body})=>{
      const {addedNewFamily} = body
      expect(addedNewFamily).toMatchObject({
          scientific_fam_name: "Sturnidae",
          f_description: expect.any(String),
          clutch_size: 7,
          no_of_genera:27,
          no_of_species:111,
          o_id: expect.any(Number)
      })
    })
 })

it("POST request of a new bird to the database should add the bird to the database",()=>{      
  return request(app).post('/api/birds').send(newBird).expect(201).then(({body})=>{
    const {addedBird} = body
    console.log(addedBird)
    expect(addedBird).toMatchObject({
      bird_id: expect.any(Number),
      common_name: 'Emperor penguin',
      species_name: "Aptenodytes forsteri",
      wing_colour: "bluish-black",
      diet: "piscivorous",
      f_id: expect.any(Number),
      can_fly: false,
      length_cm: 120,
      weight_g: 23000,
      lay_season: 'spring/summer',
      fun_fact: 'These are the biggest species of penguin today; they can dive deep into ice cold water up to a recorded depth of 565m when catching fish and can hold their breath underwater for 22 minutes in water.',
      wingspan_cm: 83,
     
    })
  })
 })

 it("POST request of a new birdwatcher to the database should add the birdwatcher to the database",()=>{
       
  return request(app).post('/api/birdwatchers').send(newBirdWatcher).expect(201).then(({body})=>{
    const {addedBirdWatcher} = body
    expect(addedBirdWatcher).toMatchObject({
      bw_id : expect.any(Number),
      formal_title: "Mrs",
      first_name: "Anna",
      last_name: "Williams",
      age: 35,
      email_address: "anRwilliams@aol.com"
    })
  })
})


it("POST request of a new rookery tour to the database should add the rookery tour to the database",()=>{
       
  return request(app).post('/api/tours').send(newTour).expect(201).then(({body})=>{
    const {addedTour} = body
    expect(addedTour).toMatchObject({
        rtour_id: expect.any(Number),
        tour_name :"Budongo Forest Reserve",
        tour_type :"Educational",
        length_minutes:  4034,
        location : "Uganda",
        cost_pennies: "391589",
        date: new Date('2024-09-10 12:11:16+3').toISOString()//11     
    })
  })
})

it("POST request of a new watcher-tour to the database should add a newly booked watcher-tour record to the database",()=>{
       
  return request(app).post('/api/watchertours').send(newWatcherTour).expect(201).then(({body})=>{
    const {addedWatcherTour} = body
    expect(addedWatcherTour).toMatchObject({
        watcher_tour_id : expect.any(Number),
        watcher_id: expect.any(Number),
        tour_id: expect.any(Number)
    })
  })
})

})

describe("PATCH request data to rookery database tests",()=>{
  const newEmail = {
    email_address: "car_irwinloopy432@msn.com"
  }


  const newTourCost = {
    cost_pennies: "271000",

  }

  const newTourDate = {
    date: '2024-07-16 05:25:10+10'

  }

  const newTourLength = {
    length_minutes:  870

  }

  const newAssignedTour = {
    tour_id:  4

  }

  const rtour_id1 = 7
  const rtour_id2 = 3
  const rtour_id3 = 4
  const bw_id = 2
  const watcher_tour_id = 6 //birdwatcher with id 2 in the test data


  const badBW_ID = "2_"
  const badTourID = "3@FALSE7.67"
  const badWatcherTourID = 6.57

  const emptyPatchObj = {}

  //error tests

  const newEmailWrongType = {
    email_address: 34.5
  }

  const newTourDateWrongType = {
    date: 45

  }

  const newTourCostWrongType = {
    cost_pennies: "1.01",

  }


  const newTourLengthWrongType = {
    length_minutes:  '2.01'

  }

  const newAssignedTourWrongType = {
    tour_id:  '1.0@happey'

  }

  it.only("PATCH request to watchers_tours relation(table) should return 400 status response when request body has wrong datatype",()=>{

    return request(app).patch(`/api/watchertours/${watcher_tour_id}`).send(newAssignedTourWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe(`property-value is of the wrong datatype or request body is malformed`)
    })
  })

  it.only("PATCH request to rookery_tour (to change tour length) should return 400 status response when request body has wrong datatype",()=>{

    return request(app).patch(`/api/tours/length/${rtour_id2}`).send(newTourLengthWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe('property-value is of the wrong datatype or request body is malformed')
    })
  })

  it.only("PATCH request to rookery_tour (to change cost) should return 400 status response when request body has wrong datatype",()=>{

    return request(app).patch(`/api/tours/cost/${rtour_id1}`).send(newTourCostWrongType).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe('property-value is of the wrong datatype or request body is malformed')
    })
  })

  it.only("PATCH request to rookery_tour (to change date) should return 400 status response when request body has wrong datatype",()=>{

    return request(app).patch(`/api/tours/date/${rtour_id3}`).send(newTourDateWrongType).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe(`Bad patch request: property has wrong datatype attached`)
    })
  })

  it.only("PATCH request to birdwatchers should return 400 status response when request body has a property of the wrong datatype",()=>{

    return request(app).patch(`/api/birdwatchers/${bw_id}`).send(newEmailWrongType).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe('Bad patch request: property has wrong datatype attached')
    })
 })

  it.only("PATCH request to birdwatchers should return 400 status response when request body to endpoint is an empty object",()=>{

    return request(app).patch(`/api/birdwatchers/${bw_id}`).send(emptyPatchObj).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe(`malformed body or missing required fields`)
    })
 })

  it.only("PATCH request to rookery_tour (to change cost) should return 400 status response when request body to endpoint is an empty object",()=>{

  return request(app).patch(`/api/tours/cost/${rtour_id1}`).send(emptyPatchObj).expect(400).then(({body})=>{
    const {msg} = body
    expect(msg).toBe(`property-value is of the wrong datatype or request body is malformed`)
  })
})

  it.only("PATCH request to rookery_tour (to change tour length) should return 400 status response when request body to endpoint is an empty object",()=>{

  return request(app).patch(`/api/tours/length/${rtour_id2}`).send(emptyPatchObj).expect(400).then(({body})=>{
    const {msg} = body
    expect(msg).toBe(`property-value is of the wrong datatype or request body is malformed`)
  })
})
  
  it.only("PATCH request to rookery_tour (to change date) should return 400 status response when request body to endpoint is an empty object",()=>{

  return request(app).patch(`/api/tours/date/${rtour_id3}`).send(emptyPatchObj).expect(400).then(({body})=>{
    const {err} = body
    expect(err).toBe(`malformed body or missing required fields`)
  })
})

  it.only("PATCH request to birdwatchers should return 400 status response when the birdwatcher id passed into endpoint is not a number",()=>{

      return request(app).patch(`/api/birdwatchers/${badBW_ID}`).send(newEmail).expect(400).then(({body})=>{
        const {err} = body
        expect(err).toBe(`Bad patch request: passed in birdwatcher id is not a valid id.`)
      })
  })

  it.only("PATCH request to rookery_tour (to change cost) should return 400 status response when the rookery tour id passed into endpoint is not a number",()=>{

    return request(app).patch(`/api/tours/cost/${badTourID}`).send(newTourCost).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe(`Bad patch request: passed in rtour_id is not a valid id.`)
    })
  })

  it.only("PATCH request to rookery_tour (to change date) should return 400 status response when the rookery tour id passed into endpoint is not a number",()=>{

    return request(app).patch(`/api/tours/date/${badTourID}`).send(newTourDate).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe(`Bad patch request: passed in rtour_id is not a valid id.`)
    })
  })

  it.only("PATCH request to rookery_tour (to change tour length) should return 400 status response when the rookery tour id passed into endpoint is not a number",()=>{

    return request(app).patch(`/api/tours/length/${badTourID}`).send(newTourLength).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe(`Bad patch request: passed in rtour_id is not a valid id.`)
    })
  })

  it.only("PATCH request to watchers_tours relation(table) should return 400 status response when the watcher_tour_id  passed into endpoint is not a number",()=>{

    return request(app).patch(`/api/watchertours/${badWatcherTourID}`).send(newAssignedTour).expect(400).then(({body})=>{
      const {err} = body
      expect(err).toBe(`Bad patch request: passed in watcher_tour_id is not a valid id.`)
    })
  })



  //

  it("PATCH request should allow change of the birdwatcher\'s email address using the reference birdwatcher id",()=>{
     return request(app).patch(`/api/birdwatchers/${bw_id}`).send(newEmail).expect(200).then(({body})=>{
      const{updatedEmail} = body
      expect(updatedEmail.email_address).toBe("car_irwinloopy432@msn.com")
   })    
  })

  it("PATCH request should allow change of the rookery tour\'s cost in pennies using the reference rookery tour id",()=>{
    return request(app).patch(`/api/tours/cost/${rtour_id1}`).send(newTourCost).expect(200).then(({body})=>{
     const{updatedTourCost} = body
     expect(updatedTourCost.cost_pennies).toBe("271000")
  })    
 })

 it("PATCH request should allow change of the rookery tour\'s date using the reference rookery tour id",()=>{
  return request(app).patch(`/api/tours/date/${rtour_id2}`).send(newTourDate).expect(200).then(({body})=>{
   const{updatedTourDate} = body
   expect(updatedTourDate.date).toBe(new Date('2024-07-16 05:25:10+10').toISOString())
  })    
 })

 it("PATCH request should allow change of the rookery tour\'s length using the reference rookery tour id",()=>{
  return request(app).patch(`/api/tours/length/${rtour_id3}`).send(newTourLength).expect(200).then(({body})=>{
   const{updatedTourLength} = body
   expect(updatedTourLength.length_minutes).toBe(870)
  })    
 })

 it("PATCH request should allow change of the tour that a birdwatcher is assigned to using the reference watcher-tour id",()=>{
  return request(app).patch(`/api/watchertours/${watcher_tour_id}`).send(newAssignedTour).expect(200).then(({body})=>{
   const{updatedWatcherTour} = body
   expect(updatedWatcherTour.tour_id).toBe(4)
  })    
 })
})

describe("DELETE request tests for removing data (row(s)) from the database",()=>{

    const bw_id = 1
    const notFoundBWID = 120
    const notFoundBirdID = 1000
    const notFoundTourID = 25
    const rtourid = 8
    const bird_id = 6

    const badBWID= 1.39
    const badTourID = "34_9"
    const badBirdID = "TRUE"

   it.only("DELETE request using the birdwatcher\'s id should return a 204 status",()=>{
      return request(app).delete(`/api/birdwatchers/${bw_id}`).send(null).expect(204)
   })

   it.only("DELETE request should return a 404 status if the birdwatcher id is not found (already deleted or not in dataset)",()=>{

    return request(app).delete(`/api/birdwatchers/${notFoundBWID}`).send(null).expect(404).then(({body})=>{
      const {err} = body
      expect(err).toBe("cannot delete-birdwatcher with that id was already deleted or id not in original dataset")
    })

   })

   it.only("DELETE request should return a 400 status if the birdwatcher id is not a valid id",()=>{

    return request(app).delete(`/api/birdwatchers/${badBWID}`).send(null).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })

   })

   it.only("DELETE request using the tour\'s id should return a 204 status",()=>{
    return request(app).delete(`/api/tours/${rtourid}`).send(null).expect(204)
 })

 it.only("DELETE request should return a 404 status if the tour id is not found (already deleted or not in dataset)",()=>{

  return request(app).delete(`/api/tours/${notFoundTourID}`).send(null).expect(404).then(({body})=>{
    const {err} = body
    expect(err).toBe("cannot delete-tour with that id was already deleted or id not in original dataset")
  })

 })

 it.only("DELETE request should return a 400 status if the tour id is not a valid id",()=>{

  return request(app).delete(`/api/tours/${badTourID}`).send(null).expect(400).then(({body})=>{
    const {msg} = body
    expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
  })

 })



   it.only("DELETE request using the birds\'s id should return a 204 status",()=>{
  return request(app).delete(`/api/birds/${bird_id}`).send(null).expect(204)
  })

  it.only("DELETE request should return a 404 status if the bird id is not found (already deleted or not in dataset)",()=>{

    return request(app).delete(`/api/birds/${notFoundBirdID}`).send(null).expect(404).then(({body})=>{
      const {err} = body
      expect(err).toBe("cannot delete-bird with that id was already deleted or id not in original dataset")
    })
  
   })

   it.only("DELETE request should return a 400 status if the bird id is not a valid id",()=>{

    return request(app).delete(`/api/birds/${badBirdID}`).send(null).expect(400).then(({body})=>{
      const {msg} = body
      expect(msg).toBe("property-value is of the wrong datatype or request body is malformed")
    })
  
   })
})
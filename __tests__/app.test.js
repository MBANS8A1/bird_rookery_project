const request = require("supertest")
const db = require("../db/index.js")
const {wing_shapeData,birdsOrdersData,birdsFamiliesData,birdsData,birdwatchersData,rookeryTourData,watcherTourData} = require("../db/data/test-data/index.js")
const seed = require("../db/seed.js")
const app = require("../app.js")

beforeEach(() =>seed({wing_shapeData,birdsOrdersData,birdsFamiliesData,birdsData,birdwatchersData,rookeryTourData,watcherTourData}))

afterAll(() =>db.end())


describe("Endpoint(path) is not recognized and cannot be found for rookery",()=>{

    it("Should return status code 404 when passed bad path",()=>{
        return request(app).get('/api/fjrofjiro303gjvn200').expect(404).then(({ body }) => {
            expect(body.message).toBe('HTTP 404 error: path cannot be found');
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

describe.only("GET ALL endpoint returned data tests",()=>{

    it("should return bird test data after test database has been seeded",()=>{

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

    it("should return birdwatcher test data after test database has been seeded",()=>{

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

    it("should return bird families test data after test database has been seeded",()=>{

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

    it("should return bird order test data after test database has been seeded",()=>{

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

    it("should return rookery tour test data after test database has been seeded",()=>{

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

    it("should return wing shape test data after test database has been seeded",()=>{

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

    it("should return watcher tour test data after test database has been seeded",()=>{

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

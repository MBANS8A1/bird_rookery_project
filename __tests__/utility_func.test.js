const testData_ws = require('../db/data/test-data/wing_shape.js')
//const testData_ord = require('../db/data/test-data/bird_orders.js')
//const testData_fam = require('../db/data/test-data/bird_families.js')
//const testData_birds = require('../db/data/test-data/birds.js')



const{parseObjToNestedArr,createWingsRef,createOrdersRef,createFamiliesRef,addWIdToOrders,addOIdToFamilies,addFIdToFamilies} = require('../utility_funcs/utility_funcs.js')


describe('formatting test(s) for pg-format',()=>{
    test('function should return the data in format of a nested array(2d array) from input array of objects',()=>{
        const testArray = testData_ws
       const result =  parseObjToNestedArr(testArray)
       expect(result).toEqual([
        [
           "Passive soaring wings",
            "These wings have long broad feathers that are spread out integrated wing slots for warm air to rise through (creating \'thermals\') that help the bird rise even higher in the sky. This mechanism of maintaining altitude helps the bird to conserve energy and circle on any prey spotted.",
            "../../../bird_images/passive_soaring_wings.png" 
        ],
        [
           "Elliptical wings",
            "These wings are adapted for generating bursts of high speed, but involves a lot of necessary flapping in order to do so. These wings are short and broad with have large wing slots. Birds with these wings take off and land quickly and can make sharp maneuvers and acrobatics in the process. These wings help birds catch prey but also makes them able to dodge other larger bird predators.",
            "../../../bird_images/elliptical_wings.png" 
        ]
    ]
    )
    })//test

    test('If passed and empty array it should return an empty array',()=>{
        const testArray = []
        const result =  parseObjToNestedArr(testArray)
        expect(result).toEqual([])
    })

    test('The function should not mutate the original array',()=>{
        const testArray = testData_ws
        const testData_wsClone  = testData_ws
        parseObjToNestedArr(testArray)
        expect(testArray).toEqual(testData_wsClone)
    })

    test('The function should return a new array with a different reference in memory',()=>{
        const testArray = testData_ws
        const result = parseObjToNestedArr(testArray)
        expect(result).not.toBe(testArray)
    })
})//describe

describe('object lookup creation tests for create referential integrity between relations',()=>{

   const wingArray=[ {
        wing_id : 1,
        shape_name:"Passive soaring wings",
        w_description:"These wings have long broad feathers that are spread out integrated wing slots for warm air to rise through (creating \'thermals\') that help the bird rise even higher in the sky. This mechanism of maintaining altitude helps the bird to conserve energy and circle on any prey spotted.",
        image:"../../../bird_images/passive_soaring_wings.png" 
        },
        {
        wing_id : 2,
        shape_name:"Elliptical wings",
        w_description:"These wings are adapted for generating bursts of high speed, but involves a lot of necessary flapping in order to do so. These wings are short and broad with have large wing slots. Birds with these wings take off and land quickly and can make sharp maneuvers and acrobatics in the process. These wings help birds catch prey but also makes them able to dodge other larger bird predators.",
        image:"../../../bird_images/elliptical_wings.png"
        }
    ]

    const familyArray = [
        {
            family_id : 1,
            scientific_fam_name: "Mesitornithidae",
            f_description: "These are a family of small near-flightless birds endemic to Madagascar. Every species in this family (white, brown and sub-desert) is threatened. They are vocal birds that produce passerine-like sounds for territorial defence",
            clutch_size : '[2,3]',
            habitats: ["dry forests","woodlands"],
            predators:["reptiles","larger mammals"],
            order:"Mesitornithiformes"
        },
        {
            family_id : 2,
            scientific_fam_name: "Strigidae",
            f_description: "This is a large family that includes the True Owl found on all continents except Antarctica. 95% are forest-dwelling but most are non-migratory with rest migrating depending on the seasons. These owls have large heads, elongated eyes and a short hooked bill that point downwards. Many species have ear tufts that are suggested to be for behavioural functions. They have talons that are sharp and hooked and with a reversible fourth toes (zygodactyly). Like most owls they hunt in low-light conditions. When confronted with danger they will crouch down, lower their heads, dropp their wings and ruffle their feathers.",
            clutch_size : '[3,4]',
            habitats: ["forests","tundras","deserts"],
            predators:["none"],
            order:"Strigiformes"
        },
    ]

    const orderArray = [
        {
            order_id : 1,
            o_scientific_name : "Mesitornithiformes",
            order_image: '../../../bird_images/bird_order_pics/Mesitornithiformes.jpeg',
            shape:"Elliptical wings",
            o_description : "This order contains 2 genera and 1 family; this group contains the mesites that are non-passerines endemic to Madagascar. The species of mesites are endangered and does not prefer flying. It spends the majority of its time on land."
        },
        {
            order_id : 2,
            o_scientific_name : "Strigiformes",
            order_image : '../../../bird_images/bird_order_pics/Strigiformes.jpg',
            shape:"Passive soaring wings",
            o_description : "These are approximately 200 species of owls in this order. They have distinctive camouflage that helps them hide from their prey. Many species have feathered legs and feet. The make vocalizations from  soft hoots to screeching calls. Most have the ability to swivel their heads at least 270 degrees."
        },
    ]
    test('The lookup creation functions should return an object with the name followed by the unique id',()=>{
        const result1 = createWingsRef(wingArray)
        expect(result1).toEqual({
            "Passive soaring wings" : 1,
            "Elliptical wings" : 2,
        })

        const result2 = createOrdersRef(orderArray)
        expect(result2).toEqual({
            "Mesitornithiformes" : 1,
            "Strigiformes" : 2,
        })

        const result3 = createFamiliesRef(familyArray)
        expect(result3).toEqual({
            "Mesitornithidae" : 1,
            "Strigidae" : 2,
        })

    })

    test('return type should be of object',()=>{
        const result1 = createWingsRef(wingArray)
        expect(typeof result1).toBe('object')

        const result2 = createOrdersRef(orderArray)
        expect(typeof result2).toBe('object')

        const result3 = createFamiliesRef(familyArray)
        expect(typeof result3).toBe('object')
    })
            
})//describe


describe('switchout tests for ids provided by the ref functions',()=>{
    const wingArray1=[ {
        wing_id : 1,
        shape_name:"Passive soaring wings",
        w_description:"These wings have long broad feathers that are spread out integrated wing slots for warm air to rise through (creating \'thermals\') that help the bird rise even higher in the sky. This mechanism of maintaining altitude helps the bird to conserve energy and circle on any prey spotted.",
        image:"../../../bird_images/passive_soaring_wings.png" 
        },
        {
        wing_id : 2,
        shape_name:"Elliptical wings",
        w_description:"These wings are adapted for generating bursts of high speed, but involves a lot of necessary flapping in order to do so. These wings are short and broad with have large wing slots. Birds with these wings take off and land quickly and can make sharp maneuvers and acrobatics in the process. These wings help birds catch prey but also makes them able to dodge other larger bird predators.",
        image:"../../../bird_images/elliptical_wings.png"
        }
    ]

    const familyArray1 = [
        {
            family_id : 1,
            scientific_fam_name: "Mesitornithidae",
            f_description: "These are a family of small near-flightless birds endemic to Madagascar. Every species in this family (white, brown and sub-desert) is threatened. They are vocal birds that produce passerine-like sounds for territorial defence",
            clutch_size : '[2,3]',
            habitats: ["dry forests","woodlands"],
            predators:["reptiles","larger mammals"],
            order:"Mesitornithiformes"
        },
        {
            family_id : 2,
            scientific_fam_name: "Strigidae",
            f_description: "This is a large family that includes the True Owl found on all continents except Antarctica. 95% are forest-dwelling but most are non-migratory with rest migrating depending on the seasons. These owls have large heads, elongated eyes and a short hooked bill that point downwards. Many species have ear tufts that are suggested to be for behavioural functions. They have talons that are sharp and hooked and with a reversible fourth toes (zygodactyly). Like most owls they hunt in low-light conditions. When confronted with danger they will crouch down, lower their heads, dropp their wings and ruffle their feathers.",
            clutch_size : '[3,4]',
            habitats: ["forests","tundras","deserts"],
            predators:["none"],
            order:"Strigiformes"
        },
    ]

    const orderArray1 = [
        {
            order_id : 1,
            o_scientific_name : "Mesitornithiformes",
            order_image: '../../../bird_images/bird_order_pics/Mesitornithiformes.jpeg',
            shape:"Elliptical wings",
            o_description : "This order contains 2 genera and 1 family; this group contains the mesites that are non-passerines endemic to Madagascar. The species of mesites are endangered and does not prefer flying. It spends the majority of its time on land."
        },
        {
            order_id : 2,
            o_scientific_name : "Strigiformes",
            order_image : '../../../bird_images/bird_order_pics/Strigiformes.jpg',
            shape:"Passive soaring wings",
            o_description : "These are approximately 200 species of owls in this order. They have distinctive camouflage that helps them hide from their prey. Many species have feathered legs and feet. The make vocalizations from  soft hoots to screeching calls. Most have the ability to swivel their heads at least 270 degrees."
        },
    ]

    const orderDataBlk = [
        {
            o_scientific_name : "Mesitornithiformes",
            order_image: '../../../bird_images/bird_order_pics/Mesitornithiformes.jpeg',
            shape:"Elliptical wings",
            o_description : "This order contains 2 genera and 1 family; this group contains the mesites that are non-passerines endemic to Madagascar. The species of mesites are endangered and does not prefer flying. It spends the majority of its time on land."
        },
        {
            o_scientific_name : "Strigiformes",
            order_image : '../../../bird_images/bird_order_pics/Strigiformes.jpg',
            shape:"Passive soaring wings",
            o_description : "These are approximately 200 species of owls in this order. They have distinctive camouflage that helps them hide from their prey. Many species have feathered legs and feet. The make vocalizations from  soft hoots to screeching calls. Most have the ability to swivel their heads at least 270 degrees."
        }
    ]

    const familyDataBlk = [
        {
            scientific_fam_name: "Mesitornithidae",
            f_description: "These are a family of small near-flightless birds endemic to Madagascar. Every species in this family (white, brown and sub-desert) is threatened. They are vocal birds that produce passerine-like sounds for territorial defence",
            clutch_size : '[2,3]',
            habitats: ["dry forests","woodlands"],
            predators:["reptiles","larger mammals"],
            order:"Mesitornithiformes"
        },
        {
            scientific_fam_name: "Strigidae",
            f_description: "This is a large family that includes the True Owl found on all continents except Antarctica. 95% are forest-dwelling but most are non-migratory with rest migrating depending on the seasons. These owls have large heads, elongated eyes and a short hooked bill that point downwards. Many species have ear tufts that are suggested to be for behavioural functions. They have talons that are sharp and hooked and with a reversible fourth toes (zygodactyly). Like most owls they hunt in low-light conditions. When confronted with danger they will crouch down, lower their heads, dropp their wings and ruffle their feathers.",
            clutch_size : '[3,4]',
            habitats: ["forests","tundras","deserts"],
            predators:["none"],
            order:"Strigiformes"
        },
    ]

    const birdDataBlk = [
        {
            common_name: "Brown mesite",
            species_name: " Mesitornis unicolor",
            wing_colour: "reddish-brown",
            diet: ["insects", "spiders", "molluscs"],
            can_Fly: true,
            length_cm: 30,
            weight_g: 148,
            lay_season: "winter",
            family: "Mesitornithidae",
            fun_fact:
              "This is a ground-dwelling bird endemic to Madagascar that is inhabits humid rainforests in the east of the island country",
        
            wingspan_cm: 15,
          },
          {
            common_name: "Great horned owl",
            species_name: "Bubo virginianus",
            wing_colour: "mottled brown with black bars/markings",
            diet: [
              "smaller-birds",
              "fish",
              "amphibians",
              "insects",
              "scorpions",
              "crustaceans",
              "carrion",
              "small-mammals",
            ],
            can_Fly: true,
            length_cm: 64,
            weight_g: 1400,
            lay_season: "spring",
            family: "Strigidae",
            fun_fact:
              'These owl get their name from the two horn-shaped tufts of feathers on either side of their head; this is the owl that makes the characteristic "Hoo HooHoooooo HooHoo" sound that can be heard from miles away. ',
        
            wingspan_cm: 140,
          }
    ]


    test('Functions should swap out the appropriate names for their corresponding ids that will be foreign keys for referential integrity to another relation',()=>{

         const makewingsRef = createWingsRef(wingArray1)
         const makeordersRef = createOrdersRef(orderArray1)
         const makeFamiliesRef = createFamiliesRef(familyArray1)

         const result1 = addWIdToOrders(orderDataBlk,makewingsRef)
         const result2 = addOIdToFamilies(familyDataBlk,makeordersRef)
         const result3 = addFIdToFamilies(birdDataBlk,makeFamiliesRef)

         expect(result1).toEqual([ {
            o_scientific_name : "Mesitornithiformes",
            order_image: '../../../bird_images/bird_order_pics/Mesitornithiformes.jpeg',
            shape_id:2,
            o_description : "This order contains 2 genera and 1 family; this group contains the mesites that are non-passerines endemic to Madagascar. The species of mesites are endangered and does not prefer flying. It spends the majority of its time on land."
        },
        {
            o_scientific_name : "Strigiformes",
            order_image : '../../../bird_images/bird_order_pics/Strigiformes.jpg',
            shape_id:1,
            o_description : "These are approximately 200 species of owls in this order. They have distinctive camouflage that helps them hide from their prey. Many species have feathered legs and feet. The make vocalizations from  soft hoots to screeching calls. Most have the ability to swivel their heads at least 270 degrees."
        }

         ])//expect

         expect(result2).toEqual([
            {
                scientific_fam_name: "Mesitornithidae",
                f_description: "These are a family of small near-flightless birds endemic to Madagascar. Every species in this family (white, brown and sub-desert) is threatened. They are vocal birds that produce passerine-like sounds for territorial defence",
                clutch_size : '[2,3]',
                habitats: ["dry forests","woodlands"],
                predators:["reptiles","larger mammals"],
                o_id:1
            },
            {
                scientific_fam_name: "Strigidae",
                f_description: "This is a large family that includes the True Owl found on all continents except Antarctica. 95% are forest-dwelling but most are non-migratory with rest migrating depending on the seasons. These owls have large heads, elongated eyes and a short hooked bill that point downwards. Many species have ear tufts that are suggested to be for behavioural functions. They have talons that are sharp and hooked and with a reversible fourth toes (zygodactyly). Like most owls they hunt in low-light conditions. When confronted with danger they will crouch down, lower their heads, dropp their wings and ruffle their feathers.",
                clutch_size : '[3,4]',
                habitats: ["forests","tundras","deserts"],
                predators:["none"],
                o_id:2
            }

         ])//expect

         expect(result3).toEqual([
                {
                    common_name: "Brown mesite",
                    species_name: " Mesitornis unicolor",
                    wing_colour: "reddish-brown",
                    diet: ["insects", "spiders", "molluscs"],
                    can_Fly: true,
                    length_cm: 30,
                    weight_g: 148,
                    lay_season: "winter",
                    f_id: 1,
                    fun_fact:
                      "This is a ground-dwelling bird endemic to Madagascar that is inhabits humid rainforests in the east of the island country",
                
                    wingspan_cm: 15,
                  },
                  {
                    common_name: "Great horned owl",
                    species_name: "Bubo virginianus",
                    wing_colour: "mottled brown with black bars/markings",
                    diet: [
                      "smaller-birds",
                      "fish",
                      "amphibians",
                      "insects",
                      "scorpions",
                      "crustaceans",
                      "carrion",
                      "small-mammals",
                    ],
                    can_Fly: true,
                    length_cm: 64,
                    weight_g: 1400,
                    lay_season: "spring",
                    f_id: 2,
                    fun_fact:
                      'These owl get their name from the two horn-shaped tufts of feathers on either side of their head; this is the owl that makes the characteristic "Hoo HooHoooooo HooHoo" sound that can be heard from miles away. ',
                
                    wingspan_cm: 140,
                  }
            
         ])


      }
    ) //test

    test('the swap out functions should not mutate the original array',()=>{

        const orderDataBlkCl =[
            {
                o_scientific_name : "Mesitornithiformes",
                order_image: '../../../bird_images/bird_order_pics/Mesitornithiformes.jpeg',
                shape:"Elliptical wings",
                o_description : "This order contains 2 genera and 1 family; this group contains the mesites that are non-passerines endemic to Madagascar. The species of mesites are endangered and does not prefer flying. It spends the majority of its time on land."
            },
            {
                o_scientific_name : "Strigiformes",
                order_image : '../../../bird_images/bird_order_pics/Strigiformes.jpg',
                shape:"Passive soaring wings",
                o_description : "These are approximately 200 species of owls in this order. They have distinctive camouflage that helps them hide from their prey. Many species have feathered legs and feet. The make vocalizations from  soft hoots to screeching calls. Most have the ability to swivel their heads at least 270 degrees."
            }
        ]
        const familyDataBlkCl = [
            {
                scientific_fam_name: "Mesitornithidae",
                f_description: "These are a family of small near-flightless birds endemic to Madagascar. Every species in this family (white, brown and sub-desert) is threatened. They are vocal birds that produce passerine-like sounds for territorial defence",
                clutch_size : '[2,3]',
                habitats: ["dry forests","woodlands"],
                predators:["reptiles","larger mammals"],
                order:"Mesitornithiformes"
            },
            {
                scientific_fam_name: "Strigidae",
                f_description: "This is a large family that includes the True Owl found on all continents except Antarctica. 95% are forest-dwelling but most are non-migratory with rest migrating depending on the seasons. These owls have large heads, elongated eyes and a short hooked bill that point downwards. Many species have ear tufts that are suggested to be for behavioural functions. They have talons that are sharp and hooked and with a reversible fourth toes (zygodactyly). Like most owls they hunt in low-light conditions. When confronted with danger they will crouch down, lower their heads, dropp their wings and ruffle their feathers.",
                clutch_size : '[3,4]',
                habitats: ["forests","tundras","deserts"],
                predators:["none"],
                order:"Strigiformes"
            },
        ]
        const birdDataBlkCl = [
            {
                common_name: "Brown mesite",
                species_name: " Mesitornis unicolor",
                wing_colour: "reddish-brown",
                diet: ["insects", "spiders", "molluscs"],
                can_Fly: true,
                length_cm: 30,
                weight_g: 148,
                lay_season: "winter",
                family: "Mesitornithidae",
                fun_fact:
                  "This is a ground-dwelling bird endemic to Madagascar that is inhabits humid rainforests in the east of the island country",
            
                wingspan_cm: 15,
              },
              {
                common_name: "Great horned owl",
                species_name: "Bubo virginianus",
                wing_colour: "mottled brown with black bars/markings",
                diet: [
                  "smaller-birds",
                  "fish",
                  "amphibians",
                  "insects",
                  "scorpions",
                  "crustaceans",
                  "carrion",
                  "small-mammals",
                ],
                can_Fly: true,
                length_cm: 64,
                weight_g: 1400,
                lay_season: "spring",
                family: "Strigidae",
                fun_fact:
                  'These owl get their name from the two horn-shaped tufts of feathers on either side of their head; this is the owl that makes the characteristic "Hoo HooHoooooo HooHoo" sound that can be heard from miles away. ',
            
                wingspan_cm: 140,
              }
        ]
            
        const makewingsRef = createWingsRef(wingArray1)
        const makeordersRef = createOrdersRef(orderArray1)
        const makeFamiliesRef = createFamiliesRef(familyArray1)

        addWIdToOrders(orderDataBlk,makewingsRef)
         addOIdToFamilies(familyDataBlk,makeordersRef)
         addFIdToFamilies(birdDataBlk,makeFamiliesRef)

        expect(orderDataBlk).toEqual(orderDataBlkCl)
        expect(familyDataBlk).toEqual(familyDataBlkCl)
        expect(birdDataBlk).toEqual(birdDataBlkCl)

    })//test

    test('swap out functions should return a new array',()=>{
        const makewingsRef = createWingsRef(wingArray1)
        const makeordersRef = createOrdersRef(orderArray1)
        const makeFamiliesRef = createFamiliesRef(familyArray1)

       const result1 = addWIdToOrders(orderDataBlk,makewingsRef)
       const result2 =  addOIdToFamilies(familyDataBlk,makeordersRef)
       const result3 = addFIdToFamilies(birdDataBlk,makeFamiliesRef)

        expect(result1).not.toBe(orderDataBlk)
        expect(result2).not.toBe(familyDataBlk)
        expect(result3).not.toBe(birdDataBlk)
    })
})//describe

//added a comment
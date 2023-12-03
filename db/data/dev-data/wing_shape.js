//shape_d will be here (have to create this table after order and family and then after this table create birds)
module.exports = [

    {
        shape_name:"Passive soaring wings",
        w_description:"These wings have long broad feathers that are spread out integrated wing slots for warm air to rise through (creating \'thermals\') that help the bird rise even higher in the sky. This mechanism of maintaining altitude helps the bird to conserve energy and circle on any prey spotted.",
        image:"../../../bird_images/passive_soaring_wings.png" //1
        //eagles hawks cranes vultures
    },
    {
        shape_name:"Active soaring wings",
        w_description:"These wings are long and narrow and there are no wing slots; these wings allow higher soaring. Birds with these wings depend more on the flow and direction of wind currents meaning they do not need to flap as often. Due to this, these birds fly over oceans and large bodies of water where there a constant strong wind currents.",
        image: "../../../bird_images/active_soaring_wings.png" //2
        //albatrosses, gannets
    } 
    ,  
    {
        shape_name:"Elliptical wings",
        w_description:"These wings are adapted for generating bursts of high speed, but involves a lot of necessary flapping in order to do so. These wings are short and broad with have large wing slots. Birds with these wings take off and land quickly and can make sharp maneuvers and acrobatics in the process. These wings help birds catch prey but also makes them able to dodge other larger bird predators.",
        image:"../../../bird_images/elliptical_wings.png" //3
        //crows, ravens, blackbirds, sparrows, and thrushes
    },
    {
        shape_name:"High-speed wings",
        w_description:"These wings are long and thin but not as long as active soaring wings. Birds with these wings are very fast as the name implies. The wings are tapered and the are no wing slots and birds with these wings can hunt their prey in the air as well as dive and swoop quickly to catch their prey ",
        image:"../../../bird_images/high_speed_wings.png" //4
        //falcons, swifts, swallows, and terns
    },
    {
        shape_name:"Hovering wings",
        w_description:"These are small but quick wings shaped around adapted blood vessels and nerves to help create incredibly fast movements. These wings are good for birds that sip nectar like the Ruby-throated Hummingbird.",
        image: "../../../bird_images/hovering_wings_pattern.jpg" //5
        //hummingbirds
    } 
]
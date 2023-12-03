/**
 rookery_tour
tour_id PRIMARY KEY
tour_name
type:VARCHAR seasonal/entertainment/
tour_length INT
human_id REFERENCES humans(human_id)
location varchar
cost_pounds BIGINT
date timestamptz
 */

rookeryTourD = [
    {
        tour_name :"Frigid Shenanigans",
        tour_type :"Entertainment",
        length: 120,
        location : "South Georgia",
        cost_pennies: 2500000,
        date: '2023-12-15 19:10:25-0' //1
    },
    {
        tour_name :"Scorching Sahara",
        tour_type :"Educational",
        length: 65,
        location : "Mauritania",
        cost_pennies: 2800000,
        date: '2024-01-06 12:09:15-0'//2
    },
    {
        tour_name :"Secluded Amazonia",
        tour_type :"Educational",
        length : 180,
        location : "Brazil",
        cost_pennies: 6000000,
        date: '2024-03-19 11:10:50-3' //3
    },
    {
        tour_name :"London Zoo Comprehension",
        tour_type :"Educational",
        length : 50,
        location : "London",
        cost_pennies: 6000,
        date: '2024-06-20 13:05:45-0'//4
    },
    {
        tour_name :"Hallerbos Forest Trek",
        tour_type :"Entertainment",
        bw_id : 2,
        length : 600,
        location : "Belgium",
        cost_pennies: 170000,
        date: '2024-04-13 13:05:45+1'//5
    },
    {
        tour_name :"Plitvice Lake Cruise",
        tour_type :"Entertainment",
        bw_id : 2,
        length : 560,
        location : "Croatia",
        cost_pennies: 200075,
        date: '2024-03-11 14:10:45+1'//6
    },
    {
        tour_name :"Triglan Forest Escapade",
        tour_type :"Educational",
        length : 360,
        location : "London",
        cost_pennies: 310000,
        date: '2024-02-22 09:16:00+1'//7
    },
    {
        tour_name :"Wild Taiga Reserve",
        tour_type :"Educational",
        length :  240,
        location : "Finland",
        cost_pennies: 157500,
        date: '2024-10-02 18:00:30+2'//8
    },
    {
        tour_name :"Mau Forest Entanglement",
        tour_type :"Entertainment",
        length :  2760,
        location : "Kenya",
        cost_pennies: 263575,
        date: '2024-05-04 07:30:45+3'//9
    },
    {
        tour_name :"Ongoya Downsouth",
        tour_type :"Educational",
        length :  2340,
        location : "South Africa",
        cost_pennies: 342600,
        date: '2024-08-11 10:12:59+2'//10
    },
    {
        tour_name :"Budongo Forest Reserve",
        tour_type :"Educational",
        length :  4034,
        location : "Uganda",
        cost_pennies: 391589,
        date: '2024-09-10 12:11:16+3'//11
    },
    {
        tour_name :"Mekong River Discovery",
        tour_type :"Entertainment",
        length :  650,
        location : "Cambodia",
        cost_pennies: "542000",
        date: '2024-01-23 12:11:16+7'//12
    },
    {
        tour_name :"Himalayaan subtropical climb",
        tour_type :"Educational",
        length :  1020,
        location : "Bhutan",
        cost_pennies: "496600",
        date: '2024-04-17 05:15:30+6'//13
    },
    {
        tour_name :"Himalayaan subtropical climb",
        tour_type :"Educational",
        length :  1020,
        location : "Bhutan",
        cost_pennies: "496600",
        date: '2024-03-31 05:15:30+6'//14
    },
    {
        tour_name :"Taiheiyo montane green pathway",
        tour_type :"Educational",
        length :  485,
        location : "Japan",
        cost_pennies: "313000",
        date: '2024-04-29 08:25:00+9'//15
    },
    {
        tour_name :"Arkansas rough neckwood",
        tour_type :"Entertainment",
        length :  330,
        location : "USA",
        cost_pennies: "255000",
        date: '2024-06-12 17:30:00-6'//16
    },
    {
        tour_name :"Arkansas rough neckwood",
        tour_type :"Entertainment",
        length :  330,
        location : "USA",
        cost_pennies: "255000",
        date: '2024-06-12 17:30:00-6'//17
    },
    {
        tour_name :"White mountain forest creepy incline",
        tour_type :"Entertainment",
        length :  "150",
        location : "USA",
        cost_pennies: "146700",
        date: '2024-07-07 15:10:20-5'//18
    },
    {
        tour_name :"Arctic tundra biting freezr",
        tour_type :"Educational",
        length :  "405",
        location : "Russia",
        cost_pennies: "204600",
        date: '2024-10-22 11:30:00+3'//19
    },
    {
        tour_name :"Daintree park funfest",
        tour_type :"Entertainment",
        length :  "340",
        location : "Australia",
        cost_pennies: "593419",
        date: '2024-06-30 04:25:10+10'//20
    }
]

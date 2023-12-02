//dev data only
//table structure
/*
bird_id INT SERIAL PRIMARY KEY,
b_species VARCHAR (255),
wing_colour VARCHAR(45),
diet TEXT ARRAY(25),
can_Fly Boolean
length_cm
height_cm
average_wingspan_ft: NUMERIC (5,2),
laying_season VARCHAR (25),
common_name VARCHAR(50),
family, INT
fun_factTEXT
order
*/
module.exports = [
  {
    common_name: "Feral pigeon",
    species_name: "Columba livia domestica",
    wing_colour: "blue-black",
    diet: ["cereals", "berries", "insects"],
    can_Fly: true,
    length_cm: 33,
    weight_g: 260,
    lay_season: "spring/summer",
    family: "Columbidae",
    fun_fact: "Feral pigeon guano contains over 50 known diseases",

    wingspan_cm: 65,
  },
  {
    common_name: "European Turtle Dove",
    species_name: "Streptopelia turtur",
    wing_colour: "brown-black",
    diet: ["cereals", "weeds"],
    can_Fly: true,
    length_cm: 27,
    weight_g: 110,
    lay_season: "spring/summer",
    family: "Columbidae",
    fun_fact:
      "Smallest native pigeon in England with breeding grounds in southern and Eastern England and wintering grounds in W. Africa",

    wingspan_cm: 48,
  },
  {
    common_name: "Common Kingfisher",
    species_name: "Alcedo atthis",
    wing_colour: "cyan-blue",
    diet: ["fish", "crustaceans"],
    can_Fly: true,
    length_cm: 17,
    weight_g: 31,
    lay_season: "spring",
    family: "Alcedinidae",
    fun_fact:
      "Kingfishers inspired Japanese bullet trains and actually don't like each other",

    wingspan_cm: 25,
  },

  {
    common_name: "Asian green bee-eater",
    species_name: "Merops orientalis",
    wing_colour: "green",
    diet: ["insects"],
    can_Fly: true,
    length_cm: 18,
    weight_g: 15,
    lay_season: "spring/summer",
    family: "Meropidae",
    fun_fact:
      "Have great predator-avoidance behaviour where they won't enter their nest until a predator literally looks away",

    wingspan_cm: 29,
  },
  {
    common_name: "Jamaican tody",
    species_name: "Todus todus",
    wing_colour: "green",
    diet: ["reptiles", "millipedes", "spiders", "insects"],
    can_Fly: true,
    length_cm: 10,
    weight_g: 6,
    lay_season: "winter",
    family: "Todidae",
    fun_fact:
      "They are easily found in their island and humid-mountain habitats as they move around in pairs",

    wingspan_cm: 5,
  },
  {
    common_name: "Sunbittern",
    species_name: "Eurypyga helias",
    wing_colour: "multi-coloured",
    diet: ["insects", "earthworms", "spiders", "crustaceans"],
    can_Fly: true,
    length_cm: 45,
    weight_g: 200,
    lay_season: "variable",
    family: "Eurypygidae",
    fun_fact:
      "They have an appearance the resembles the colour shades of the sunset.",

    wingspan_cm: 65,
  },
  {
    common_name: "Kagu",
    species_name: "Rhynochetos jubatus",
    wing_colour: "blue-grey",
    diet: ["insects", "annelid-worms", "reptiles", "molluscs"],
    can_Fly: false,
    length_cm: 55,
    weight_g: 950,
    lay_season: "variable",
    family: "Rhynochetidae",
    fun_fact:
      "This bird that glides (not flies) has skin flaps to cover its nostrils that prevent dirt from entering them when it digs the forest floor for leaves and its prey. ",

    wingspan_cm: 63,
  },
  {
    common_name: "Lanner Falcon",
    species_name: "Falco biarmicus",
    wing_colour: "brown-grey",
    diet: ["bats", "reptiles", "thrushes", "pigeons"],
    can_Fly: true,
    length_cm: 45,
    weight_g: 610,
    lay_season: "winter",
    family: "Falconidae",
    fun_fact:
      "These birds are solitary and lives with one partner per lifetime and do not build their own nests but used abandoned ones to breed. ",

    wingspan_cm: 103,
  },

  {
    common_name: "Common Kestrel",
    species_name: "Falco tinnunculus",
    wing_colour: "brown-blacck",
    diet: ["voles", "shrews", "mice"],
    can_Fly: true,
    length_cm: 35,
    weight_g: 180,
    lay_season: "spring",
    family: "Falconidae",
    fun_fact: "They often hunt along roads and motorways",

    wingspan_cm: 80,
  },
  {
    common_name: "Peregrine Falcon",
    species_name: "Falco peregrinus",
    wing_colour: "blue-black",
    diet: ["red grouse", "pigeons", "ducks", "gulls,small-mammals"],
    can_Fly: true,
    length_cm: 30,
    weight_g: 155,
    lay_season: "spring",
    family: "Falconidae",
    fun_fact:
      "They have a 3rd eyelid called a nictitating membrane for eye protection and have unmatched flight speeds of 242mph.",

    wingspan_cm: 115,
  },
  {
    common_name: "Lilac-breasted roller",
    species_name: "Coracias caudatus",
    wing_colour: "blue-black",
    diet: ["scorpions", "spiders", "centipedes", "insects,molluscs"],
    can_Fly: true,
    length_cm: 8,
    weight_g: 110,
    lay_season: "spring/summer/autumn",
    family: "Coraciidae",
    fun_fact:
      "They have syndactyl fused 2nd and 3rd digits on for their feet and they take part in acrobatic aerial displays, especially during courtship.",

    wingspan_cm: 57,
  },
  {
    common_name: "Speckled mousebird",
    species_name: "Colius striatus",
    wing_colour: "brownish-grey",
    diet: ["berries", "leaves", "seeds", "nectar"],
    can_Fly: true,
    length_cm: 35,
    weight_g: 57,
    lay_season: "spring/summer",
    family: "Coliidae",
    fun_fact:
      "This bird gives off distinct alarm calls depending on the type of predator in the vicinity; a shriek for terrestrial predators and explosive pit for for aerial predators.",

    wingspan_cm: 56,
  },
  {
    common_name: "Common Cuckoo",
    species_name: "Cuculus canorus",
    wing_colour: "blue-grey",
    diet: ["insects", "hairy caterpillars"],
    can_Fly: true,
    length_cm: 34,
    weight_g: 120,
    lay_season: "summer",
    family: "Cuculidae",
    fun_fact:
      "This bird is a brood parasite that lays eggs in other birds' nests and unlike most birds lays eggs in the afternoons not the mornings. ",

    wingspan_cm: 59,
  },
  {
    common_name: "Asian Koel",
    species_name: "Eudynamys scolopaceus",
    wing_colour: "bluish-black/reddish-brown",
    diet: ["fruit", "caterpillars", "bird-eggs", "small-reptiles"],
    can_Fly: true,
    length_cm: 43,
    weight_g: 290,
    lay_season: "spring/summer",
    family: "Cuculidae",
    fun_fact:
      "This bird is the state bird of the INdian union territory of Puducherry. It also eats fruits of the known poisionous plant Cascabela thevetia (Yellow oleandar). It also makes distinctive loud calls at night.",

    wingspan_cm: 77,
  },
  {
    common_name: "Greater roadrunner",
    species_name: "Geococcyx californianus",
    wing_colour: "brown with black streaks",
    diet: [
      "insects",
      "rodents",
      "scorpions",
      "tarantulas",
      "centipedes",
      "small-reptiles",
      "small birds",
    ],
    can_Fly: true,
    length_cm: 60,
    weight_g: 390,
    lay_season: "spring/summer/autumn",
    family: "Cuculidae",
    fun_fact:
      "These birds are not shy and are very fast and nimble on their feet.",

    wingspan_cm: 47,
  },

  {
    common_name: "Blue coua",
    species_name: "Coua caerulea",
    wing_colour: "navy blue",
    diet: ["insects", "small-reptiles", "fruits"],
    can_Fly: true,
    length_cm: 50,
    weight_g: 40,
    lay_season: "summer/autumn/winter",
    family: "Cuculidae",
    fun_fact:
      "This a blue cuckoo with a reversible 3rd toe like most cuckoos and prefers jump and flop between the trees in its natural habitat of Madagascar",

    wingspan_cm: 13,
  },
  {
    common_name: "King quail",
    species_name: " Excalfactoria chinensis",
    wing_colour: "multi-coloured",
    diet: ["seeds", "leaves", "insects"],
    can_Fly: true,
    length_cm: 13,
    weight_g: 34,
    lay_season: "summer/autumn/winter",
    family: "Phasianidae",
    fun_fact:
      "This a blue cuckoo with a reversible 3rd toe like most cuckoos and prefers jump and flop between the trees in its natural habitat of Madagascar",

    wingspan_cm: 4,
  },

  {
    common_name: "Harlequin quail",
    species_name: "Coturnix delegorguei",
    wing_colour: "black-grey flecks",
    diet: ["seeds", "insect-larvae", "green shoots"],
    can_Fly: true,
    length_cm: 20,
    weight_g: 66,
    lay_season: "autumn/winter/spring",
    family: "Phasianidae",
    fun_fact:
      "When danger is near they will squat still instead of running and they are ground dwellers that like to forage for food in family-related coveys.",

    wingspan_cm: 6,
  },
  {
    common_name: "Gambel's quail",
    species_name: "Callipepla gambelii",
    wing_colour: "mixed brown-grey flecks",
    diet: ["seeds", "plant shoots", "leaves", "fruit"],
    can_Fly: true,
    length_cm: 6,
    weight_g: 160,
    lay_season: "spring/summer",
    family: "Odontophoridae",
    fun_fact:
      "They have a characteristic feather plume on their heads; males are easily distinguished by their black faces and these birds thrive in the arid deserts around southern USA and Mexico",

    wingspan_cm: 7,
  },
  {
    common_name: "Sandhill crane",
    species_name: "Grus canadensis",
    wing_colour: "reddish-grey",
    diet: [
      "insects",
      "grains",
      "molluscs",
      "amphibians",
      "berries",
      "seeds",
      "rodents",
    ],
    can_Fly: true,
    length_cm: 95,
    weight_g: 5000,
    lay_season: "winter/spring/summer",
    family: "Gruidae",
    fun_fact:
      "Male Sandhill cranes perform elaborate dances to attract female mates; these birds are soem of the most ancient birds with fossils dating back millions of years; they also gather in large flocks along rivers.",

    wingspan_cm: 180,
  },
  {
    common_name: "Red-throated loon",
    species_name: "Gavia stellata",
    wing_colour: "reddish-brown",
    diet: ["leeches", "crustaceans", "molluscs", "insects", "polychaete worms"],
    can_Fly: true,
    length_cm: 57,
    weight_g: 2300,
    lay_season: "autumns/spring",
    family: "Gaviidae",
    fun_fact:
      "The only loon the forages for food far away from its breeding territory and does not carry its young on its back.",

    wingspan_cm: 96,
  },
  {
    common_name: "Pacific loon",
    species_name: " Gavia pacifica",
    wing_colour: "black and white streaks",
    diet: ["fish", "insects", "molluscs"],
    can_Fly: true,
    length_cm: 77,
    weight_g: 2200,
    lay_season: "spring",
    family: "Gaviidae",
    fun_fact:
      "Has difficulty walking on land and needs open surfaces of water in order to take flight and cannot do so from land; these birds breed on tundra lakes",

    wingspan_cm: 128,
  },
  {
    common_name: "Wild turkey",
    species_name: "Meleagris gallopavo",
    wing_colour: "brown barred",
    diet: ["seeds", "insects", "molluscs", "grains"],
    can_Fly: true,
    length_cm: 100,
    weight_g: 8000,
    lay_season: "spring",
    family: "Phasianidae",
    fun_fact:
      "Wild turkeys can alter their colour according to their mood and can see better than humans; also they love to gobble and sleep in trees",

    wingspan_cm: 130,
  },
  {
    common_name: "Red-crested turaco",
    species_name: "Tauraco erythrolophus",
    wing_colour: "bright red and dark blue",
    diet: ["seeds", "insects", "molluscs", "grains", "fruit", "flowers"],
    can_Fly: true,
    length_cm: 50,
    weight_g: 240,
    lay_season: "all-year",
    family: "Musophagidae",
    fun_fact:
      'They produce sounds similar to someone shouting "Go Away!" and have mobile outer toes that can rotate forwards and backwards',

    wingspan_cm: 66,
  },
  {
    common_name: "Western plantain-eater",
    species_name: "Crinifer piscator",
    wing_colour: "grey spotted with brown",
    diet: ["fruits", "cultivated fruits"],
    can_Fly: true,
    length_cm: 50,
    weight_g: 250,
    lay_season: "winter/spring/summer",
    family: "Musophagidae",
    fun_fact:
      "Lives in the acacia savannah, open forests and crop growing areas of W. Africa and is largely arboreal near-passerine bird",

    wingspan_cm: 73,
  },
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
    common_name: "White-breasted mesite",
    species_name: "Mesitornis variegatus",
    wing_colour: "reddish-brown",
    diet: ["insects", "spiders", "small-reptiles"],
    can_Fly: true,
    length_cm: 31,
    weight_g: 105,
    lay_season: "autumn/winter/spring",
    family: "Mesitornithidae",
    fun_fact:
      "This ground-dwelling bird is found in the western decidous forests of Madagascar and has brown upper parts and pale whitish underparts and display odd defensive behaviour of flying into trees and freezing when danger is nearby.",

    wingspan_cm: 15,
  },
  {
    common_name: "Hoatzin",
    species_name: " Ophisthocomus hoazin",
    wing_colour: "bronze-olivaceous",
    diet: ["swamp plants"],
    can_Fly: true,
    length_cm: 13,
    weight_g: 1000,
    lay_season: "winter/spring/summer",
    family: "Opisthocomidae",
    fun_fact:
      'These birds have an enlarged crop that ferments the vegetation they eat before it enters the gut hence these birds are called "stinkbirds" because their guano has an unpleasant odour.',

    wingspan_cm: 28,
  },
  {
    common_name: "Great bustard",
    species_name: "Otis tarda",
    wing_colour: "gold-white",
    diet: [
      "insects",
      "earthworms",
      "small-reptiles",
      "amphibians",
      "rodents",
      "grains",
      "flowers",
      "crucifers",
      "grasses",
    ],
    can_Fly: true,
    length_cm: 120,
    weight_g: 6800,
    lay_season: "summer/autumn",
    family: "Otididae",
    fun_fact:
      "This is the heaviest flying birth on planet Earth but is on the extinction watchlist",

    wingspan_cm: 220,
  },
  {
    common_name: "Australian bustard",
    species_name: "Ardeotis australis",
    wing_colour: "dark-brown",
    diet: [
      "insects",
      "small-birds",
      "seeds",
      "fruit",
      "mice",
      "leaves",
      "small-reptiles",
    ],
    can_Fly: true,
    length_cm: 100,
    weight_g: 7000,
    lay_season: "autumn",
    family: "Otididae",
    fun_fact:
      "These birds prefer to walk most of the time but are the heaviest birds in Australia capable of flight.",

    wingspan_cm: 230,
  },
  {
    common_name: "American flamingo",
    species_name: "Phoenicopterus ruber",
    wing_colour: "pink",
    diet: ["algae", "seeds", "molluscs", "crustaceans", "aquatic insects"],
    can_Fly: true,
    length_cm: 138,
    weight_g: 3100,
    lay_season: "spring/summer",
    family: "Phoenicopteridae",
    fun_fact:
      "These birds pink colour is a product of their diet and they are capable of standing on one leg with the other being tucked under its abdomen, which is does to reduce heat loss through its legs.",

    wingspan_cm: 148,
  },
  {
    common_name: "Lesser flamingo",
    species_name: "Phoeniconaias minor",
    wing_colour: "light-pink",
    diet: ["algae", "plankton"],
    can_Fly: true,
    length_cm: 95,
    weight_g: 2200,
    lay_season: "autumn winter",
    family: "Phoenicopteridae",
    fun_fact:
      "They feed in saline and alkaline lakes and the smallest species of flamingo; there are less than 40,000(total) of these birds in central, southern and western Africa as they are prey to various predators",

    wingspan_cm: 105,
  },
  {
    common_name: "Great cormorant",
    species_name: "Phalacrocorax carbo",
    wing_colour: "black",
    diet: ["fish", "crustaceans", "small-birds", "amphibians"],
    can_Fly: true,
    length_cm: 85,
    weight_g: 2900,
    lay_season: "winter",
    family: "Phalacrocoracidae",
    fun_fact:
      "They possess excellent diving and swimming abilities and use that ability to hoard the prey they eat. When out of water they like roosting on tree tops",
  },
  {
    common_name: "Spot-billed pelican",
    species_name: " Pelecanus philippensis",
    wing_colour: "whitish-grey with black tips",
    diet: ["fish"],
    can_Fly: true,
    length_cm: 135,
    weight_g: 4900,
    lay_season: "autumn/winter/spring",
    family: "Pelecanidae",
    fun_fact:
      "They are on the conservation list as their numbers are reducing; their nests are on low trees near wetlands and human habitations;",

    wingspan_cm: 246,
  },
  {
    common_name: "Brown pelican",
    species_name: "Pelecanus occidentalis",
    wing_colour: "greyish-silver",
    diet: ["fish", "crustaceans"],
    can_Fly: true,
    length_cm: 152,
    weight_g: 5000,
    lay_season: "spring/summer",
    family: "Pelecanidae",
    fun_fact:
      "These birds fly in v-shaped groups formations (like squadrons) and noisy gulls why try to steal fish from their membranous pouches as it drains water out after scooping at it estaurine hunting grounds; they crash dive for their prey",

    wingspan_cm: 200,
  },
  {
    common_name: "Magnificent frigatebird",
    species_name: "Phaethon rubricauda",
    wing_colour: "brownish black",
    diet: ["fish", "crustaceans", "molluscs", "plankton"],
    can_Fly: true,
    length_cm: 93,
    weight_g: 1300,
    lay_season: "winter/spring",
    family: "Fregatidae",
    fun_fact:
      "These birds are found in South and Central America, and the southern USA and got their name from French naturalist Baptiste du Tetre who said they looked like frigate ships pirates used to rob other ships and have an inflatable red gular sack they use to impress females.",

    wingspan_cm: 207,
  },
  {
    common_name: "Red-billed tropic bird",
    species_name: "Fregata magnificens",
    wing_colour: "white with black tips",
    diet: ["fish", "molluscs"],
    can_Fly: true,
    length_cm: 81,
    weight_g: 680,
    lay_season: "spring/summer",
    family: "Phaethontidae",
    fun_fact:
      "These birds have characteristic long slender red tail and are found in the Indian and Pacific oceans and is known catching flying fish in the air",

    wingspan_cm: 105,
  },
  {
    common_name: "White-tailed tropic bird",
    species_name: "Phaethon lepturus",
    wing_colour: "white with distributed black marks",
    diet: ["fish", "molluscs", "crustaceans"],
    can_Fly: true,
    length_cm: 79,
    weight_g: 335,
    lay_season: "spring/summer",
    family: "Phaethontidae",
    fun_fact:
      "Identified for its long slender white tail and is Bermuda's only locally remaining seabird.",

    wingspan_cm: 82,
  },
  {
    common_name: "Brown jacamar",
    species_name: "Brachygalba lugubris",
    wing_colour: "brown-purplish wings",
    diet: ["insects"],
    can_Fly: true,
    length_cm: 18,
    weight_g: 22,
    lay_season: "spring",
    family: "Galbulidae",
    fun_fact:
      "This South American is bird is found in the canopy of forests and the savanna woodlands",

    wingspan_cm: 9,
  },
  {
    common_name: "Northern flicker",
    species_name: "Colaptes auratus",
    wing_colour: "brown with black bars",
    diet: ["insects", "fruits", "seeds"],
    can_Fly: true,
    length_cm: 34,
    weight_g: 105,
    lay_season: "spring/summer",
    family: "Picidae",
    fun_fact:
      "One of the only brownish-coloured woodpeckers around that nest in old burrows of Belted kingfishers and Bank swallows",

    wingspan_cm: 38,
  },
  {
    common_name: "Pileated woodpecker",
    species_name: "Dryocopus pileatus",
    wing_colour: "black with white stripes",
    diet: ["insects", "larvae"],
    can_Fly: true,
    length_cm: 36,
    weight_g: 225,
    lay_season: "spring",
    family: "Picidae",
    fun_fact:
      "One of the only brownish-coloured woodpeckers around that nest in old burrows of Belted kingfishers and Bank swallows",

    wingspan_cm: 54,
  },
  {
    common_name: "Moustached puffbird",
    species_name: "Malacoptila mystacalis",
    wing_colour: "dull brown with buffy spots",
    diet: ["insects"],
    can_Fly: true,
    length_cm: 21,
    weight_g: 50,
    lay_season: "spring/summer/autumn",
    family: "Bucconidae",
    fun_fact:
      "This South American bird has a large bill with white whiskers that are in fact a tuft of feathers",

    wingspan_cm: 11,
  },
  {
    common_name: "Pied-billed grebe",
    species_name: "Podilymbus podiceps",
    wing_colour: "brown",
    diet: ["insects", "fish"],
    can_Fly: true,
    length_cm: 37,
    weight_g: 430,
    lay_season: "spring/summer/autumn",
    family: "Podicipedidae",
    fun_fact:
      "These birds have thick bills that turn silver and black in the summer.",

    wingspan_cm: 16,
  },
  {
    common_name: "Great crested grebe",
    species_name: "Podiceps cristatus",
    wing_colour: "brownish-black",
    diet: ["insects", "fish", "crustaceans", "amphibians"],
    can_Fly: true,
    length_cm: 51,
    weight_g: 710,
    lay_season: "spring/summer",
    family: "Podicipedidae",
    fun_fact:
      "These birds have ornate orange-black plume and ruff around their heads that they use to do elaborate synchronized dances when mating and in courtship",

    wingspan_cm: 70,
  },
  {
    common_name: "Western grebe",
    species_name: "Aechmophorus occidentalis",
    wing_colour: "brownish-black",
    diet: ["insects", "fish", "worms", "larvae", "marine worms", "amphibians"],
    can_Fly: true,
    length_cm: 74,
    weight_g: 1500,
    lay_season: "spring",
    family: "Podicipedidae",
    fun_fact:
      "During courtship the male and female are polite to each other and display reeds to each other as well as doing courtship dances. They are also excellent swimmers and divers due to their toe anatomy",

    wingspan_cm: 59,
  },
  {
    common_name: "Eurasian bullfinch",
    species_name: "Pyrrhula pyrrhula",
    wing_colour: "grey-white with black tip",
    diet: ["seeds", "fruit buds"],
    can_Fly: true,
    length_cm: 13,
    weight_g: 24,
    lay_season: "spring/summer",
    family: "Fringillidae",
    fun_fact:
      "They have a bull-headed appearance and were once popular cage birds; they were taught how to imitate whistling sounds in the past; they have black heads usually and orange underbellies",

    wingspan_cm: 22,
  },
  {
    common_name: "House sparrow",
    species_name: "Passer domesticus",
    wing_colour: "brownish-gray/black-white-brown markings",
    diet: ["seeds", "berries", "caterpillars", "nuts"],
    can_Fly: true,
    length_cm: 15,
    weight_g: 29,
    lay_season: "spring/summer",
    family: "Passeridae",
    fun_fact:
      "These birds nest in loose colonies along hedges and bushes; this extends even to building crevices. Some have even been recorded living in warehouses.",

    wingspan_cm: 23,
  },
  {
    common_name: "Eurasian skylark",
    species_name: "Alauda arvensis",
    wing_colour: "reddish-brown",
    diet: ["seeds", "grains", "insects", "spiders"],
    can_Fly: true,
    length_cm: 19,
    weight_g: 46,
    lay_season: "spring/summer",
    family: "Alaudidae",
    fun_fact:
      "Skylarks are one of the 19 species in decline in the UK; males have broader wings than females that helps them hover and sing at higher heights; it is speculated this is part of what attracts females to males in mating season",

    wingspan_cm: 36,
  },
  {
    common_name: "Eurasian blue tit",
    species_name: "Cyanistes caeruleus",
    wing_colour: "bluish-yellow",
    diet: ["seeds", "insects", "spiders"],
    can_Fly: true,
    length_cm: 12,
    weight_g: 11,
    lay_season: "spring/summer",
    family: "Paridae",
    fun_fact:
      "These birds nest in tree boxes and tree holes. They are adapted to living in woodland and gardens; they will hang upside-down in order to peck at feeder to eat and for their own entertainment",

    wingspan_cm: 18,
  },
  {
    common_name: "Bohemian waxwing",
    species_name: "Bombycilla garrulus",
    wing_colour: "buffy grey",
    diet: ["fruit", "insects"],
    can_Fly: true,
    length_cm: 19,
    weight_g: 54,
    lay_season: "summer",
    family: "Bombycillidae",
    fun_fact:
      "When a flock of these birds take off or land their wings make a distinctive rattling sound that can be heard from just over 1 foot away.",

    wingspan_cm: 33,
  },
  {
    common_name: "Asian glossy starling",
    species_name: "Aplonis panayensis",
    wing_colour: "iridescent bluish-green",
    diet: [
      "fruit",
      "berries",
      "nuts",
      "molluscs",
      "insects",
      "spiders",
      "nectar",
    ],
    can_Fly: true,
    length_cm: 20,
    weight_g: 55,
    lay_season: "spring/summer",
    family: "Sturnidae",
    fun_fact:
      "These birds are highly sociable and forage for food in groups of 20; they also perform some ritualistic displays at their nesting/roosting site before settling down. Found in S.E Asia",

    wingspan_cm: 12,
  },
  {
    common_name: "Wood thrush",
    species_name: "Hylocichla mustelina",
    wing_colour: "light brown",
    diet: [
      "berries",
      "insects",
      "spiders",
      "caterpillars",
      "earthworms",
      "mollusc",
    ],
    can_Fly: true,
    length_cm: 21,
    weight_g: 43,
    lay_season: "spring/summer",
    family: "Turdidae",
    fun_fact:
      "It has a dark-brown spotted underbelly as sings a beautiful song as it's one of the songbirds; it symbolizes to many people inner peace and peace of mind",

    wingspan_cm: 36,
  },
  {
    common_name: "Common blackbird",
    species_name: "Turdus merula",
    wing_colour: "brown/black",
    diet: ["berries", "insects", "seeds", "earthworms"],
    can_Fly: true,
    length_cm: 29,
    weight_g: 106,
    lay_season: "spring/summer",
    family: "Turdidae",
    fun_fact:
      "One of the most common birds in the UK; it is known for singing a mellow song. Males are black with orange-yellow beaks while females are brown with spots and streaks and have a brown beak",

    wingspan_cm: 35,
  },
  {
    common_name: "Superb fairywren",
    species_name: "Malurus cyaneus",
    wing_colour: "brown",
    diet: ["larvae", "insects", "seeds", "fruits"],
    can_Fly: true,
    length_cm: 14,
    weight_g: 12,
    lay_season: "spring/summer",
    family: "Maluridae",
    fun_fact:
      "One of the first Australian birds to be described. The have been labelled the least loyal birds as one female flirts and courts with up to 13 other males during breeding season and three-quarters of births are sired from males outside of the bird's current social group",

    wingspan_cm: 27,
  },
  {
    common_name: "Antarctic petrel",
    species_name: "Thalassoica antarctica",
    wing_colour: "white with brown tips",
    diet: ["fish", "crustaceans", "molluscs"],
    can_Fly: true,
    length_cm: 45,
    weight_g: 675,
    lay_season: "autumn",
    family: "Procellariidae",
    fun_fact:
      "These birds are highly social and like to fly with its species and other mixed species of birds; these birds are also attracted to the bow of ships",

    wingspan_cm: 104,
  },
  {
    common_name: "Wandering albatross",
    species_name: "Diomedea exulans",
    wing_colour: "white and black",
    diet: ["fish", "crustaceans", "molluscs"],
    can_Fly: true,
    length_cm: 120,
    weight_g: 12700,
    lay_season: "winter",
    family: "Diomedeidae",
    fun_fact:
      "These birds sleep on the water's surface and glide during the day for food; they practice many behaviours such as bill-flapping, pointing to the sky, croacking, bill-touching, trumpeting and head-shaking. It's population is under threat though in the southern hemispheric islands due to being hunted",

    wingspan_cm: 320,
  },
  {
    common_name: "Sooty albatross",
    species_name: "Phoebetria fusca",
    wing_colour: "sooty black",
    diet: ["fish", "crustaceans"],
    can_Fly: true,
    length_cm: 85,
    weight_g: 3400,
    lay_season: "autumn",
    family: "Diomedeidae",
    fun_fact:
      "These birds are located around the southern hemispheric islands extending towards Australia; they have a black face with a white crescent on their back; they breed on cliffs and steep slopes",

    wingspan_cm: 200,
  },
  {
    common_name: "Pied cockatiel",
    species_name: "Nymphicus hollandicus",
    wing_colour: "grey with white flashed",
    diet: ["seeds", "fruit", "vegetables"],
    can_Fly: true,
    length_cm: 33,
    weight_g: 102,
    lay_season: "all-year",
    family: "Cacatuidae",
    fun_fact:
      "Became popular in th 1950s out of the first mutation of the wildtype grey cockatiel with yellow and white feathers mixed with orange cheek patches; they make great pets as theya re very comical and can be taught to talk from which point they will expand their vocaculary",

    wingspan_cm: 29,
  },
  {
    common_name: "Common parakeet (budgerigar)",
    species_name: "Melopsittacus undulatus",
    wing_colour: "yellow and black stripes",
    diet: ["vegetables", "fruit"],
    can_Fly: true,
    length_cm: 18,
    weight_g: 40,
    lay_season: "autumn/winter/spring",
    family: "Psittaculidae",
    fun_fact:
      "Their hearing range is 400-20000Hz; they can remember certain frequencies of sounds and mimic them; their brain can also process up to 150 images per second; they yellow faces usually and green underbellies",

    wingspan_cm: 30,
  },
  {
    common_name: "Sulphur-crested cockatoo",
    species_name: "Cacatua galerita",
    wing_colour: "white",
    diet: ["seeds", "plants", "nuts", "insects"],
    can_Fly: true,
    length_cm: 50,
    weight_g: 930,
    lay_season: "summer/autumn/winter/",
    family: "Cacatuidae",
    fun_fact:
      "They have a distinctive yellow crest on their head that props up when they become alarmed by something in their nearby environment. Both parents take turns in incubating eggs. Teh are on of the most affectionate birds and crave being petted.",

    wingspan_cm: 103,
  },
  {
    common_name: "Rosy-faced lovebird",
    species_name: "Agapornis roseicollis",
    wing_colour: "green",
    diet: ["seeds", "flowers", "berries", "leaves", "buds"],
    can_Fly: true,
    length_cm: 28,
    weight_g: 62,
    lay_season: "winter/spring",
    family: "Psittaculidae",
    fun_fact:
      "Females have mostly green plumage while males tend to have a crown of red feathers. Rosy-faced lovebirds have soft pink faces and turn towards each other in an affectionate loving way to sleep and feed each other",

    wingspan_cm: 10,
  },
  {
    common_name: "Grey parrot",
    species_name: "Psittacus erithacus",
    wing_colour: "charcoal grey",
    diet: ["seeds", "nuts", "berries", "vegetation", "fruits"],
    can_Fly: true,
    length_cm: 33,
    weight_g: 400,
    lay_season: "autumn",
    family: "Psittacidae",
    fun_fact:
      "These birds can live up to 80 years and are intelligent but have the emotional stability of a 5 year old and crack jokes when they are taught to talk. But they are the ability amass a large repetoire of vocabulary of 1000 words or more; caring for one is challenging as they need ample exercise and socialization.",

    wingspan_cm: 47,
  },
  {
    common_name: "Black-bellied sandgrouse",
    species_name: "Pterocles orientalis",
    wing_colour: "white underneath with black mottling on tips",
    diet: ["seeds", "insects", "green shoots", "leaves", "bulbs"],
    can_Fly: true,
    length_cm: 39,
    weight_g: 590,
    lay_season: "spring/summer",
    family: "Pteroclidae",
    fun_fact:
      "These game birds thrive in the deserts and are fast walkers and flyers",

    wingspan_cm: 72,
  },
  {
    common_name: "Pin-tailed sandgrouse",
    species_name: "Pterocles alchata",
    wing_colour: "white underneath with black mottling on tips",
    diet: ["seeds", "cultivated legumes", "green shoots", "leaves", "cereals"],
    can_Fly: true,
    length_cm: 35,
    weight_g: 380,
    lay_season: "spring/summer",
    family: "Pteroclidae",
    fun_fact:
      "Females have white throats while males have black throats and are found in dried out river beds and lakes and dry plains; they give of low laughter-like calls while in mid-flight",

    wingspan_cm: 61,
  },
  {
    common_name: "Greater rhea",
    species_name: "Rhea americana",
    wing_colour: "grey brown",
    diet: [
      "seeds",
      "roots",
      "fruits",
      "insects",
      "roots",
      "small-reptiles",
      "molluscs",
    ],
    can_Fly: false,
    length_cm: 136,
    weight_g: 2300,
    lay_season: "summer/autumn/winter",
    family: "Rheidae",
    fun_fact:
      "They continuous move while they feed;their wings are quite large for a flightless bird but these wings rudders used for running and dodging predators. The males incubate the hatched chicks and care for them.",

    wingspan_cm: 150,
  },
  {
    common_name: "Darwin's rhea",
    species_name: "Rhea pennata",
    wing_colour: "grey brown",
    diet: ["seeds", "roots", "fruits", "insects", "leaves"],
    can_Fly: false,
    length_cm: 95,
    weight_g: 20000,
    lay_season: "autumn/winter",
    family: "Rheidae",
    fun_fact:
      "During laying of the eggs by the female the male becomes really aggressive and protective while incubating the eggs, hence the females leave the eggs near the nest rather than in it and the male scoops the eggs into the nest; they are generally quite birds outside of their youth and in breeding.",

    wingspan_cm: 207,
  },
  {
    common_name: "Masai ostrich",
    species_name: "Struthio camelus massaicus",
    wing_colour: "black ",
    diet: ["grasses", "bushes", "herbs", "leaves", "insects"],
    can_Fly: false,
    length_cm: 275,
    weight_g: 155000,
    lay_season: "spring/summer",
    family: "Struthionidae",
    fun_fact:
      "One of the largest birds in the world; it is hunted today for its meat,eggs and feathers; this has partially contributed to its population decline.During mating the male's neck turns a pink hue as a mating display to potential females",

    wingspan_cm: 200,
  },
  {
    common_name: "Southern cassowary",
    species_name: "Casuarius casuarius",
    wing_colour: "pea-green",
    diet: [
      "fruit",
      "fungi",
      "molluscs",
      "rodents",
      "insects",
      "fish",
      "amphibians",
    ],
    can_Fly: false,
    length_cm: 170,
    weight_g: 44000,
    lay_season: "summer/autumn",
    family: "Casuariidae",
    fun_fact:
      "Native to Australia and Paupa New Guinea these birds are the closest living species to dinosaurs today; also the male takes care of building a nest and incubating the eggs once the females have laid the eggs",

    wingspan_cm: 170,
  },
  {
    common_name: "Emu",
    species_name: "Dromaius novaehollandiae",
    wing_colour: "multi-coloured",
    diet: ["grass", "flowering plants", "leaves", "insects"],
    can_Fly: false,
    length_cm: 180,
    weight_g: 34,
    lay_season: "autumn/winter/spring",
    family: "Casuariidae",
    fun_fact:
      "The birds native to Australia are the second largest bird after ostrich and hae 2 eyelids (one for blinking and the other to prevent sand and dust from entering their eyes; they have a top running speed of 30mph",

    wingspan_cm: 20,
  },
  {
    common_name: "Barn owl",
    species_name: "Tyto alba",
    wing_colour: "buffy grey",
    diet: ["rodents", "bats", "amphibians"],
    can_Fly: true,
    length_cm: 38,
    weight_g: 550,
    lay_season: "spring/summer",
    family: "Tytonidae",
    fun_fact:
      "These owls hunt by sound rather than sight using their heart-shpaed feather on the edge of their face in order to trap sound; they pais mate for life and when they are flying they are completely silent",

    wingspan_cm: 90,
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
  },
  {
    common_name: "Tawny owl",
    species_name: "Strix aluco",
    wing_colour: "mottled reddish brown with whitish streaks",
    diet: [
      "rodents",
      "small-birds",
      "amphibians",
      "insects",
      "earthworms",
      "crustaceans",
    ],
    can_Fly: true,
    length_cm: 38,
    weight_g: 770,
    lay_season: "spring",
    family: "Strigidae",
    fun_fact:
      'These male and female owls at night make a combination of sounds that can be heard collectively as a "ke-wickk" from the female and a "hoo-hoo-oooo" from the territorial male, as well as other unique vocalisations that can only be heard close up',

    wingspan_cm: 94,
  },
  {
    common_name: "Emperor penguin",
    species_name: "Aptenodytes forsteri",
    wing_colour: "bluish-black",
    diet: ["fish", "molluscs", "crustaceans"],
    can_Fly: false,
    length_cm: 120,
    weight_g: 23000,
    lay_season: "spring/summer",
    family: "Spheniscidae",
    fun_fact:
      "These are the biggest species of penguin today; they can dive deep into ice cold water up to a recorded depth of 565m when catching fish and can hold their breath underwater for 22 minutes in water.",

    wingspan_cm: 83,
  },
  {
    common_name: "Adélie penguin",
    species_name: "Pygoscelis adeliae",
    wing_colour: "black",
    diet: ["fish", "molluscs", "crustaceans"],
    can_Fly: false,
    length_cm: 70,
    weight_g: 4700,
    lay_season: "autumn/winter/summer",
    family: "Spheniscidae",
    fun_fact:
      "These penguins are small but extremely feisty and will confidently take on larger predators like seals and large seabirds and funnily steal rocks; but the population is currently under threat in their habitat",

    wingspan_cm: 56,
  },
  {
    common_name: "Humboldt penguin",
    species_name: "Spheniscus humboldti",
    wing_colour: "greyish-black",
    diet: ["fish"],
    can_Fly: false,
    length_cm: 13,
    weight_g: 4400,
    lay_season: "all-year",
    family: "Spheniscidae",
    fun_fact:
      "These penguins are under threat as the guano they use to build their nests is mined as fertiliser; they have a white underbelly with black dots and a long black streak on its upper abdomen",

    wingspan_cm: 52,
  },

  {
    common_name: "Gentoo penguin",
    species_name: "Pygoscelis papua",
    wing_colour: "black",
    diet: ["fish", "molluscs", "crustaceans"],
    can_Fly: false,
    length_cm: 88,
    weight_g: 6900,
    lay_season: "summer/winter",
    family: "Spheniscidae",
    fun_fact:
      "These penguins have many predators and are hunted so they are under threat; they prefer to inhabit areas that are partially covered by ice or covered by none at all. Theya re friendly to other species of penguins and quite romantic",

    wingspan_cm: 23,
  },
  {
    common_name: "Macaroni penguin",
    species_name: "Eudyptes chrysolophus",
    wing_colour: "black",
    diet: ["fish", "molluscs", "crustaceans"],
    can_Fly: false,
    length_cm: 12,
    weight_g: 5500,
    lay_season: "autumn",
    family: "Spheniscidae",
    fun_fact:
      "These penguins are also under threat; they are named after a hat not pasta; their nests are lined by rocks and they are not aggressive, until they fall in love that is during courtship",

    wingspan_cm: 71,
  },
  {
    common_name: "Blue-footed booby",
    species_name: "Sula nebouxii",
    wing_colour: "brownish-grey",
    diet: ["fish", "molluscs"],
    can_Fly: true,
    length_cm: 81,
    weight_g: 1500,
    lay_season: "summer",
    family: "Sulidae",
    fun_fact:
      "They brightness of the blue feet these bird have is an indication of their health (the more pigmented the healthier the bird); males whistle to the females they want to attack",

    wingspan_cm: 147,
  },
  {
    common_name: "Red-footed booby",
    species_name: "Sula sula",
    wing_colour: "variable",
    diet: ["fish", "molluscs"],
    can_Fly: true,
    length_cm: 76,
    weight_g: 1000,
    lay_season: "winter/spring",
    family: "Sulidae",
    fun_fact:
      "They have distinctive red feet and a blue beak; they nest in trees only in the full sun not shaded areas",

    wingspan_cm: 149,
  },
  {
    common_name: "Brown booby",
    species_name: "Sula leucogaster",
    wing_colour: "grey-brown",
    diet: ["fish", "molluscs"],
    can_Fly: true,
    length_cm: 83,
    weight_g: 1300,
    lay_season: "winter/spring",
    family: "Sulidae",
    fun_fact:
      'This particular booby have a comblike-toenail called a "preen claw", which they use to spread waterproofing oil from a gland in their tail throughout their weathers when preening',

    wingspan_cm: 138,
  },
  {
    common_name: "Northern gannet",
    species_name: "Morus bassanus",
    wing_colour: "white with black wing tips",
    diet: ["fish", "molluscs"],
    can_Fly: true,
    length_cm: 94,
    weight_g: 3000,
    lay_season: "spring",
    family: "Sulidae",
    fun_fact:
      "These birds incorporate odd objects into their nests like seaweed, mud, feathers and excrement. This extends to even plastics, shotgun shells, rope, golf balls, fishing lines and fountain pens meaning they have a cleanup role in nature.",

    wingspan_cm: 179,
  },
  {
    common_name: "Elegant-crested tinamou",
    species_name: "Eudromia elegans",
    wing_colour: "olive brown",
    diet: ["grain", "fruit", "leaves", "buds"],
    can_Fly: true,
    length_cm: 38,
    weight_g: 760,
    lay_season: "summer/autumn",
    family: "Tinamidae",
    fun_fact:
      "These birds can fly but only short distances before having to land (around 500m); this partridge-like bird prefers to run rather than fly to escape predators",

    wingspan_cm: 33,
  },
  {
    common_name: "Undulated tinamou",
    species_name: "Crypturellus undulatus",
    wing_colour: "olive brown",
    diet: ["seeds", "fruit", "insects"],
    can_Fly: true,
    length_cm: 28,
    weight_g: 300,
    lay_season: "winter/spring",
    family: "Tinamidae",
    fun_fact:
      'These birds are found both in wet and dry forests and emit a characteristic melancholic "whoo-who-whooo" sound repeatedly for long period during the early mornings and late afternoons',

    wingspan_cm: 29,
  },
  {
    common_name: "Yellow-legged tinamou",
    species_name: "Crypturellus noctivagus",
    wing_colour: "brownish-grey",
    diet: ["seeds", "shoots", "insects", "plant matter"],
    can_Fly: true,
    length_cm: 29,
    weight_g: 150,
    lay_season: "spring",
    family: "Tinamidae",
    fun_fact:
      "This bird is widespread throughout Brazil and is found in wooded and shrubby habitats",

    wingspan_cm: 31,
  },
  {
    common_name: "Orange-breasted trogon",
    species_name: "Harpactes oreskios",
    wing_colour: "barred-black",
    diet: ["spiders", "caterpillars", "insects", "larvae", "small-reptiles"],
    can_Fly: true,
    length_cm: 31,
    weight_g: 56,
    lay_season: "winter/spring",
    family: "Trogonidae",
    fun_fact:
      "This bird's underbelly is a bright orange, which partly explains its name. It inhabits lowland and foothill forests. It calls with 3-4 characteristic hoots.",

    wingspan_cm: 33,
  },
  {
    common_name: "White-tailed trogon",
    species_name: "Trogon chionurus",
    wing_colour: "black vermiculated with white",
    diet: ["fruit", "insects"],
    can_Fly: true,
    length_cm: 30,
    weight_g: 82,
    lay_season: "winter/spring/summer",
    family: "Trogonidae",
    fun_fact:
      "They typically perch upright and motionless; they can fly very fast but are reluctant to fly far distances. Their feet are heterodactyl and they can only pluck at fruit while in flight.",

    wingspan_cm: 35,
  },
  {
    common_name: "Masked trogon",
    species_name: "Trogon personatus",
    wing_colour: "burplish black",
    diet: ["fruit", "insects"],
    can_Fly: true,
    length_cm: 27,
    weight_g: 56,
    lay_season: "autumn",
    family: "Trogonidae",
    fun_fact:
      "This is a multi-coloured bird having green for its head, purplish-black wings, red underbelly and a black tail dotted with white spots; the male is iridescent green predominantly on its body parts while the female is predominantly brown mixed with other colours mentioned",

    wingspan_cm: 31,
  },
  {
    common_name: "Resplendent quetzal",
    species_name: "Pharomachrus mocinno",
    wing_colour: "emerald green",
    diet: ["fruit", "insects", "amphibians", "molluscs", "small-reptiles"],
    can_Fly: true,
    length_cm: 38,
    weight_g: 200,
    lay_season: "spring",
    family: "Trogonidae",
    fun_fact:
      "This is a sacred bird in Aztec and Mayan cultures where the priests wore the feathers of these birds during their ceremonies; males are more green than females while females are duller and have a shorter tail",

    wingspan_cm: 40,
  },
  {
    common_name: "Bald eagle",
    species_name: "Haliaeetus leucocephalus",
    wing_colour: "dark brown",
    diet: ["fish", "carrion"],
    can_Fly: true,
    length_cm: 83,
    weight_g: 5900,
    lay_season: "spring",
    family: "Accipitridae",
    fun_fact:
      "These eagles fly at at speeds of 30mph and dive at speeds of 100mph; they develop the characteristic white head and tail feathers at age 4-6 years of age.",

    wingspan_cm: 179,
  },
  {
    common_name: "Harpy eagle",
    species_name: "Harpia harpyja",
    wing_colour: "black and white",
    diet: ["tree-dwelling mammals", "reptiles"],
    can_Fly: true,
    length_cm: 99,
    weight_g: 7000,
    lay_season: "all-year",
    family: "Accipitridae",
    fun_fact:
      "This powerful raptor has disc like feathers on the sides of its head that can be raised and lowered like an owl; they are strong predators with 5 inch long talons that longer than those of a grizzly bear.",

    wingspan_cm: 230,
  },
  {
    common_name: "Golden eagle",
    species_name: "Aquila chrysaetos",
    wing_colour: "dark blakish brown",
    diet: ["terrestrial mammals"],
    can_Fly: true,
    length_cm: 61,
    weight_g: 4600,
    lay_season: "spring",
    family: "Accipitridae",
    fun_fact:
      "This is the largest bird of prey in North America; it can reach speeds of 193km per hour during dives to catch its prey. Their wing patterns are variable and during courtship both females and males participate in circling and shallow dive maneuvers. Their nests are around cliff edges and they can be find in tall Ponderosa pines",

    wingspan_cm: 222,
  },
];
//6 families
//Mesitornithidae,Strigidae,Spheniscidae,Passeridae,Phasianidae,Cuculidae (ids 1-6)
module.exports = [
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
        f_description: "This is a large family that includes the True Owl found on all continents except Antarctica. 95% are forest-dwelling but most are non-migratory with rest migrating depending on the seasons. These owls have large heads, elongated eyes and a short hooked bill that point downwards. Mnay species have ear tufts that are suggested to be for behavioural functions. They have talons that are sharp and hooked and with a reversible fourth toes (zygodactyly). Like most owls they hunt in low-light conditions. When confronted with danger they will crouch down, lower their heads, dropp their wings and ruffle their feathers.",
        clutch_size : '[3,4]',
        habitats: ["forests","tundras","deserts"],
        predators:["none"],
        order:"Strigiformes"
    },
    {
        scientific_fam_name: "Spheniscidae",
        f_description: "These are the the aquatic flightless birds that almost exclusively are found on the Southern hemisphere, with only the Galapagos Penguin being north of the equator. These penguins have countershaded white undersides and dark black dorsal plumage. Half of their lives are spent in oceans and the other half is spent on land. FOr the most part they tend to breed in large colonies and form monogamous pairs int he breeding season. Young penguins with grey-white down sometimes assemble in groups to keep warm called crèches. When a mother loses a chick (due to hypothermia, predators etc) they may attempt to steal chicks from other mothers.Overall they tend to be large birds weighing 40kg or more.",
        clutch_size : '[1,3]',
        habitats: ["oceans","coasts"],
        predators: ["skuas","petrels", "killer whales","sea lions"],
        order:"Sphenisciformes"
    },
    {
        scientific_fam_name: "Passeridae",
        f_description: "This family contains the finches that are widely distrubuted on all continents except for Antarctica. They have conical, stout and short beaks but some have adapted a large beak in order to deal with large seeds. Their plumage colour varies from brown through to yellow, grey and red with females being more brightly coloured than males. Canaries from this family are often kept as pets (cage birds), which themselves have gone via generations of inter-breeding.",
        clutch_size : '[2,6]',
        habitats: ["forests","woodlands","savanna","grasslands","horticultural parks"],
        predators:["birds of prey"],
        order:"Passeriformes"
    },
    {
        scientific_fam_name: "Phasianidae",
        f_description: "This is a group of gallinaceous (poultry/game) birds that are small-to-large  blunt-winged birds.Some are bred and reared on a mass-scale for human consumption. There is some sexual dimophism where the males tend to have more colourful feathers and characteristicalaly dust-bathe. When in the vicinity of a threat they fly upwards and then horizontally away from the source of danger. They are not territorial and will migrate in large flocks",
        clutch_size : '[2,20]',
        habitats: ["bamboo thickets","alpine meadows","deserts","forest edges","tundras","rainforests"],
        predators:["birds of prey","larger mammals","reptiles","human hunters"],
        order:"Galliformes"
    },
    {
        scientific_fam_name: "Cuculidae",
        f_description: "This is a broad family of cockoos with plenty of subfamilies. The feet of these birds in monst cases adopts zygodactyl where the outer toe is reversed(pointing backwards) and their bills are short and pointed downwards. Cuckoos adopt brood parasitism; where a female lays her eggs is genetically determined (that of the same species she was raised ); the bird will mimic the the pattern and colouration of the host's eggs but some species like the Pied Wagtail have evolved a knack of spotting the cuckoo egg and will reject it immediately in places where cuckoos are endemic. The sexes have different calls.",
        clutch_size : '[1,6]',
        habitats: ["woodlands","grassland","savanna","forests"],
        predators:["birds of prey"],
        order:"Cuculiformes"
    }
]
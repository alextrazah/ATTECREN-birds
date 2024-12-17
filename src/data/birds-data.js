const categoriesEn = [
  'Level 1',
  'Level 2',
  'Level 3',
  'Level 4',
  'Level 5',
  'Level 6',
];

const birdsDataEn = [
  [
    {
      name: 'Aigle royal',
      latinName: 'Aquila chrysaetos',
      species: 'Accipitridés',
      lng: '66 – 100 cm',
      span: '180 - 234 cm',
      description:
        'Forêts montagneuses d’Europe, nord Afrique et d’Amérique du nord',
      alimentation:
        'Rongeurs, petits mammifères (lièvres, louveteaux, petits chacals)',
      status: 'Commun',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305364081/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549080/mp3',
    },
    {
      name: 'Epervier d’Europe',
      latinName: 'Accipiter nisus',
      species: 'Accipitridés',
      lng: '38 cm',
      span: '60 - 75 cm',
      description:
        'Forêts, maquis et zones montagneuses d’Afrique, d’Europe et d’Asie',
      alimentation: 'Petits oiseaux',
      status: 'Commun',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254927951/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553432/mp3',
    },
    {
      name: 'Harpie féroce',
      latinName: 'Harpia harpyja',
      species: 'Accipitridés',
      lng: '105 cm',
      span: '185 cm',
      description: 'Forêts tropicales et équatoriales d’Amérique du Sud',
      alimentation: 'Mammifères, oiseaux, serpents',
      status: 'Rare',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/245402661/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/540007/mp3',
    },
    {
      name: 'Harfang des neiges',
      latinName: 'Bubo scandiacus',
      species: 'Strigidés',
      lng: '62 cm',
      span: '154 cm',
      description: 'Toundra polaire et zones froides asiatiques proches',
      alimentation:
        'Petits mammifères (rongeurs...), oiseaux (canards, oies …), occasionnellement des poissons',
      status: 'Commun',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297365891/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549169/mp3',
    },
    {
      name: 'Hibou grand duc',
      latinName: 'Bubo bubo',
      species: 'Strigidés',
      lng: '57 - 76 cm',
      span: '164 - 190 cm',
      description:
        'Forêts, plaines, et zones sèches du nord Afrique, d’Europe et d’Asie',
      alimentation:
        'Rongeurs, lièvres, vipères, lézards, serpents, louveteaux ou petits chacals',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258097941/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527577/mp3',
      status: 'Commun',
    },
    {
      name: 'Condor de Californie',
      latinName: 'Gymnogyps californianus',
      species: 'Catarthidés',
      lng: '134 cm',
      span: '249 – 300 cm',
      description: 'Forêts du Nord du continent américain, Mexique',
      alimentation:
        'Cadavres d’animaux sauvages et domestiques (Vaches et moutons) et petits mammifères',
      image:
        'https://www.leesonphoto.com/img-get/I000041Oqw1wdcaE/s/600/600/C3A0286.jpg',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/522053/mp3',
      status: 'Relativement rare',
    },
  ],
  [
    {
      name: 'Amazone de Porto Rico',
      latinName: 'Amazona vittata',
      species: 'Psittacidés',
      lng: '30 cm',
      span: '50 – 55 cm',
      description: 'Forêts de Porto Rico',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/536459/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/106627111/1800',
      alimentation: 'Fleurs, fruits, feuilles végétales',
      status: 'Très rare',
    },
    {
      name: 'Ara bleu et jaune / Ara bleu',
      latinName: 'Ara ararauna',
      species: 'Psittacidés',
      lng: '86 cm',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/530282/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/58162541/1800',
      span: '104 – 114 cm',
      description: 'Forêts tropicales, du Panama à São Paulo, Brésil',
      alimentation: 'Fruits',
      status: 'Relativement commun, menacé dans certaines zones déboisées',
    },
    {
      name: 'Perroquet Jaco / Gris du Gabon',
      latinName: 'Psittacus erithacus',
      species: 'Psittacidés',
      lng: '39 cm',
      span: '55 – 59 cm',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/546545/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/240817371/1800',
      description: "Forêts humides des pays d'Afrique centrale et de l'Ouest",
      alimentation: 'Principalement des fruits et des graines',
      status: 'Commun',
    },
    {
      name: 'Coucal de Ceylon',
      latinName: 'Centropus chlororhynchos',
      species: 'Cuculidés',
      lng: '46 cm',
      span: '60 - 65 cm',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/547236/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/252001001/1800',
      description: 'Forêts pluvieuses du Sri Lanka',
      alimentation: 'Insectes, vers, petits vertébrés (rongeurs, lézards…)',
      status: 'En voie d’extinction',
    },
    {
      name: 'Dindon ocellé',
      latinName: 'Agriocharis ocellata',
      species: 'Phasianidés',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/244658841/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/523827/mp3',
      lng: '70 – 90 cm',
      span: '90 – 113 cm',
      description: 'Forêts du Yucatán, Belize et du Nord du Guatemala',
      alimentation: 'Plantes et matières organiques',
      status: 'Très rare',
    },
    {
      name: 'Euplecte monseigneur',
      latinName: 'Euplectes hordeaceus',
      species: 'Plocéidés',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/547135/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/239360781/1800',
      lng: '12 cm',
      span: '29 – 33 cm',
      description: 'Zones humides, prairies sud-africaines',
      alimentation: 'Graines et insectes',
      status: 'Commun',
    },
  ],
  [
    {
      name: 'Grand corbeau',
      latinName: 'Corvus corax',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549855/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/300152741/1800',
      species: 'Corvidés',
      lng: '59 – 65 cm',
      span: '121 - 153 cm',
      description:
        'Forêts, plaines accidentées, zones rurales, prairies du Nord Afrique, Europe, Asie, Groenland et Amérique du Nord',
      alimentation: 'Mammifères, lézards, vipères et cadavres d’animaux',
      status: 'Commun',
    },
    {
      name: 'Geai gris du Canada',
      latinName: 'Perisoreus canadensis',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549737/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/70582941/1800',
      species: 'Corvidés',
      lng: '31 cm',
      span: '45 cm',
      description: 'Forêts de pins, forêts mixtes d’Amérique du Nord',
      alimentation:
        'Arthropodes, restes d’animaux, fruits sauvages, poussins d’autres oiseaux et leurs œufs',
      status: 'Commun',
    },
    {
      name: 'Chardonneret élégant',
      latinName: 'Carduelis carduelis',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527858/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256707351/1800',
      species: 'Fringillidés',
      lng: '12 cm',
      span: '23 cm',
      description:
        'Forêts, zones boisées, prairies, friches et clôtures de jardin en Afrique du Nord, en Europe et en Asie',
      alimentation: 'Graines, en particulier les graines de chardon',
      status: "En voie d'extinction",
    },
    {
      name: 'Pic épeiche',
      latinName: 'Dendrocopos major',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553480/mp3',
      species: 'Picidés',
      lng: '24 cm',
      span: '34 - 39 cm',
      description:
        "Forêts et zones boisées d'Afrique du Nord (Tunisie, Algérie, Maroc), d'Europe et d'Asie",
      alimentation: 'Insectes et larves',
      status: 'Commun',
    },
    {
      name: 'Pic à ventre blanc',
      latinName: 'Dryocopus javensi',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/147342301/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/542679/mp3',
      species: 'Picidés',
      lng: '48 cm',
      span: '60 - 63 cm',
      description:
        "Forêts d'Asie du Sud-est (Inde, Chine, Corée du Sud et du Nord, Japon, Thaïlande ...)",
      alimentation: 'Insectes et larves, en particulier fourmis et termites',
      status: 'Commun',
    },
    {
      name: 'Huppe fasciée',
      latinName: 'Upupa epops',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/186308261/320',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553459/mp3',
      species: 'Upupidés',
      lng: '26 - 28 cm',
      span: '42 - 64 cm',
      description:
        'Forêts, bois, grands espaces, vallées, prairies, bords de lacs et à proximité de vastes pâturages en Afrique, en Europe et en Asie',
      alimentation: 'Insectes',
      status: 'Commun',
    },
  ],
  [
    {
      name: 'Calao bicorne',
      latinName: 'Buceros bicornis',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/146172791/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/542521/mp3',
      species: 'Bucérotidés',
      lng: '105 cm',
      span: '180 cm',
      description:
        "Forêts humides et tropicales d'Asie (Inde, Viêt Nam, Malaisie ...)",
      alimentation:
        'Graines, insectes, poussins et leurs œufs, rongeurs et petits lézards',
      status: 'Relativement commun',
    },
    {
      name: 'Casoar à casque',
      latinName: 'Casuarius casuarius',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/121400251/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537735/mp3',
      species: 'Casuariidés',
      lng: '119 - 180 cm',
      description:
        'Forêts tropicales humides d’Indonésie, de Nouvelle-Guinée et d’Australie',
      alimentation: 'Fruits, noix, insectes, jeunes oiseaux et leurs œufs',
      status: 'Relativement commun',
    },
    {
      name: 'Guêpier d’Europe',
      latinName: 'Merops apiaster',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/459241061/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553463/mp3',
      species: 'Meropidés',
      lng: '28 cm',
      span: '47 cm',
      description:
        "Rives sablonneuses des ruisseaux des forêts et des zones boisées d'Europe, d'Afrique et d'Asie",
      alimentation: 'Petits insectes et vers',
      status: 'Commun',
    },
    {
      name: 'Pirolle de Taiwan',
      latinName: 'Urocissa caerulea',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/85864811/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/86801811/mp3',
      species: 'Corvidés',
      lng: '65 cm',
      span: '111 cm',
      description: 'Forêts de Taiwan et de Chine',
      alimentation: 'Figues sauvages, invertébrés et insectes',
      status: 'Relativement commun',
    },
    {
      name: 'Grand tétras',
      latinName: 'Tetrao urogallus',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/614055613/900',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527465/mp3',
      species: 'Phasianidés',
      lng: '115 cm',
      span: '125 cm',
      description: "Taïga des forêts d'Europe et de Russie",
      alimentation: 'Feuilles de brousse',
      status: 'Commun',
    },
    {
      name: 'Paon bleu',
      latinName: 'Pavo cristatus',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/97326721/1800',
      audio:
        'https: //cdn.download.ams.birds.cornell.edu/api/v2/asset/534904/mp3',
      species: 'Phasianidés',
      lng: '90 - 230 cm',
      span: '130 - 160 cm',
      description: "Forêts humides de l'Inde et du Sri Lanka",
      alimentation: 'Fruits, graines, insectes, petits rongeurs et lézards',
      status: 'Relativement commun',
    },
  ],
  [
    {
      name: 'Ménure superbe',
      latinName: 'Menura novaehollandiae',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/123607821/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537997/mp3',
      species: 'Ménuridés',
      lng: '103 cm',
      span: '150 cm',
      description: "Forêts tropicales d'Australie",
      alimentation: 'Insectes et vers',
      status: 'Très rare',
    },
    {
      name: 'Toucan toco',
      latinName: 'Ramphastos toco',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/96276931/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/530216/mp3',
      species: 'Ramphastidés',
      lng: '61 cm',
      span: '75 - 80 cm',
      description: "Forêts tropicales du Mexique à l'Argentine",
      alimentation: 'Fruits, araignées, insectes, jeunes oiseaux et leurs œufs',
      status: 'Commun',
    },
    {
      name: 'Grue du Japon',
      latinName: 'Grus japonensis',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/158872801/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/542360/mp3',
      species: 'Gruidés',
      lng: '150 cm',
      span: '250 cm',
      description: 'Marais, zones humides tempérées de Chine et du Japon',
      alimentation:
        'Insectes, invertébrés aquatiques, poissons, amphibiens, fruits de bruyère, blé',
      status: 'Rare',
    },
    {
      name: 'Ibis chauve',
      latinName: 'Geronticus eremita',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45936051/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527485/mp3',
      species: 'Threskiornithidés',
      lng: '80 cm',
      span: '130 cm',
      description:
        'Zones humides et rocheuses du Maroc, d’Algérie et de Turquie',
      alimentation:
        'Petits poissons, mollusques, crustacés, grenouilles, lézards, grands insectes, œufs d’oiseaux',
      status: 'En voie d’extinction',
    },
    {
      name: 'Pélican brun',
      latinName: 'Pelecanus occidentalis',
      species: 'Pélécanidés',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/304463771/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/535014/mp3',
      lng: '109 cm',
      span: '200 cm',
      description:
        'Forêts subtropicales humides, îles, lacs, et littoraux inhabités du continent Américain',
      alimentation: 'Sardines, anchois',
      status: 'Relativement commun',
    },
    {
      name: 'Talève sultane / Poule sultane',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54358971/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537810/mp3',
      latinName: 'Porphyrio porphyrio',
      species: 'Rallidés',
      lng: '50 cm',
      span: '95 cm',
      description:
        'Groupements de roseaux des Îles Salomon, d’Europe du Sud, d’Asie, et d’Afrique',
      alimentation:
        'Différentes parties des plantes aquatiques et ses graines, petits poissons, escargots, crustacés, petits oiseaux, grenouilles',
      status: 'Commun',
    },
  ],
  [
    {
      name: 'Bernache rousse',
      latinName: 'Branta canadensis',
      species: 'Anatidés',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59953191/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/547951/mp3',
      lng: '110 cm',
      span: '122 - 183 cm',
      description: 'Zones humides et littorales d’Amérique du Nord',
      alimentation: 'Graines, plantes aquatiques, fruits sauvages',
      status: 'Relativement commun',
    },
    {
      name: 'Cigogne blanche',
      latinName: 'Ciconia ciconia',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254730691/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527476/mp3',
      species: 'Ciconiidés',
      lng: '102 cm',
      span: '160 cm',
      description:
        'Zones humides ouvertes à couvert végétal d’Afrique, d’Asie et d’Europe',
      alimentation: 'Rongeurs, vers, mollusques, amphibiens',
      status: 'Très commun',
    },
    {
      name: 'Flamant rose',
      latinName: 'Phoenicopterus roseus',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54167691/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537783/mp3',
      species: 'Phoenicopteridés',
      lng: '120 - 145 cm',
      span: '140 – 160 cm',
      description:
        'Lacs littoraux peu profonds à eau salée ou saumâtre d’Afrique, d’Europe, d’Asie et d’Australie',
      alimentation: 'Petits crustacés, mollusques, vers, algues',
      status: 'Commun',
    },
    {
      name: 'Canard mandarin',
      latinName: 'Aix galericulata',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/241982721/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/541275/mp3',
      species: 'Anatidés',
      lng: '41 - 49 cm',
      span: '65 - 75 cm',
      description:
        'Zones forestières contenant des plans d’eau situées au Nord-est Asiatique (Chine, Japon, Corée..), également en Allemagne, Angleterre et France',
      alimentation: 'Poissons, graines, herbes',
      status: 'Relativement commun',
    },
    {
      name: 'Outarde canepetière',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/620300874/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527503/mp3',
      latinName: 'Tetrax tetrax',
      species: 'Otididés',
      lng: '40 - 45 cm',
      span: '80 - 90 cm',
      description:
        "Zones sèches et plaines exposées d'Asie et d'Europe (France, Espagne ...) et de l'Extrême-Maghreb",
      alimentation: 'Graines, plantes et insectes',
      status: 'En voie de disparition',
    },
    {
      name: 'Ganga cata',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/172620811/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/528121/mp3',
      latinName: 'Pterocles alchata',
      species: 'Ptéroclidés',
      lng: '39 cm',
      span: '54 - 65 cm',
      description:
        'Steppes semi-arides en Afrique du Nord, au Sud de l’Espagne et en Asie',
      alimentation: 'Graines, plantes, insectes',
      status: 'Commun',
    },
  ],
  [
    {
      name: 'Cochévis de Thékla',
      latinName: 'Galerida cristata',
      species: 'Alaudidés',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/457456661/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/538198/mp3',
      lng: '19 cm',
      span: '29 - 34 cm',
      description: 'Forêts et prairies sèches en Afrique, en Europe et en Asie',
      alimentation: 'Graines et plantes',
      status: 'Relativement commun',
    },
    {
      name: 'Pintade vulturine',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/610665867/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/551789/mp3',
      latinName: 'Acryllium vulturinum',
      species: 'Numididés',
      lng: '70 – 72 cm',
      span: '90 – 95 cm',
      description:
        "Prairies et savanes sèches, du sud de l'Éthiopie au nord de la Tanzanie, en passant par le Kenya",
      alimentation: 'Graines et petits invertébrés',
      status: 'Relativement commun',
    },
    {
      name: 'Fou du bassan',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/66025421/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/522013/mp3',
      latinName: 'Morus bassanus',
      species: 'Sulidés',
      lng: '85 – 90 cm',
      span: '165 – 180 cm',
      description: 'Océan Atlantique Nord et Mer Méditerranée',
      alimentation: 'Petits poissons, serpents de mer',
      status: 'Commun',
    },
    {
      name: 'Grand cormoran',
      latinName: 'Phalacrocorax carbo',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/66026521/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/523782/mp3',
      species: 'Phalacrocoracidés',
      lng: '82 – 100 cm',
      span: '132 – 163 cm',
      description: 'Eaux côtières d’Asie, d’Afrique et d’Europe',
      alimentation: 'Poissons, poulpes, calmars, crustacés',
      status: 'Commun',
    },
    {
      name: 'Manchot empereur',
      latinName: 'Aptenodytes forsteri',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/362635561/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/388782961/mp3',
      species: 'Spheniscidés',
      lng: '122 cm',
      description: 'Antarctique',
      alimentation: 'Poissons, crustacés, mollusques (calmars, poulpes)',
      status: 'Rare et très menacé',
    },
    {
      name: 'Goéland d’Audouin',
      latinName: 'Ichthyaetus audouinii',
      species: 'Laridés',
      lng: '52 cm',
      span: '125 – 138 cm',
      description: 'Côtes et îles méditerranéennes',
      alimentation: 'Poissons, invertébrés marins',
      status: 'Relativement commun',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/253702671/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537883/mp3',
    },
  ],
];

const categoriesRu = [
  'المستوى 1',
  'المستوى 2',
  'المستوى 3',
  'المستوى 4',
  'المستوى 5',
  'المستوى 6',
];

const birdsDataRu = [
  [
    {
      name: 'عقاب حرّ',
      latinName: 'Aquila chrysaetos',
      species: 'العقبان والنسور (Accipitridés)',
      lng: '66 - 100 صم',
      span: '180 - 234 صم',
      description:
        'الأحراج والغابات الجبلية بأوروبا وشمال إفريقيا وأمريكا الشمالية.',
      alimentation:
        'القوارض، الثدييات الصغيرة (القواع، صغار الثعلب وابن آوى)، الطيور الصغيرة.',
      status: 'شائع',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/305364081/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549080/mp3',
    },
    {
      name: 'ساف / باشق أوراسي',
      latinName: 'Accipiter nisus',
      species: 'النسور والعقبان (Accipitridés)',
      lng: '38 صم',
      span: '60 – 75 صم',
      description: 'الغابات والأحراج والمناطق الجبلية بإفريقيا وأوروبا وآسيا.',
      alimentation: 'الطيور الصغيرة.',
      status: 'شائع',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254927951/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553432/mp3',
    },
    {
      name: 'عقاب مخادع',
      latinName: 'Harpia harpyja',
      species: 'النسور والعقبان (Accipitridés)',
      lng: '105 صم',
      span: '188 صم',
      description: 'الغابات المدارية والاستوائية بأمريكا الجنوبية.',
      alimentation: 'الثدييات، الطيور، الثعابين.',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/245402661/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/540007/mp3',
      status: 'نادر',
    },
    {
      name: 'بوم ثلجي',
      french_name: 'Harfang des neiges',
      latinName: 'Bubo scandiacus',
      species: 'البوم الحقيقي (Strigidés)',
      lng: '62 صم',
      span: '154 صم',
      description: 'التوندرا القطبية والمناطق الباردة القريبة منها بآسيا.',
      alimentation:
        'الثدييات الصغيرة مثل القوارض، الطيور مثل البطّ والإوزّ، أحيانا الأسماك.',
      status: 'شائع',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/297365891/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549169/mp3',
    },
    {
      name: 'بومة فهد الليل',
      french_name: 'Hibou grand duc',
      latinName: 'Bubo bubo',
      species: 'البوم الحقيقي (Strigidés)',
      lng: '57 - 76 صم',
      span: '164 - 190 صم',
      description:
        'الغابات والأحراج والسباسب والبوادي والسهول والمناطق الجافة بشمال إفريقيا وأوروبا وآسيا.',
      alimentation:
        'القوارض والقواع والأفاعي والسحالي والحيات وصغار ابن آوى أو الثعلب.',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/258097941/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527577/mp3',
      status: 'شائع',
    },
    {
      name: 'كوندور كاليفورنيا',
      french_name: 'Condor de Californie',
      latinName: 'Gymnogyps californianus',
      species: 'نسور العالم الجديد (Cathartidés)',
      lng: '134 صم',
      span: '249 - 300 صم',
      description: 'غابات شمال القارة الأمريكية والمكسيك.',
      alimentation:
        'جثث الحيوانات البرية والأليفة (الأبقار والخرفان) والثدييات الصغيرة.',
      status: 'نادر نسبيا',
      image:
        'https://www.leesonphoto.com/img-get/I000041Oqw1wdcaE/s/600/600/C3A0286.jpg',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/522053/mp3',
    },
  ],
  [
    {
      name: 'ببّغاء بورتوريكو',
      french_name: 'Amazone de Porto Rico',
      latinName: 'Amazona vittata',
      species: 'الببّاغوات (Psittacidés)',
      lng: '30 صم',
      span: '50 – 55 صم',
      description: 'مستوطن بغابات بورتوريكو.',
      alimentation: 'الأزهار، الثمار، الأوراق النباتية.',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/536459/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/106627111/1800',
      status: 'نادر جدا',
    },
    {
      name: 'مكاو أزرق وأصفر',
      french_name: 'Ara bleu / Ara bleu et jaune',
      latinName: 'Ara ararauna',
      species: 'الببّاغوات (Psittacidés)',
      lng: '86 صم',
      span: '104 - 114 صم',
      description:
        'الغابات المطيرة ابتداء من بنما حتى منطقة ساو باولو بالبرازيل.',
      alimentation: 'الثمار.',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/530282/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/58162541/1800',
      status: 'شائع نسبيا، مهدّد في بعض المناطق التي يكثر فيها اقتطاع الأشجار.',
    },
    {
      name: 'ببغاء جاكو',
      french_name: 'Perroquet Jaco Gris du Gabon',
      latinName: 'Psittacus erithacus',
      species: 'الببّاغوات (Psittacidés)',
      lng: '39 صم',
      span: '55 – 59 صم',
      description: 'الغابات الرطبة ببلدان إفريقيا الوسطى والغربية.',
      alimentation: 'غالبا الثمار والبذور.',
      status: 'شائع',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/546545/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/240817371/1800',
    },
    {
      name: 'كوكال أخضر المنقار',
      french_name: 'Coucal de Ceylon',
      latinName: 'Centropus chlororhynchos',
      species: 'طيور الوقواق (Cuculidés)',
      lng: '46 صم',
      span: '60 – 65 صم',
      description: 'يعيش بالغابات المطيرة في سيريلانكا.',
      alimentation: 'الحشرات، الديدان، الفقاريات الصغيرة (قوارض، سحالي..).',
      status: 'في طور الانقراض',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/547236/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/252001001/1800',
    },
    {
      name: 'ديك رومي متأنق',
      french_name: 'Dindon ocellé',
      latinName: 'Agriocharis ocellata',
      species: 'التدرجيات (Phasianidés)',
      lng: '70 - 90 صم',
      span: '90 – 113 صم',
      description: 'غابات جزيرة يوكاتان وجمهورية بليز وشمال غواتيمالا.',
      alimentation: 'النباتات والمواد العضوية.',
      status: 'نادر جدا',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/244658841/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/523827/mp3',
    },
    {
      name: 'أبلاكت نبيل',
      latinName: 'Euplectes hordeaceus',
      species: 'Plocéidés',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/547135/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/239360781/1800',
      lng: '12 صم',
      span: '29 – 33 صم',
      description: 'يعيش بالمناطق الرطبة و الحقول بجنوب إفريقيا. ',
      alimentation: 'البذور و الحشرات',
      status: 'شائع',
    },
  ],
  [
    {
      name: 'غراب',
      french_name: 'Grand corbeau',
      latinName: 'Corvus corax',
      species: 'الغرابيات (Corvidés)',
      lng: '59 – 65 صم',
      span: '121 - 153 صم',
      description:
        'الغابات والأحراج والأرياف والسهول والسباسب بشمال إفريقيا وأوروبا وآسيا وقرويلاند وأمريكا الشمالية.',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549855/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/300152741/1800',
      alimentation: 'الثدييّات والسحالي والحيات وجثث الحيوانات.',
      status: 'شائع',
    },
    {
      name: 'قيق رمادي / قيق كندي',
      latinName: 'Perisoreus canadensis',
      species: 'الغرابيات (Corvidés)',
      lng: '31 صم',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/549737/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/70582941/1800',
      span: '45 صم',
      description: 'الغابات الصنوبرية والمختلطة بأمريكا الشمالية.',
      alimentation:
        'المفصليات، بقايا الحيوانات، الثمار البرية، فراخ الطيور الأخرى وبيضها.',
      status: 'شائع',
    },
    {
      name: 'مقنين / حسّون أوراسي',
      latinName: 'Carduelis carduelis',
      species: 'الشرشوريات (Fringillidés)',
      lng: '12 صم',
      span: '23 صم',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527858/mp3',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256707351/1800',
      description:
        'الغابات والأحراج والمروج والأراضي البور وأسيجة الحدائق بشمال إفريقيا وأوروبا وآسيا.',
      alimentation: 'الحبوب خصوصا بذور نباتات البكّ.',
      status: 'في طور الانقراض',
    },
    {
      name: 'نقار الخشب الكبير',
      french_name: 'Pic épeiche',
      latinName: 'Dendrocopos major',
      species: 'النقاريات (Picidés)',
      lng: '24 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553480/mp3',
      span: '34 – 39 صم',
      description:
        'الغابات والأحراج بشمال إفريقيا (تونس، الجزائر، المغرب) وأوروبا وآسيا.',
      alimentation: 'الحشرات ويرقاتها، خصوصا مغمّدات الأجنحة.',
      status: 'شائع',
    },
    {
      name: 'نقار الخشب أبيض البطن',
      french_name: 'Pic à ventre blanc',
      latinName: 'Dryocopus javensis',
      species: 'النقاريات (Picidés)',
      lng: '48 صم',
      span: '60 – 63 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/147342301/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/542679/mp3',
      description:
        'غابات دول جنوب شرق آسيا (الهند، الصين، كوريا الجنوبية والشمالية، اليابان، تايلندا..).',
      alimentation: 'الحشرات ويرقاتها، خصوصا النمل والنمل الأبيض.',
      status: 'شائع',
    },
    {
      name: 'هدهد / تبّيب',
      french_name: 'Huppe fasciée',
      latinName: 'Upupa epops',
      species: 'الهدهديّات (Upupidés)',
      lng: '26 – 28 صم',
      span: '42 – 64 صم',
      description:
        'الغابات والأحراج والفضاءات المكشوفة والبوادي والسباسب والمروج وأطراف البحيرات وقرب المراعي الشاسعة بإفريقيا وأوروبا وآسيا.',
      alimentation: 'الحشرات.',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/186308261/320',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553459/mp3',
      status: 'شائع',
    },
  ],
  [
    {
      name: 'أبو قرن عملاق',
      french_name: 'Calao bicorne',
      latinName: 'Buceros bicornis',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/146172791/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/542521/mp3',
      lng: '105 صم',
      span: '180 صم',
      description:
        'الغابات المطيرة والمدارية بآسيا (الهند، فيتنام، ماليزيا..).',
      alimentation:
        'خصوصا الغلال، الحشرات وفراخ الطير وبيضها والقوارض والسحالي الصغيرة.',
      status: 'شائع نسبيا',
    },
    {
      name: 'كاسواري ذو الخوذة',
      latinName: 'Casuarius casuarius',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/121400251/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537735/mp3',
      species: 'الكاسواريّات',
      lng: '119 - 180 سم',
      description:
        'الغابات الاستوائية الرطبة بإندونيسيا وغينيا الجديدة وأستراليا',
      alimentation: 'الفواكه، المكسرات، الحشرات، الطيور الصغيرة وبيضها',
      status: 'شائع نسبيا',
    },
    {
      name: 'وروار أوروبي / يامون',
      french_name: 'Guêpier d’Europe',
      latinName: 'Merops apiaster',
      species: 'الورواريات (Meropidés)',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/459241061/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553463/mp3',
      lng: '28 صم',
      span: '47 صم',
      description:
        'الضفاف الرملية لمجاري الأودية الموجودة في غابات وأحراج أوروبا وإفريقيا وآسيا.',
      alimentation: 'النحل والدبّور والجراد.',
      status: 'شائع',
    },
    {
      name: 'زاغي',
      french_name: 'Pirolle de Taiwan',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/85864811/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/86801811/mp3',
      latinName: 'Urocissa caerulea',
      species: 'الغرابيات (Anatidés)',
      lng: '65 صم',
      span: '111 صم',
      description: 'غابات تايوان والصّين.',
      alimentation: 'التين البرّي واللاّفقاريّات والحشرات.',
      status: 'شائع نسبيا',
    },
    {
      name: 'ديك الخلنج الغربي',
      french_name: 'Grand tétras',
      latinName: 'Tetrao urogallus',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/614055613/900',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527465/mp3',
      species: 'الطيهوجيات (Phasianidés)',
      lng: '115 صم',
      span: '125 صم',
      description: 'غابات التايغا في أوروبا وروسيا.',
      alimentation: 'أوراق الشجيرات.',
      status: 'شائع',
    },
    {
      name: 'طاووس أزرق',
      french_name: 'Paon bleu',
      latinName: 'Pavo cristatus',
      species: 'التدرجيات (Phasianidés)',
      lng: '90 - 230 صم',
      span: '130 - 160 صم',
      description: 'الغابات الرطبة بالهند وسريلانكا.',
      alimentation:
        'الثمار، البذور، الحشرات، وبدرجة أقل القوارض والسحالي الصغيرة.',
      status: 'شائع نسبيا',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/97326721/1800',
      audio:
        'https: //cdn.download.ams.birds.cornell.edu/api/v2/asset/534904/mp3',
    },
  ],
  [
    {
      name: 'طائر القيثارة المتألق',
      french_name: 'Ménure superbe',
      latinName: 'Menura novaehollandiae',
      species: 'طيور القيثارة (Ménuridés)',
      lng: '103 صم',
      span: '150 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/123607821/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537997/mp3',
      description: 'الغابات المطيرة بأستراليا.',
      alimentation: 'الحشرات والدّيدان.',
      status: 'نادر جدا',
    },
    {
      name: 'طوقان توكو',
      french_name: 'Toucan toco',
      latinName: 'Ramphastos toco',
      species: 'الطوقانيات (Ramphastidés)',
      lng: '61 صم',
      span: '75 – 80 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/96276931/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/530216/mp3',
      description: 'الغابات الاستوائية من المكسيك الى الأرجنتين.',
      alimentation: 'الفواكه، العناكب، الحشرات، صغار الطير وبيضها.',
      status: 'شائع',
    },
    {
      name: 'كركي ياباني',
      french_name: 'Grue du Japon',
      latinName: 'Grus japonensis',
      species: 'الكركيات (Gruidés)',
      lng: '150 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/158872801/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/542360/mp3',
      span: '250 صم',
      description: 'المستنقعات والمناطق الرطبة المعتدلة للصين واليابان.',
      alimentation:
        'الحشرات، اللافقريات المائية، الأسماك، البرمائيات، ثمار الخلنج، القمح.',
      status: 'نادر',
    },
    {
      name: 'أبو منجل الناسك',
      french_name: 'Ibis chauve',
      latinName: 'Geronticus eremita',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/45936051/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527485/mp3',
      species: 'الحارسيات (Threskiornithidés)',
      lng: '80 صم',
      span: '130 صم',
      description: 'المناطق الرطبة والصخرية بالمغرب الأقصى والجزائر وتركيا.',
      alimentation:
        'الأسماك الصغيرة، الرخويات، القشريات، الضفادع، السحالي، الحشرات الكبيرة، بيض الطيور.',
      status: 'في طور الانقراض',
    },
    {
      name: 'بجع بنّي',
      french_name: 'Pélican brun',
      latinName: 'Pelecanus occidentalis',
      species: 'البجعيات (Pelecanidés)',
      lng: '109 صم',
      span: '200 صم',
      description:
        'الغابات شبه المدارية الرطبة، الجزر، البحيرات والسواحل المهجورة بأمريكا الشمالية والوسطى والجنوبية.',
      alimentation: 'أسماك الأنشوّة والسردين.',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/304463771/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/535014/mp3',
      status: 'شائع نسبيا',
    },
    {
      name: 'حسون أرجواني / دجاجة سلطانية',
      french_name: 'Poule sultane / Talève sultane',
      latinName: 'Porphyrio porphyrio',
      species: 'التفلقيات (Rallidés)',
      lng: '50 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54358971/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537810/mp3',
      span: '95 صم',
      description:
        'تجمّعات القصب بجزر السالومون وأوروبا الجنوبية وآسيا وإفريقيا.',
      alimentation:
        'أساسا مختلف أجزاء النباتات المائية وبذورها، بصفة أقلّ فراخ الطير وبيضها، الضفادع، الأسماك الصغيرة، الحلزونات والقشريات.',
      status: 'شائع',
    },
  ],
  [
    {
      name: 'إوزّ كندا',
      french_name: 'Bernache du Canada',
      latinName: 'Branta canadensis',
      species: 'الإوزيات (Anatidés)',
      lng: '110 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/59953191/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/547951/mp3',
      span: '122 - 183 صم',
      description: 'المناطق الرطبة والساحلية بأمريكا الشمالية وغرويلاند.',
      alimentation: 'البذور، النباتات المائية، الثمار البرية.',
      status: 'شائع نسبيا',
    },
    {
      name: 'لقلق أبيض',
      french_name: 'Cigogne blanche',
      latinName: 'Ciconia ciconia',
      species: 'اللقلقيات (Ciconiidés)',
      lng: '102 صم',
      span: '160 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/254730691/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527476/mp3',
      description:
        'المناطق الرطبة المفتوحة ذات الغطاء النباتي بإفريقيا وأوروبا وآسيا.',
      alimentation: 'القوارض، الديدان، الزواحف، البرمائيات.',
      status: 'شائع جدا',
    },
    {
      name: 'نحام وردي / بشروش',
      french_name: 'Flamant rose',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/54167691/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537783/mp3',
      latinName: 'Phoenicopterus roseus',
      species: 'النحاميات (Phoenicopteridés)',
      lng: '120 - 145 صم',
      span: '140 - 165 صم',
      description:
        'البحيرات الساحلية غير العميقة ذات المياه المالحة أو الأجاجة بإفريقيا وأوروبا وآسيا وأستراليا.',
      alimentation: 'القشريات الصغيرة والرخويات والديدان والطحالب.',
      status: 'شائع',
    },
    {
      name: 'بط صيني',
      french_name: 'Canard mandarin',
      latinName: 'Aix galericulata',
      species: 'البطيات (Anatidés)',
      lng: '41 – 49 صم',
      span: '65 – 75 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/241982721/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/541275/mp3',
      description:
        'المناطق الغابية التي تحتوي مسطحات مائية والموجودة بشمال شرق آسيا (الصين، اليابان، كوريا). توجد بعض الأعداد ببريطانيا وألمانيا وفرنسا.',
      alimentation: 'الأسماك والحبوب والأعشاب.',
      status: 'شائع نسبيا',
    },
    {
      name: 'حبارى صغيرة',
      french_name: 'Outarde canepetière',
      latinName: 'Tetrax tetrax',
      species: 'الحباريات (Otididés)',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/620300874/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527503/mp3',
      lng: '40 - 45 صم',
      span: '80 - 90 صم',
      description:
        'المناطق الجافة والسهول المكشوفة بآسيا وأوروبا (فرنسا، إسبانيا..) والمغرب الأقصى.',
      alimentation: 'الحبوب والنباتات والحشرات.',
      status: 'في طور الانقراض',
    },
    {
      name: 'قطا عراقي',
      french_name: 'Ganga cata',
      latinName: 'Pterocles alchata',
      species: 'القطائيات (Pteroclidés)',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/172620811/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/528121/mp3',
      lng: '39 صم',
      span: '54 - 65 صم',
      description:
        'السباسب شبه الجافة والأراضي الفلاحية بشمال إفريقيا وجنوب إسبانيا وآسيا.',
      alimentation: 'الحبوب والنباتات.',
      status: 'شائع نسبيا',
    },
  ],
  [
    {
      name: 'قبّرة متوّجة',
      french_name: 'Cochévis de Thékla',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/457456661/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/538198/mp3',
      latinName: 'Galerida cristata',
      species: 'القبّريات (Alaudidés)',
      lng: '19 صم',
      span: '29 – 34 صم',
      description:
        'الغابات المفتوحة والأحراج والمروج شبه الجافة والسباسب الجافة بإفريقيا وأوروبا وآسيا.',
      alimentation: 'البذور والنباتات.',
      status: 'شائع',
    },
    {
      name: 'غرغرة نسارية / طير غينيا نساري',
      french_name: 'Pintade vulturine',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/610665867/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/551789/mp3',
      latinName: 'Acryllium vulturinum',
      species: 'الغرغريات (Numididés)',
      lng: '70 - 72 صم',
      span: '90 - 95 صم',
      description:
        'المروج الجافة والسافانا ابتداء من جنوب أثيوبيا إلى شمال تنزانيا مرورا بكينيا.',
      alimentation: 'الحبوب واللافقاريات الصغيرة.',
      status: 'شائع نسبيا',
    },
    {
      name: 'أطيش شمالي / شميطة',
      french_name: 'Fou du bassan',
      latinName: 'Morus bassanus',
      species: 'الأطيش (Sulidés)',
      lng: '85 - 90 صم',
      span: '165 - 180 صم',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/66025421/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/522013/mp3',
      description: 'شمال المحيط الأطلسي، عرض البحر الأبيض المتوسّط.',
      alimentation: 'الأسماك الصغيرة، أفعى البحر.',
      status: 'شائع',
    },
    {
      name: 'غاق كبير',
      french_name: 'Grand cormoran',
      latinName: 'Phalacrocorax carbo',
      species: 'الغاقيات (Phalacrocoracidés)',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/66026521/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/523782/mp3',
      lng: '82 - 100 صم',
      span: '132 - 163 صم',
      description: 'المياه الساحلية بآسيا وإفريقيا وأوروبا.',
      alimentation: 'الأسماك، الأخطبوط، الكلمار، الحبّار، القشريات.',
      status: 'شائع',
    },
    {
      name: 'بطريق إمبراطور',
      french_name: 'Manchot empereur',
      latinName: 'Aptenodytes forsteri',
      species: 'البطاريق (Spheniscidés)',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/362635561/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/388782961/mp3',
      lng: '122 صم',
      description: 'القطب الجنوبي.',
      alimentation: 'الأسماك والقشريات والرخويات مثل الكلمار.',
      status: 'نادر ومهدّد جدا',
    },
    {
      name: 'زمّج الماء أدوين',
      latinName: 'Ichthyaetus audouinii',
      species: 'الزمّجيات',
      lng: '52 سم',
      span: '125 – 138 سم',
      description: 'السواحل والجزر بالبحر الأبيض المتوسط',
      alimentation: 'الأسماك، اللافقاريات البحرية',
      status: 'شائع نسبيا',
      image:
        'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/253702671/1800',
      audio:
        'https://cdn.download.ams.birds.cornell.edu/api/v2/asset/537883/mp3',
    },
  ],
];

export {
  birdsDataEn, birdsDataRu, categoriesEn, categoriesRu,
};

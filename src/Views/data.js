const PRODUCTS = [
  {
    "productId": "1",
    "name": "Paracetamol",
    "subSentence": "Reliable fever and pain relief",
    "description": "Paracetamol is a common medication used to treat pain and fever. It is available in various forms including tablets and syrups.",
    "price": 25,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://via.placeholder.com/300x300?text=Paracetamol+1",
      "https://via.placeholder.com/300x300?text=Paracetamol+2",
      "https://via.placeholder.com/300x300?text=Paracetamol+3",
      "https://via.placeholder.com/300x300?text=Paracetamol+4"
    ]
  },
  {
    "productId": "2",
    "name": "Crocin",
    "subSentence": "Fast-acting pain and fever reducer",
    "description": "Crocin contains paracetamol and is used for headache, body ache, and fever relief.",
    "price": 30,
    "minGram": 500,
    "maxGram": 650,
    "images": [
      "https://via.placeholder.com/300x300?text=Crocin+1",
      "https://via.placeholder.com/300x300?text=Crocin+2",
      "https://via.placeholder.com/300x300?text=Crocin+3",
      "https://via.placeholder.com/300x300?text=Crocin+4"
    ]
  },
  {
    "productId": "3",
    "name": "Calpol",
    "subSentence": "Gentle relief for children",
    "description": "Calpol is a pediatric paracetamol syrup used for reducing fever and relieving pain in infants and children.",
    "price": 45,
    "minGram": 120,
    "maxGram": 250,
    "images": [
      "https://via.placeholder.com/300x300?text=Calpol+1",
      "https://via.placeholder.com/300x300?text=Calpol+2",
      "https://via.placeholder.com/300x300?text=Calpol+3",
      "https://via.placeholder.com/300x300?text=Calpol+4"
    ]
  },
  {
    "productId": "4",
    "name": "Ibuprofen",
    "subSentence": "Anti-inflammatory painkiller",
    "description": "Ibuprofen is used to reduce fever and treat pain or inflammation caused by many conditions.",
    "price": 40,
    "minGram": 200,
    "maxGram": 400,
    "images": [
      "https://via.placeholder.com/300x300?text=Ibuprofen+1",
      "https://via.placeholder.com/300x300?text=Ibuprofen+2",
      "https://via.placeholder.com/300x300?text=Ibuprofen+3",
      "https://via.placeholder.com/300x300?text=Ibuprofen+4"
    ]
  },
  {
    "productId": "5",
    "name": "Combiflam",
    "subSentence": "Dual action pain relief",
    "description": "Combiflam combines ibuprofen and paracetamol for effective relief from pain and inflammation.",
    "price": 50,
    "minGram": 400,
    "maxGram": 650,
    "images": [
      "https://via.placeholder.com/300x300?text=Combiflam+1",
      "https://via.placeholder.com/300x300?text=Combiflam+2",
      "https://via.placeholder.com/300x300?text=Combiflam+3",
      "https://via.placeholder.com/300x300?text=Combiflam+4"
    ]
  },
  {
    "productId": "6",
    "name": "Benadryl",
    "subSentence": "Allergy and cold relief",
    "description": "Benadryl is an antihistamine used to relieve symptoms of allergy, hay fever, and the common cold.",
    "price": 35,
    "minGram": 8,
    "maxGram": 25,
    "images": [
      "https://via.placeholder.com/300x300?text=Benadryl+1",
      "https://via.placeholder.com/300x300?text=Benadryl+2",
      "https://via.placeholder.com/300x300?text=Benadryl+3",
      "https://via.placeholder.com/300x300?text=Benadryl+4"
    ]
  },
  {
    "productId": "7",
    "name": "Corex",
    "subSentence": "Cough syrup for relief",
    "description": "Corex is a cough syrup that helps in relieving dry cough and throat irritation.",
    "price": 55,
    "minGram": 100,
    "maxGram": 200,
    "images": [
      "https://via.placeholder.com/300x300?text=Corex+1",
      "https://via.placeholder.com/300x300?text=Corex+2",
      "https://via.placeholder.com/300x300?text=Corex+3",
      "https://via.placeholder.com/300x300?text=Corex+4"
    ]
  },
  {
    "productId": "8",
    "name": "Ascoril",
    "subSentence": "Expectorant for cough",
    "description": "Ascoril is used to treat cough associated with bronchitis, bronchial asthma, and emphysema.",
    "price": 60,
    "minGram": 100,
    "maxGram": 200,
    "images": [
      "https://via.placeholder.com/300x300?text=Ascoril+1",
      "https://via.placeholder.com/300x300?text=Ascoril+2",
      "https://via.placeholder.com/300x300?text=Ascoril+3",
      "https://via.placeholder.com/300x300?text=Ascoril+4"
    ]
  },
  {
    "productId": "9",
    "name": "Vicks Action 500",
    "subSentence": "Advanced cold relief",
    "description": "Vicks Action 500 provides relief from multiple cold symptoms including headache and body ache.",
    "price": 40,
    "minGram": 500,
    "maxGram": 650,
    "images": [
      "https://via.placeholder.com/300x300?text=Vicks+Action+500+1",
      "https://via.placeholder.com/300x300?text=Vicks+Action+500+2",
      "https://via.placeholder.com/300x300?text=Vicks+Action+500+3",
      "https://via.placeholder.com/300x300?text=Vicks+Action+500+4"
    ]
  },
  {
    "productId": "10",
    "name": "Amoxicillin",
    "subSentence": "Broad-spectrum antibiotic",
    "description": "Amoxicillin is a penicillin antibiotic used to treat bacterial infections.",
    "price": 80,
    "minGram": 250,
    "maxGram": 500,
    "images": [
      "https://via.placeholder.com/300x300?text=Amoxicillin+1",
      "https://via.placeholder.com/300x300?text=Amoxicillin+2",
      "https://via.placeholder.com/300x300?text=Amoxicillin+3",
      "https://via.placeholder.com/300x300?text=Amoxicillin+4"
    ]
  },
  {
    "productId": "11",
    "name": "Azithromycin",
    "subSentence": "Effective against infections",
    "description": "Azithromycin is an antibiotic used for various bacterial infections including ear infections and pneumonia.",
    "price": 120,
    "minGram": 250,
    "maxGram": 500,
    "images": [
      "https://via.placeholder.com/300x300?text=Azithromycin+1",
      "https://via.placeholder.com/300x300?text=Azithromycin+2",
      "https://via.placeholder.com/300x300?text=Azithromycin+3",
      "https://via.placeholder.com/300x300?text=Azithromycin+4"
    ]
  },
  {
    "productId": "12",
    "name": "Ciprofloxacin",
    "subSentence": "Powerful antibiotic",
    "description": "Ciprofloxacin is used to treat a variety of bacterial infections.",
    "price": 90,
    "minGram": 250,
    "maxGram": 500,
    "images": [
      "https://via.placeholder.com/300x300?text=Ciprofloxacin+1",
      "https://via.placeholder.com/300x300?text=Ciprofloxacin+2",
      "https://via.placeholder.com/300x300?text=Ciprofloxacin+3",
      "https://via.placeholder.com/300x300?text=Ciprofloxacin+4"
    ]
  },
  {
    "productId": "13",
    "name": "Vitamin C Tablets",
    "subSentence": "Boost immunity",
    "description": "Vitamin C tablets help in boosting immunity and preventing vitamin C deficiency.",
    "price": 150,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://via.placeholder.com/300x300?text=Vitamin+C+1",
      "https://via.placeholder.com/300x300?text=Vitamin+C+2",
      "https://via.placeholder.com/300x300?text=Vitamin+C+3",
      "https://via.placeholder.com/300x300?text=Vitamin+C+4"
    ]
  },
  {
    "productId": "14",
    "name": "Zincovit",
    "subSentence": "Multivitamin supplement",
    "description": "Zincovit is a multivitamin and multimineral supplement for overall health.",
    "price": 200,
    "minGram": 15,
    "maxGram": 45,
    "images": [
      "https://via.placeholder.com/300x300?text=Zincovit+1",
      "https://via.placeholder.com/300x300?text=Zincovit+2",
      "https://via.placeholder.com/300x300?text=Zincovit+3",
      "https://via.placeholder.com/300x300?text=Zincovit+4"
    ]
  },
  {
    "productId": "15",
    "name": "Revital H",
    "subSentence": "Energy and vitality",
    "description": "Revital H is a health supplement that provides energy and supports overall vitality.",
    "price": 250,
    "minGram": 30,
    "maxGram": 60,
    "images": [
      "https://via.placeholder.com/300x300?text=Revital+H+1",
      "https://via.placeholder.com/300x300?text=Revital+H+2",
      "https://via.placeholder.com/300x300?text=Revital+H+3",
      "https://via.placeholder.com/300x300?text=Revital+H+4"
    ]
  },
  {
    "productId": "16",
    "name": "Shelcal",
    "subSentence": "Calcium supplement",
    "description": "Shelcal provides calcium and vitamin D for bone health.",
    "price": 180,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://via.placeholder.com/300x300?text=Shelcal+1",
      "https://via.placeholder.com/300x300?text=Shelcal+2",
      "https://via.placeholder.com/300x300?text=Shelcal+3",
      "https://via.placeholder.com/300x300?text=Shelcal+4"
    ]
  },
  {
    "productId": "17",
    "name": "Digene",
    "subSentence": "Antacid for digestion",
    "description": "Digene is an antacid used to relieve acidity and indigestion.",
    "price": 20,
    "minGram": 200,
    "maxGram": 400,
    "images": [
      "https://via.placeholder.com/300x300?text=Digene+1",
      "https://via.placeholder.com/300x300?text=Digene+2",
      "https://via.placeholder.com/300x300?text=Digene+3",
      "https://via.placeholder.com/300x300?text=Digene+4"
    ]
  },
  {
    "productId": "18",
    "name": "Gelusil",
    "subSentence": "Relief from acidity",
    "description": "Gelusil provides quick relief from heartburn and acidity.",
    "price": 25,
    "minGram": 150,
    "maxGram": 300,
    "images": [
      "https://via.placeholder.com/300x300?text=Gelusil+1",
      "https://via.placeholder.com/300x300?text=Gelusil+2",
      "https://via.placeholder.com/300x300?text=Gelusil+3",
      "https://via.placeholder.com/300x300?text=Gelusil+4"
    ]
  },
  {
    "productId": "19",
    "name": "ENO",
    "subSentence": "Effervescent antacid",
    "description": "ENO is an effervescent antacid that relieves gas and acidity.",
    "price": 15,
    "minGram": 5,
    "maxGram": 10,
    "images": [
      "https://via.placeholder.com/300x300?text=ENO+1",
      "https://via.placeholder.com/300x300?text=ENO+2",
      "https://via.placeholder.com/300x300?text=ENO+3",
      "https://via.placeholder.com/300x300?text=ENO+4"
    ]
  },
  {
    "productId": "20",
    "name": "Metformin",
    "subSentence": "Diabetes management",
    "description": "Metformin is used to control blood sugar levels in type 2 diabetes.",
    "price": 70,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://via.placeholder.com/300x300?text=Metformin+1",
      "https://via.placeholder.com/300x300?text=Metformin+2",
      "https://via.placeholder.com/300x300?text=Metformin+3",
      "https://via.placeholder.com/300x300?text=Metformin+4"
    ]
  },
  {
    "productId": "21",
    "name": "Glycomet",
    "subSentence": "Blood sugar control",
    "description": "Glycomet contains metformin and helps in managing diabetes.",
    "price": 75,
    "minGram": 500,
    "maxGram": 1000,
    "images": [
      "https://via.placeholder.com/300x300?text=Glycomet+1",
      "https://via.placeholder.com/300x300?text=Glycomet+2",
      "https://via.placeholder.com/300x300?text=Glycomet+3",
      "https://via.placeholder.com/300x300?text=Glycomet+4"
    ]
  },
  {
    "productId": "22",
    "name": "Betadine",
    "subSentence": "Antiseptic solution",
    "description": "Betadine is an antiseptic used for wound care and skin disinfection.",
    "price": 60,
    "minGram": 100,
    "maxGram": 500,
    "images": [
      "https://via.placeholder.com/300x300?text=Betadine+1",
      "https://via.placeholder.com/300x300?text=Betadine+2",
      "https://via.placeholder.com/300x300?text=Betadine+3",
      "https://via.placeholder.com/300x300?text=Betadine+4"
    ]
  },
  {
    "productId": "23",
    "name": "Soframycin",
    "subSentence": "Antibiotic skin cream",
    "description": "Soframycin is an antibiotic cream used for skin infections and wounds.",
    "price": 45,
    "minGram": 20,
    "maxGram": 50,
    "images": [
      "https://via.placeholder.com/300x300?text=Soframycin+1",
      "https://via.placeholder.com/300x300?text=Soframycin+2",
      "https://via.placeholder.com/300x300?text=Soframycin+3",
      "https://via.placeholder.com/300x300?text=Soframycin+4"
    ]
  },
  {
    "productId": "24",
    "name": "Boroline",
    "subSentence": "Healing cream",
    "description": "Boroline is a cream used for cuts, burns, and skin irritations.",
    "price": 30,
    "minGram": 20,
    "maxGram": 50,
    "images": [
      "https://via.placeholder.com/300x300?text=Boroline+1",
      "https://via.placeholder.com/300x300?text=Boroline+2",
      "https://via.placeholder.com/300x300?text=Boroline+3",
      "https://via.placeholder.com/300x300?text=Boroline+4"
    ]
  },
  {
    "productId": "25",
    "name": "Dettol",
    "subSentence": "Disinfectant liquid",
    "description": "Dettol is a disinfectant used for cleaning wounds and surfaces.",
    "price": 80,
    "minGram": 125,
    "maxGram": 500,
    "images": [
      "https://via.placeholder.com/300x300?text=Dettol+1",
      "https://via.placeholder.com/300x300?text=Dettol+2",
      "https://via.placeholder.com/300x300?text=Dettol+3",
      "https://via.placeholder.com/300x300?text=Dettol+4"
    ]
  },
  {
    "productId": "26",
    "name": "Savlon",
    "subSentence": "Antiseptic solution",
    "description": "Savlon is used for first aid and antiseptic purposes.",
    "price": 50,
    "minGram": 100,
    "maxGram": 500,
    "images": [
      "https://via.placeholder.com/300x300?text=Savlon+1",
      "https://via.placeholder.com/300x300?text=Savlon+2",
      "https://via.placeholder.com/300x300?text=Savlon+3",
      "https://via.placeholder.com/300x300?text=Savlon+4"
    ]
  },
  {
    "productId": "27",
    "name": "Band-Aid",
    "subSentence": "Adhesive bandages",
    "description": "Band-Aid is used to cover and protect minor wounds.",
    "price": 20,
    "minGram": 20,
    "maxGram": 50,
    "images": [
      "https://via.placeholder.com/300x300?text=Band-Aid+1",
      "https://via.placeholder.com/300x300?text=Band-Aid+2",
      "https://via.placeholder.com/300x300?text=Band-Aid+3",
      "https://via.placeholder.com/300x300?text=Band-Aid+4"
    ]
  },
  {
    "productId": "28",
    "name": "Cetirizine",
    "subSentence": "Antihistamine for allergies",
    "description": "Cetirizine is used to relieve allergy symptoms like runny nose and sneezing.",
    "price": 15,
    "minGram": 10,
    "maxGram": 20,
    "images": [
      "https://via.placeholder.com/300x300?text=Cetirizine+1",
      "https://via.placeholder.com/300x300?text=Cetirizine+2",
      "https://via.placeholder.com/300x300?text=Cetirizine+3",
      "https://via.placeholder.com/300x300?text=Cetirizine+4"
    ]
  },
  {
    "productId": "29",
    "name": "Allegra",
    "subSentence": "Allergy relief",
    "description": "Allegra provides relief from seasonal allergies and hay fever.",
    "price": 120,
    "minGram": 120,
    "maxGram": 180,
    "images": [
      "https://via.placeholder.com/300x300?text=Allegra+1",
      "https://via.placeholder.com/300x300?text=Allegra+2",
      "https://via.placeholder.com/300x300?text=Allegra+3",
      "https://via.placeholder.com/300x300?text=Allegra+4"
    ]
  },
  {
    "productId": "30",
    "name": "Liv 52",
    "subSentence": "Liver health syrup",
    "description": "Liv 52 is a herbal syrup that supports liver function and detoxification.",
    "price": 100,
    "minGram": 100,
    "maxGram": 200,
    "images": [
      "https://via.placeholder.com/300x300?text=Liv+52+1",
      "https://via.placeholder.com/300x300?text=Liv+52+2",
      "https://via.placeholder.com/300x300?text=Liv+52+3",
      "https://via.placeholder.com/300x300?text=Liv+52+4"
    ]
  },
  {
    "productId": "31",
    "name": "Dexorange",
    "subSentence": "Iron and vitamin syrup",
    "description": "Dexorange syrup provides iron and vitamins to prevent anemia.",
    "price": 90,
    "minGram": 150,
    "maxGram": 200,
    "images": [
      "https://via.placeholder.com/300x300?text=Dexorange+1",
      "https://via.placeholder.com/300x300?text=Dexorange+2",
      "https://via.placeholder.com/300x300?text=Dexorange+3",
      "https://via.placeholder.com/300x300?text=Dexorange+4"
    ]
  }
];

export default PRODUCTS;
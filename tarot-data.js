export const _tarotData = function(){

    const classicalPlanetSigns = ["♄","♃","♂","☉","♀","☿","☾"];
    const classicalPlanets = ["Saturn","Jupiter","Mars","Sol","Venus","Mercury","Moon"];
    const zodiacNames = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius" , "Pisces"];
    const zodiacSigns = ["♈︎", "♉︎", "♊︎", "♋︎", "♌︎", "♍︎", "♎︎", "♏︎", "♐︎", "♑︎", "♒︎" , "♓︎"];
    const hebrewAlphabet = "אבגדהוזחטיכלמנסעפצקרשת";

    const zodiacMap = [+1,+5,+9,10,+2,+6,+7,11,+3,+4,+8,12];

  
    const zodiacModality = [
      {name:"Cardinal",primes:"Sulfur",sign:"🜍"},
      {name:"Fixed",primes:"Salt",sign:"🜔"},
      {name:"Mutable",primes:"Mercury",sign:"☿"}
    ];
  
    const elements = [
      {name:"Fire",sign:"🜂"},
      {name:"Earth",sign:"🜃"},
      {name:"Air",sign:"🜁"},
      {name:"Water",sign:"🜄"},
    ];
  
    const dignityRaw = `Aries	Mars	Sol	Venus	Saturn
    Taurus	Venus	Moon	Mars	None
    Gemini	Mercury	None	Jupiter	None
    Cancer	Moon	Jupiter	Saturn	Mars
    Leo	Sol	None	Saturn	None
    Virgo	Mercury	Mercury	Jupiter	Venus
    Libra	Venus	Saturn	Mars	Sol
    Scorpio	Mars	None	Venus	Moon
    Sagittarius	Jupiter	None	Mercury	None
    Capricorn	Saturn	Mars	Moon	Jupiter
    Aquarius	Saturn	None	Sol	None
    Pisces	Jupiter	Venus	Mercury	Mercury`;
  
    const sefirotPlanetSigns = {
      'Zodiac': '☸',
      'Earth-2' : '🜨',
    }
    // ['☸',...classicalPlanetSigns,"🜨"]
    const sefirotPlanets  = [null, 'Zodiac',...classicalPlanets,"Earth"]
  
    const modernPlaneSigntMap = {
      "Uranus": "♅",
      "Neptune": "♆",
      "Pluto": "♇"
    }
  
    classicalPlanetSigns.map((planet,n)=>{
      modernPlaneSigntMap[classicalPlanets[n]] = classicalPlanetSigns[n]
    })
  
    const cardsMajorArcanaRaw = `The Fool, Air,Spirit of Aether
    The Magician, Mercury,Magus of Power
    The High Priestess, Moon,Priestess of the Silver Star
    The Empress, Venus,Daughter of the Mighty Ones
    The Emperor, Aries,Son of the Morning
    The Hierophant, Taurus,Magus of the Eternal
    The Lovers, Gemini,Children of the Voice
    The Chariot, Cancer,Child of the Powers of the Waters
    Strength, Leo,Daughter of the Flaming Sword
    The Hermit, Virgo,Prophet of the Eternal
    Wheel of Fortune, Jupiter,Lord of the Forces of Life
    Justice, Libra,Daughter of Lords of Truth
    The Hanged Man, Water,Spirit of the Mighty Waters
    Death, Scorpio,Child of the Great Transformers
    Temperance, Sagittarius,Daughter of the Reconcilers
    The Devil, Capricorn,Lord of the Gates of Matter
    The Tower, Mars,Lord of the Hosts of the Mighty
    The Star, Aquarius,Daughter of the Firmament
    The Moon, Pisces,Ruler of Flux and Reflux
    The Sun, Sol,Lord of the Fire of the World
    Judgement, Fire,Spirit of the Primal Fire
    The World, Saturn,The Great One of the Night of Time`;
  
    const hebrewAlphabetMeaningRaw = `Ox
    House
    Camel / Rope
    Door
    Window
    Hook / Nail
    Weapon / Sword
    Fence
    Snake / Basket
    Arm
    Palm
    Ox Goad
    Water
    Fish / Seed
    Tent pole / Support
    Eye / Experience
    Mouth
    Fish Hook / Hunt
    Back of Head
    Head / First
    Tooth / Eat
    Cross / Mark`;
  
    const sefirotRaw = `Keter, Crown
    Chokhmah, Wisdom
    Binah, Understanding
    Chesed, Mercy
    Gevurah, Justice
    Tiferet, Beauty
    Netzach, Eternity
    Hod, Glory
    Yesod, Foundation
    Malkuth, Kingdom`;
  
    const cardsMinorTitleRaw = `The Root of the Powers of Fire
    The Lord of Dominion
    The Lord of Established Strength
    The Lord of Perfected Work
    The Lord of Strife
    The Lord of Victory
    The Lord of Courage
    The Lord of Swiftness
    The Lord of Strength
    The Lord of Oppression
    The Rose of the Palace of Fire
    The Prince of the Chariot of Fire
    The Queen of the Thrones of Flame
    King of the Spirits of Fire
    The Root of the Powers of the Earth
    The Lord of Harmonious Change
    The Lord of Material Works
    The Lord of Earthly Power
    The Lord of Material Trouble
    The Lord of Material Success
    The Lord of Unfulfilled Success
    The Lord of Material Prudence
    The Lord of Material Gain
    The Lord of Wealth
    The Rose of the Palace of Earth
    The Prince of the Chariot of Earth
    The Queen of the Throne of Earth
    The King of the Spirits of Earth
    The Root of the Powers of Air
    The Lord of Peace Restored
    The Lord of Sorrow
    The Lord of Rest from Strife
    The Lord of Defeat
    The Lord of Earned Success
    The Lord of Unstable Effort
    The Lord of Shortened Force
    The Lord of Despair and Cruelty
    The Lord of Ruin
    The Prince of the Rushing Winds
    Lord of the Winds and the Breezes
    Queen of the Thrones of Air
    King of the Spirits of Air
    The Root of the Powers of Water
    The Lord of Love
    The Lord of Abundance
    The Lord of Blended Pleasure
    The Lord of Loss in Pleasure
    The Lord of Pleasure
    The Lord of Illusionary Success
    The Lord of Abandoned Success
    The Lord of Material Happiness
    The Lord of Perfected Success
    The Prince of the Waters
    The Prince of the Chariot of the Waves
    The Queen of the Throne of Waters
    The Lord of the Waves and Waters`;
  
    const kabbalahWorlds = [
      {name:"Atziluth",hebrew:"אֲצִילוּת",meaning:"Emanation",domination:[2]},
      {name:"Beriah",hebrew:"בְּרִיָּה",meaning:"Creation",domination:[3]},
      {name:"Yetzirah",hebrew:"יְצִירָה",meaning:"Formation",domination:[4,5,6,7,8,9]},
      {name:"Assiah",hebrew:"עֲשִׂיָּה",meaning:"Action",domination:[10]},
    ];
  
    const kabbalahWorldOrderMap = [0,3,2,1]
  
    const planetZodiacMapRaw = `1st	Aries	Mars	Libra
      2nd	Taurus	Venus	Scorpio
      3rd	Gemini	Mercury	Sagittarius
      4th	Cancer	Moon	Capricorn
      5th	Leo	Sol	Aquarius
      6th	Virgo	Mercury	Pisces
      7th	Libra	Venus	Aries
      8th	Scorpio	Mars-Pluto	Taurus
      9th	Sagittarius	Jupiter	Gemini
      10th	Capricorn	Saturn	Cancer
      11th	Aquarius	Saturn-Uranus	Leo
      12th	Pisces	Jupiter-Neptune	Virgo`;
  
    const _planetZodiacMap = [];
    const planetZodiacMap = {}
    const dignityMap = {};
    const dignityHeaderRow = ["Domicile","Exaltation","Detriment","Fall"]
  
    planetZodiacMapRaw.split("\n").map((row,n)=>{
      _planetZodiacMap[n] = row.trim().split("\t").map(text=>text.trim()).slice(1)
    })
  
    dignityRaw.split("\n").map((row,n)=>{
      dignityMap[zodiacNames[n]] = row.trim().split("\t").map(text=>text.trim()).slice(1)
    })
  
    
    const cardsMinorArcanaMap = []
  
    const suitPrefix = ["Wands","Pentacles","Swords","Cups"];
    const numReplace = ["Ace",2,3,4,5,6,7,8,9,10,"Page","Knight","Queen","King"];

    const courtMap = [
      ["w",13],["p",12],["s",14],["c",13],
      ["w",12],["p",14],["s",13],["c",12],
      ["w",14],["p",13],["s",12],["c",14],
    ]

    const suitMap = {
      "w":0,
      "p":1,
      "s":2,
      "c":3,
    }

    const courtDecanMap = [
      ["w",13],["p",12],["s",14],["c",13],
      ["w",12],["p",14],["s",13],["c",12],
      ["w",14],["p",13],["s",12],["c",14],
    ]

    const getCourtDecanCards = (_suit, _num) => {

      if(_num < 12){
        return null;
      }
    
      // console.log(_suit)
      // console.log(_num)
      const courtMap = [null, 1, 0, 2];
      const courtIdx = suitMap[_suit] * 14 + courtMap[_num - 11] * 3 + 2;
      const prev = ((courtIdx + (56 - 14 - 1 ))  )% 56 - 1 + (_num==13?9:0);
      return courtDecanCards = {
        ruler:cardsMinorArcanaMap[ suitMap[_suit] * 14 + _num-1 ],
        decans:[
          cardsMinorArcanaMap[prev],
          cardsMinorArcanaMap[courtIdx + 0 - 1],
          cardsMinorArcanaMap[courtIdx + 1 - 1],
        ]
      };
    }    
    cardsMinorTitleRaw.split("\n").map((row,n)=>{

      const num = n%14;

      const suit = n >= 0  && n <=13 ? "w" :
                   n >= 14 && n <=28 ? "p" :
                   n >= 42 && n <=56 ? "s" : "c";


      courtDecanGroup = [];
      courtIdx = 0;
      zodiacIdx = 0;

      if(num < 10){

        const modalityIdx = Math.floor((num-1-1)/3)
        const zIdx = suitMap[suit] * 3 + modalityIdx;
        zodiacIdx = zodiacMap[zIdx];
        
        const m = (zodiacIdx-1) * 3 + ((num-1-1)%3);
        courtIdx = Math.floor(((m + (36+1)) % 36)/3);
        courtDecanGroup = getCourtDecanCards(courtDecanMap[courtIdx][0],courtDecanMap[courtIdx][1])
      }
   
      cardsMinorArcanaMap[n] = {
        title:`${numReplace[n%14]} of ${suitPrefix[Math.floor(n/14)]}`,
        esoteric:row.trim(),
        suit:suitPrefix[Math.floor(n/14)],
        num:numReplace[n%14],
        zodiacIdx,
        courtIdx,
        courtDecanGroup,
      };
    })
  
    _planetZodiacMap.map((row,n)=>{
      planetZodiacMap[row[0]] = row[1].split("-").map(text=>text.trim())
    })
  
    const sefirotMap = []
    sefirotRaw.split("\n").map((row,n)=>{
      sefirotMap[n] = [...row.trim().split(",").map(text=>text.trim()),sefirotPlanets[n]]
    })
  
    const hebrewAlphabetMeaningMap = []
    hebrewAlphabetMeaningRaw.split("\n").map((row,n)=>{
      hebrewAlphabetMeaningMap[n] = row.trim()
    })
  
    const cardsMajorArcanaMap = [];
    const cardsMajorArcanaOrdered = []
  
    cardsMajorArcanaRaw.split("\n").map((row,n)=>{
      const card = row.trim().split(",").map(text=>text.trim());
      const cardInfo = {
        title:card[0],
        ruler: card[1],
        esoteric:card[2],
        hebrew:{
          alphabet:hebrewAlphabet[n],
          meaning:hebrewAlphabetMeaningMap[n],
        }
      }
  
      cardsMajorArcanaMap[card[1].toLowerCase()] = cardInfo;
      cardsMajorArcanaOrdered[n] = cardInfo
  
    })
  
    const combinedSignMap = {
      ...modernPlaneSigntMap,...sefirotPlanetSigns
    }
  
    zodiacNames.map((zodiac,n)=>{
      combinedSignMap[zodiacNames[n]] = zodiacSigns[n]
    })
  
    elements.map((element,n)=>{
      combinedSignMap[element.name] = element.sign
    })
  
    return {
      sefirotMap,
      // sefirotPlanets,
      // sefirotPlanetSigns,
      classicalPlanets,
      // classicalPlanetSigns,
      // modernPlaneSigntMap,
      planetZodiacMap,
      dignityMap,
      dignityHeaderRow,
      zodiacNames,
      // zodiacSigns,
      zodiacModality,
      elements,
      kabbalahWorlds,
      kabbalahWorldOrderMap,
      cardsMajorArcanaMap,
      cardsMajorArcanaOrdered,
      cardsMinorArcanaMap,
      combinedSignMap,
    }
  
  }
  

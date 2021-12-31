const btn = document.getElementById("button");
const healingSelector = document.getElementById("healing");
const chakraSelector = document.getElementById("chakras");
const colorSelector = document.getElementById("colors");

//display variables
const displayGems = document.querySelector(".gems-display");
const gemName = document.querySelector(".name");
const gemChakra = document.querySelector(".chakra");
const gemColor = document.querySelector(".color");
const gemProperties = document.querySelector(".properties");


btn.addEventListener("click", random);

const gemsArray = [
    {
        name: "Abalone",
        chakra:"Crown, Third Eye, Heart",
        color:"Multi-colored",
        properties:"calming, soothing, healing, emotional balance, protection, dampens anger, a wave of peace & love"
    },
    {
        name: "Agate",
        chakra:"Heart, Throat",
        color:"Blue, multi-colored",
        properties:"calming, serenity, harmony, peacefulness, healing, reduce anxiety, stabilizes emotions, mental-health boost"
    },
    {
        name: "Amazonite",
        chakra:"Heart, Throat",
        color:"Green, blue-green",
        properties:"optimism, hope, playfulness, calming, balance, being true to yourself, overcoming fears, easily expressing thoughts and feelings"
    },
    {
        name: "Amethyst",
        chakra:"Crown",
        color:"Purple",
        properties:"peace, intuition, spirituality, relaxation, sleep-aid, pain relieving, healing"
    },
    {
        name: "Ammonite Fossil",
        chakra:"Root, Third Eye",
        color:"Brown",
        properties:"prosperity, stamina, transformation, personal growth, good health, protection, vitality, life force, wealth, happiness, evolution"
    },
    {
        name: "Apatite",
        chakra:"Throat, Third Eye",
        color:"Blue",
        properties:"intuition, wisdom, communication, personal power to acheive goals, stimulates the intellect, removes negativity, psychic awareness, spirituality"
    },
    {
        name: "Aquamarine",
        chakra:"Throat",
        color:"Aqua (light green - blue)",
        properties:"protection at sea, eases travel, soothes an overactive mind, improves communication, loving-kindness, inner-peace, inspiration, growth, relaxation, calming, clear thoughts"
    },
    {
        name: "Aventurine",
        chakra:"Heart",
        color:"Green",
        properties:"prosperity, confidence, purpose, luck, good fortune, abundance, opportunity, personal growth, soothes anxiety, optimism, intelletual development, learning"
    }
];

function random() {
    const gemIndex = Math.floor(Math.random() * gemsArray.length);
    // console.log(gemIndex);
    let randomGem = gemsArray[gemIndex];
    // console.log(randomGem);
    displayRandomGem(randomGem);
};

const displayRandomGem = function (randomGem) {
    gemName.innerText = randomGem.name;
    gemChakra.innerText = randomGem.chakra;
    gemColor.innerText = randomGem.color;
    gemProperties.innerText = randomGem.properties;
    displayGems.classList.remove("hide");
};

healingSelector.addEventListener("change", healingSelect);

function healingSelect() {
    for (let i = 0; i < gemsArray.length; i++) {
        if (gemsArray[i].properties.includes(healingSelector.value)) {
            let clone = displayGems.cloneNode(true);
            displayGems.after(clone);
            displayGems.classList.remove("hide");
            gemName.innerText = gemsArray[i].name;
            gemChakra.innerText = gemsArray[i].chakra;
            gemColor.innerText = gemsArray[i].color;
            gemProperties.innerText = gemsArray[i].properties;
        }     
    }
};

chakraSelector.addEventListener("change", chakraSelect);

function chakraSelect() {
    for (let i = 0; i < gemsArray.length; i++) {
     if (gemsArray[i].chakra.includes(chakraSelector.value)) {
         let clone = displayGems.cloneNode(true);
         displayGems.after(clone);
         displayGems.classList.remove("hide");
         gemName.innerText = gemsArray[i].name;
         gemChakra.innerText = gemsArray[i].chakra;
         gemColor.innerText = gemsArray[i].color;
         gemProperties.innerText = gemsArray[i].properties;
     }     
    }
};

colorSelector.addEventListener("change", colorSelect);

function colorSelect() {
    for (let i = 0; i < gemsArray.length; i++) {
        if (gemsArray[i].color.includes(colorSelector.value)) {
            let clone = displayGems.cloneNode(true);
            displayGems.after(clone);
            displayGems.classList.remove("hide");
            gemName.innerText = gemsArray[i].name;
            gemChakra.innerText = gemsArray[i].chakra;
            gemColor.innerText = gemsArray[i].color;
            gemProperties.innerText = gemsArray[i].properties;
        }     
    }
};
const btn = document.getElementById("button");
const healingSelect = document.getElementById("healing");
const chakraSelect = document.getElementById("chakras");
const colorSelect = document.getElementById("colors");

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
        properties:"Calming, soothing, healing, emotional balance, protection, dampens anger, a wave of peace & love"
    },
    {
        name: "Agate",
        chakra:"Heart, Throat",
        color:"Blue, multi-colored",
        properties:"Calming, serenity, harmony, peacefulness, healing, reduce anxiety, stabilizes emotions, mental-health boost"
    },
    {
        name: "Amazonite",
        chakra:"Heart, Throat",
        color:"Green, blue-green",
        properties:"Optimism, hope, playfulness, calm, balance, being true to yourself, overcoming fears, easily expressing thoughts and feelings"
    },
    {
        name: "Amethyst",
        chakra:"Crown",
        color:"Purple",
        properties:"Peace, intuition, spirituality, relaxation, sleep-aid, pain relieving, healing"
    },
    {
        name: "Ammonite Fossil",
        chakra:"Root, Third Eye",
        color:"Brown",
        properties:"Prosperity, stamina, transformation, personal growth, good health, protection, vitality, life force, wealth, happiness, evolution"
    },
    {
        name: "Apatite",
        chakra:"Throat, Third Eye",
        color:"Blue",
        properties:"Intuition, wisdom, communication, personal power to acheive goals, stimulates the intellect, removes negativity, psychic awareness, spirituality"
    },
    {
        name: "Aquamarine",
        chakra:"Throat",
        color:"Aqua (light green - blue)",
        properties:"Protection at sea, eases travel, soothes an overactive mind, improves communication, loving-kindness, inner-peace, inspiration, growth, relaxation, calm, clear thoughts"
    },
    {
        name: "Aventurine",
        chakra:"Heart",
        color:"Green",
        properties:"Prosperity, confidence, purpose, luck, good fortune, abundance, opportunity, personal growth, soothes anxiety, optimism, intelletual development, learning"
    }
];

function random() {
    const gemIndex = Math.floor(Math.random() * gemsArray.length);
    // console.log(gemIndex);
    let randomGem = gemsArray[gemIndex];
    console.log(randomGem);
    displayRandomGem(randomGem);
};

const displayRandomGem = function (randomGem) {
    gemName.innerText = randomGem.name;
    gemChakra.innerText = randomGem.chakra;
    gemColor.innerText = randomGem.color;
    gemProperties.innerText = randomGem.properties;
    displayGems.classList.remove("hide");
};
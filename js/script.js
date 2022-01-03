const btn = document.getElementById("random-btn");
const healingSelector = document.getElementById("healing");
const chakraSelector = document.getElementById("chakras");
const colorSelector = document.getElementById("colors");
const pickBtn = document.getElementById("pick-btn");
const resetBtn = document.getElementById("reset-btn");

//display variables
const pickGems = document.querySelector(".pick-a-gem");
const displayGems = document.querySelector(".gems-display");
const gemName = document.querySelector(".name");
const gemImg = document.getElementById("gem-image");
const gemChakra = document.querySelector(".chakra");
const gemColor = document.querySelector(".color");
const gemProperties = document.querySelector(".properties");
const resetGems = document.querySelector(".reset");
const intro = document.querySelector(".intro");
const advanced = document.querySelector(".advanced");
const notMatch = document.querySelector(".no-match");


btn.addEventListener("click", random);

const gemsArray = [
    {
        name:"Abalone",
        src: "img/abalone.jpg",
        alt: "Abalone",
        chakra:"Crown, Third Eye, Heart",
        color:"Multi-colored",
        properties:"calming, soothing, healing, emotional balance, protection, dampens anger, a wave of peace & love"
    },
    {
        name:"Agate",
        src: "img/agate.jpg",
        alt: "Agate",
        chakra:"Heart, Throat",
        color:"Blue, multi-colored",
        properties:"calming, serenity, harmony, peacefulness, healing, anxiety-reducing, emotional-stabilizer, mental-health boost"
    },
    {
        name:"Amazonite",
        src: "img/amazonite.jpg",
        alt: "Amazonite",
        chakra:"Heart, Throat",
        color:"Green, blue-green",
        properties:"optimism, hope, playfulness, calming, balance, be true to yourself, overcome fears, easily express thoughts and feelings"
    },
    {
        name:"Amethyst",
        src: "img/amethyst.jpg",
        alt: "Amethyst",
        chakra:"Crown",
        color:"Purple",
        properties:"peace, intuition, spirituality, relaxation, sleep-aid, pain relieving, healing"
    },
    {
        name:"Ammonite Fossil",
        src: "img/ammonite.jpg",
        alt: "Ammonite",
        chakra:"Root, Third Eye",
        color:"Brown",
        properties:"prosperity, stamina, transformation, personal growth, good health, protection, vitality, life force, wealth, happiness, evolution"
    },
    {
        name:"Apatite",
        src: "img/apatite.jpg",
        alt: "Apatite",
        chakra:"Throat, Third Eye",
        color:"Blue",
        properties:"intuition, wisdom, communication, personal power to acheive goals, intellectual stimulation, dispel negativity, psychic awareness, spirituality"
    },
    {
        name:"Aquamarine",
        src: "img/aquamarine.jpg",
        alt: "Aquamarine",
        chakra:"Throat",
        color:"Aqua (light green - blue)",
        properties:"protection at sea, ease of travel, soothes an overactive mind, improves communication, loving-kindness, inner-peace, inspiration, growth, relaxation, calming, clear thoughts"
    },
    {
        name:"Aventurine",
        src: "img/aventurine.jpg",
        alt: "Aventurine",
        chakra:"Heart",
        color:"Green",
        properties:"prosperity, confidence, purpose, luck, good fortune, abundance, opportunity, personal growth, soothes anxiety, optimism, intelletual development, learning"
    },
    {
        name:"Bloodstone",
        src: "img/bloodstone.jpg",
        alt: "Bloodstone",
        chakra:"Root, Heart",
        color:"Green, Red",
        properties:"vitality, energy, courage, self-esteem, protection, realignment, health"
    },
    {
        name:"Carnelian",
        src: "img/carnelian.jpg",
        alt: "Carnelian",
        chakra:"Root, Sacral, Solar Plexus",
        color:"Orange",
        properties:"creativity, confidence, passion, empowerment, vitality, motivation, concentration"
    },
    {
        name:"Citrine",
        src: "img/citrine.jpg",
        alt: "Citrine",
        chakra:"Solar Plexus",
        color:"Yellow, Orange",
        properties:"happiness, joy, light, positivity, abundance, confidence, strength, self-esteem"
    },
    {
        name:"Clear Quartz",
        src: "img/clear-quartz.jpg",
        alt: "Clear Quartz",
        chakra:"Crown",
        color:"Clear",
        properties:"manifestation, clarity, alignment with your highest potential, energy regulation, thoughts & energy amplification, healing, higher vibration, stay true to your goals"
    },
    {
        name:"Ruby Corundum",
        src: "img/corundum-r.jpg",
        alt: "Ruby Corundum",
        chakra:"Root",
        color:"Red",
        properties:"sensual pleasures, desire, passion, energy, commitment"
    },
    {
        name:"Sapphire Corundum",
        src: "img/corundum-s.jpg",
        alt: "Sapphire Corundum",
        chakra:"Third Eye",
        color:"Blue",
        properties:"wisdom, focus, calming, concentration, prosperity, serenity, independence"
    },
    {
        name:"Diamond",
        src: "img/diamond.jpg",
        alt: "Diamond",
        chakra:"Crown",
        color:"Clear, Multi-colored",
        properties:"strength, love, health, invincibility, manifestation"
    },
    {
        name:"Fluorite",
        src: "img/fluorite.jpg",
        alt: "Fluorite",
        chakra:"Heart, Throat, Third Eye",
        color:"Purple, Green, Blue, Multi-colored",
        properties:"cleanse the mind body & spirit, deep concentration, memory retention, creativity, dispels negative thoughts, focus on the present, clear the mind of distractions, intellectual pursuits, help with decisions"
    },
    {
        name:"Garnet",
        src: "img/garnet.jpg",
        alt: "Garnet",
        chakra:"Root, Heart",
        color:"Red",
        properties:"energy, passion, health, vitality, regenerative, commitment, hope, balance"
    },
    {
        name:"Howlite",
        src: "img/howlite.jpg",
        alt: "Howlite",
        chakra:"Crown, All",
        color:"White, Grey",
        properties:"calming, awareness, balance, anxiety-reducing, stress-relief, enjoyment, rest"
    },
    {
        name:"Jade",
        src: "img/jade.jpg",
        alt: "Jade",
        chakra:"Heart",
        color:"Green",
        properties:"prosperity, harmony, purity, luck, abundance, well-being"
    },
    {
        name:"Red Jasper",
        src: "img/jasper.jpg",
        alt: "Red Jasper",
        chakra:"Root",
        color:"Red",
        properties:"grounding, patience, persistence, stability, protection, balance, Earth energy"
    },
    {
        name:"Blue Kyanite",
        src: "img/kyanite.jpg",
        alt: "Blue Kyanite",
        chakra:"Throat",
        color:"Blue",
        properties:"communication with pets, self-expression, dreams, realignment, balance"
    },
    {
        name:"Labradorite",
        src: "img/labradorite.jpg",
        alt: "Labradorite",
        chakra:"Third Eye",
        color:"Blue, Multi-colored",
        properties:"awareness, illumination, cosmic destiny, curiosity, spiritual path, deep sleep"
    },
    {
        name:"Lapis Lazuli",
        src: "img/lapis-lazuli.jpg",
        alt: "Lapis Lazuli",
        chakra:"Third Eye, Throat",
        color:"Blue, Gold",
        properties:"inner truth, intuition, inspiration, past lives exploration, empowerment, clairvoyance, wisdom, good judgment, intellectual ability, desire for knowledge, understanding, memory retention"
    },
    {
        name:"Lepidolite",
        src: "img/lepidolite.jpg",
        alt: "Lepidolite",
        chakra:"Third Eye, Heart",
        color:"Purple",
        properties:"stress relief, emotional balance, transformation, peace, sweet dreams, sleep-aid"
    },
    {
        name:"Malachite",
        src: "img/malachite.jpg",
        alt: "Malachite",
        chakra:"Heart",
        color:"Green",
        properties:"transformation, openness, abundance, balance, growth, manifestation, love"
    },
    {
        name:"Mookaite",
        src: "img/mookaite.jpg",
        alt: "Mookaite",
        chakra:"Root",
        color:"Brown, Red",
        properties:"grounding, awareness, personal power, adventure, passion, exploration"
    },
    {
        name:"Moonstone",
        src: "img/moonstone.jpg",
        alt: "Moonstone",
        chakra:"Sacral, Third Eye, Crown",
        color:"White, Multi-colored",
        properties:"intuition, inspiration, new beginnings, awareness, growth, peace, calm, anxiety-reducing, clarity, emotional-balance"
    },
    {
        name:"Moss Agate",
        src: "img/moss-agate.jpg",
        alt: "Moss Agate",
        chakra:"Heart",
        color:"Green",
        properties:"growth, fresh start, abundance, nature, wealth, prosperity, peace, stability"
    },
    {
        name:"Black Obsidian",
        src: "img/obsidian.jpg",
        alt: "Black Obsidian",
        chakra:"Root",
        color:"Black",
        properties:"self-reflection, protection, acceptance, grounding, stability, decision-making"
    },
    {
        name:"Black Onyx",
        src: "img/onyx.jpg",
        alt: "Black Onyx",
        chakra:"Root",
        color:"Black",
        properties:"protection, release, calm, decision-making ability, confidence, trauma healing"
    },
    {
        name:"Opal",
        src: "img/opal.jpg",
        alt: "Opal",
        chakra:"All",
        color:"Multi-colored",
        properties:"optimism, self-worth, wealth, generosity, love, abundance, calm, security, stress-relief, cleansing"
    },
    {
        name:"Pearl",
        src: "img/pearl.jpg",
        alt: "Pearl",
        chakra:"Crown",
        color:"Clear, White",
        properties:"emotional balance, sincerity, purity, integrity, memory, self-confidence, luck"
    },
    {
        name:"Peridot",
        src: "img/peridot.jpg",
        alt: "Peridot",
        chakra:"Heart, Solar Plexus",
        color:"Green",
        properties:"release, protection, growth, compassion, love, harmony, prosperity"
    },
    {
        name:"Petrified Wood",
        src: "img/petrified.jpg",
        alt: "Petrified Wood",
        chakra:"Root",
        color:"Brown",
        properties:"grounding, transformation, heal ancestral lines, steady nerves, stability, peace"
    },
    {
        name:"Pyrite",
        src: "img/pyrite.jpg",
        alt: "Pyrite",
        chakra:"All",
        color:"Gold",
        properties:"prosperity, protection, luck, wealth, blocks negativity, strengthens mind"
    },
    {
        name: "Rose Quartz",
        src: "img/rose-quartz.jpg",
        alt: "Rose Quartz",
        chakra:"Heart",
        color:"Pink",
        properties:"unconditional love, self-love, forgiveness, compassion, romance, gratitude"
    },
    {
        name: "Ruby Fuchsite",
        src: "img/ruby-fuchsite.jpg",
        alt: "Ruby Fuchsite",
        chakra:"Heart, Third Eye, Crown",
        color:"Green, Red, Multi-colored",
        properties:"intuition, love for humanity, unconditional love, converts negative energy into positive energy, awareness of individuality, protection, detoxification, problem-solving, balance, psychic awareness"
    },
    {
        name: "Selenite",
        src: "img/selenite.jpg",
        alt: "Selenite",
        chakra:"Crown, Third Eye",
        color:"Clear",
        properties:"cleansing, charging, light, protection, neutralizing"
    },
    {
        name: "Smoky Quartz",
        src: "img/smoky-quartz.jpg",
        alt: "Smoky Quartz",
        chakra:"Root, Sacral",
        color:"Brown, Grey, Clear",
        properties:"grounding, detoxifying, stabilizing, overcoming negative emotions, release"
    },
    {
        name: "Snowflake Obsidian",
        src: "img/snowflake.jpg",
        alt: "Snowflake Obsidian",
        chakra:"Root, All",
        color:"Black, Grey",
        properties:"balance, centering, support, detoxifying, healing, purity, positivity, cleansing"
    },
    {
        name: "Sodalite",
        src: "img/sodalite.jpg",
        alt: "Sodalite",
        chakra:"Throat, Third Eye",
        color:"Blue, White",
        properties:"creativity, spiritual awareness, inspiration, expression, intuition, focus"
    },
    {
        name: "Tiger's Eye",
        src: "img/tiger.jpg",
        alt: "Tiger's Eye",
        chakra:"Solar Plexus",
        color:"Gold, Brown",
        properties:"courage, dispels fears, grounding, centering, self-confidence, inner-strength"
    },
    {
        name: "Titanium Aura Quartz",
        src: "img/titanium-aura.jpg",
        alt: "Titanium Aura Quartz",
        chakra:"Root, Crown, Third Eye",
        color:"Rainbow, Multi-colored",
        properties:"energy, grounding, centering, harmony, peace, vitality, balancing, cleansing, humor, joy, high energy"
    },
    {
        name: "Turquoise",
        src: "img/turquoise.jpg",
        alt: "Turquoise",
        chakra:"Throat",
        color:"Green, Blue",
        properties:"health, protection, wisdom, honesty, higher-self aligning, purification, air travel"
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
    pickGems.classList.add("hide");
    gemName.innerText = randomGem.name;
    gemImg.src = randomGem.src;
    gemImg.alt = randomGem.alt;
    gemChakra.innerText = randomGem.chakra;
    gemColor.innerText = randomGem.color;
    gemProperties.innerText = randomGem.properties;
    displayGems.classList.remove("hide");
    resetGems.classList.remove("hide");
    pickBtn.classList.add("hide");
    advanced.classList.add("hide");
};


resetBtn.addEventListener("click", reloadBtn);

function reloadBtn() {
    location.reload();
};

healingSelector.addEventListener("change", advancedShow);

function advancedShow() {
    advanced.classList.remove("hide");
    pickBtn.classList.remove("hide");
}

pickBtn.addEventListener("click", gemSelect);

function gemSelect() {
    selectedHealing = healingSelector.value;
    selectedChakra = chakraSelector.value;
    selectedColor = colorSelector.value;
    for (let i = 0; i < gemsArray.length; i++) {
        if (gemsArray[i].properties.includes(selectedHealing) && gemsArray[i].chakra.includes(selectedChakra) && gemsArray[i].color.includes(selectedColor)) {
            let clone = displayGems.cloneNode(true);
            displayGems.after(clone);
            gemName.innerText = gemsArray[i].name;
            gemImg.src = gemsArray[i].src;
            gemImg.alt = gemsArray[i].alt;
            gemChakra.innerText = gemsArray[i].chakra;
            gemColor.innerText = gemsArray[i].color;
            gemProperties.innerText = gemsArray[i].properties;
            displayGems.classList.remove("hide");
            resetGems.classList.remove("hide");
            intro.classList.add("hide");
            pickGems.classList.add("hide");
            pickBtn.classList.add("hide");
            advanced.classList.add("hide");
        } else {
            notMatch.classList.remove("hide");
        }
    }
};

chakraSelector.addEventListener("change", matchQuery);
colorSelector.addEventListener("change", matchQuery);

function matchQuery() {
    notMatch.classList.add("hide");
};
// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const chooseNoun1 = document.querySelector("#chooseNoun1");
const chooseVerb = document.querySelector("#chooseVerb");
const chooseAdjective = document.querySelector("#chooseAdjective");
const chooseNoun2 = document.querySelector("#chooseNoun2");
const chooseSetting = document.querySelector("#chooseSetting");
// const story = document.querySelector("#story");

// Constants for final buttons and p tags
const showStory = document.querySelector("#playback");
const randomStory = document.querySelector("#random");

// Variables for pre-defined arrays
var noun1Array = ["Turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed with"];
var adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    chooseNoun1.textContent = noun1Array[noun1Count];
    // if-else to change count setting
    if (noun1Count < noun1Array.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
}

function verb_on_click() {
    chooseVerb.textContent = verbArray[verbCount];
    if (verbCount < verbArray.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
}

function adjective_on_click() {
    chooseAdjective.textContent = adjectiveArray[adjectiveCount];
    if (adjectiveCount < adjectiveArray.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
}

function noun2_on_click() {
    chooseNoun2.textContent = noun2Array[noun2Count];
    if (noun2Count < noun2Array.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
}

function setting_on_click() {
    chooseSetting.textContent = settingArray[settingCount];
    if (settingCount < settingArray.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${chooseNoun1.textContent} ${chooseVerb.textContent} ${chooseAdjective.textContent} ${chooseNoun2.textContent} ${chooseSetting.textContent}`;
    document.getElementById('story').textContent = story; 
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1 = noun1Array[Math.floor(Math.random() * noun1Array.length)];
    const randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
    const randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    const randomNoun2 = noun2Array[Math.floor(Math.random() * noun2Array.length)];
    const randomSetting = settingArray[Math.floor(Math.random() * settingArray.length)];

    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    document.getElementById('story').textContent = randomStory; // Display the random story in the #story paragraph
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener('click', noun1_on_click);
verb.addEventListener('click', verb_on_click);
adjective.addEventListener('click', adjective_on_click);
noun2.addEventListener('click', noun2_on_click);
setting.addEventListener('click', setting_on_click);
showStory.addEventListener('click', playback_on_click);
randomStory.addEventListener('click', random_on_click);
const mongoose = require("mongoose");
require('dotenv').config({ "path": "../.env" });

const DontMiss = require('../model/DontMiss.model.js');
const Entertainment = require('../model/Entertainment.model.js');
const Sport = require('../model/Sport.model.js');
const LifeStyle = require('../model/LifeStyle.model.js');
const Ad = require('../model/Ad.model.js');
const Video = require('../model/Video.model.js');
const Recent = require('../model/Recent.model.js');


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dontMiss = [
    { imageUrl: "recent_1.jpg",
     author: 'Marcel Karall',
     title: 'Penn`s Expanding Political Gears', 
     description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", 
     link: "https://karall.dev",
     tags: [
        "Political"
     ] },
    { imageUrl: 'recent_2.jpg', 
     author: 'Marcel Karall',
     title: 'Things To Look For In Financial Trading Platform', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Financial"
     ] },
    { imageUrl: "recent_3.jpg",
     author: 'Marcel Karall', 
     title: 'Success Is Not A Good Teacher Failure Makes You Humble', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "Financial"
     ] },
    { imageUrl: 'recent_4.jpg', 
     author: 'Marcel Karall',
     title: 'Gluten Free Almond Cake with Berries', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Recipes"
     ] },
     { imageUrl: "recent_1.jpg",
     author: 'Marcel Karall',
     title: 'The Art Of Racing With Speed Motor GP', 
     description: "Will AI replace your job?", 
     link: "/",
     tags: [
        "Sports"
     ] },

];


const entertainment = [
    { imageUrl: "entertainment_1.webp",
     author: 'Marcel Karall',
     title: 'Amanda Seyfried became "really obsessed" with ghost stories', 
     description: "Hollywood actress Amanda Seyfried has recalled the time when she became obsessed with ghost stories", 
     link: "https://karall.dev",
     tags: [
        "Hollywood"
     ] },
    { imageUrl: 'recent_2.jpg', 
     author: 'Marcel Karall',
     title: 'Irrfan Khan`s Last Film "The Songs Of Scorpions" To Release In 2024', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Bollywood"
     ] },
    { imageUrl: "recent_3.jpg",
     author: 'Marcel Karall', 
     title: 'Apee Karim blessed with a daughter', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "Entertainment"
     ] },
];


const sport = [
    { imageUrl: "sport_1.jpg",
     author: 'Marcel Karall',
     title: 'Solskjaer dismisses Klopp comments on Man Utd penalty record', 
     description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", 
     link: "https://karall.dev",
     tags: [
        "Cricket"
     ] },
    { imageUrl: 'sport_2.jpg', 
     author: 'Marcel Karall',
     title: 'South Africa hammer injury-hit Sri Lanka Player', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Sports"
     ] },
    { imageUrl: "sport_3.webp",
     author: 'Marcel Karall', 
     title: 'Southee-lead New Zealand have Pakistan on the ropes', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "Football"
     ] },
    { imageUrl: 'sport_4.jpg', 
     author: 'Marcel Karall',
     title: 'The only thing that overcomes hard luck is hard work', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Sports"
     ] },
     { imageUrl: "sport_5.jpeg",
     author: 'Marcel Karall',
     title: 'Rahane-led India bury ghosts of Adelaide at Melbourne', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "Sports"
     ] },

];

const lifeStyle = [
    { imageUrl: "lifestyle_1.jpg",
    author: 'Marcel Karall',
    title: 'Institutional Delivery Vital For Reducing Maternal And Neonatal Deaths', 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", 
    link: "https://karall.dev",
    tags: [
        "Health & Fitness"
    ] },
   { imageUrl: 'lifestyle_2.jpg', 
    author: 'Marcel Karall',
    title: 'Being Self-Controlled Child May Lead To Healthier Middle-Age', 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", 
    link: "https://karall.dev",
    tags: [
        "Health & Fitness"
    ] },
    { imageUrl: "lifestyle_3.webp",
     author: 'Marcel Karall',
     title: 'Best things you can do on a solo mountain climb', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "Sports"
     ] },
    { imageUrl: 'lifestyle_4.jpg', 
     author: 'Marcel Karall',
     title: 'How to use basic design principles in your home', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "LifeStyle"
     ] },
    { imageUrl: "lifestyle_6.jpg",
     author: 'Marcel Karall', 
     title: 'Creative decorating with houseplants', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "LifeStyle"
     ] },
    { imageUrl: 'lifestyle_5.jpg', 
     author: 'Marcel Karall',
     title: 'How to burn calories with pleasant activities', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Health & Fitness"
     ] },

];

const ad = [
    { imageUrl: "adBanner.jpg",
     author: 'Marcel Karall',
     title: 'Best Selling BLOG and MAGAZINE', 
     description: "Experience the change!", 
     link: "https://karall.dev",
     tags: [
        "Ad"
     ] },

];

const videos = [
    { imageUrl: "video_1.jpg",
     videoUrl: "https://karall.dev",
     author: 'Marcel Karall',
     title: 'Play This Game For Free on Epic Store This Weekend', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "Esport"
     ] },
    { imageUrl: 'video_2.jpg', 
     videoUrl: "https://karall.dev",
     author: 'Marcel Karall',
     title: 'At value focused Hotels, the free Breakfast Gets Bigger', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Esport"
     ] },
    { imageUrl: "video_3.jpg",
     videoUrl: "https://karall.dev",
     author: 'Marcel Karall', 
     title: 'Failure is the condiment that gives success its flavor', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "Esport"
     ] },
    { imageUrl: 'video_4.jpg', 
     videoUrl: "https://karall.dev",
     author: 'Marcel Karall',
     title: 'Les nouveaux maillots du Real Madrid pour la saison', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Esport"
     ] },

];


const recent = [
    { imageUrl: "recent_1.jpg",
     author: 'Marcel Karall',
     title: 'After All Is Said And Done, More Is Done', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "AI",
        "Research",
        "Cyberpunk"
     ] },
    { imageUrl: 'recent_2.jpg', 
     author: 'Marcel Karall',
     title: 'They Are Back!', 
     description: "How I made it without School!", 
     link: "https://karall.dev",
     tags: [
        "Skill",
        "Design",
        "Cyberpunk"
     ] },
    { imageUrl: "recent_3.jpg",
     author: 'Marcel Karall', 
     title: 'More Money For Uber Drivers!', 
     description: "Will AI replace your job?", 
     link: "https://karall.dev",
     tags: [
        "AI",
        "Research",
        "Cyberpunk"
     ] },
    { imageUrl: 'recent_4.jpg', 
     author: 'Marcel Karall',
     title: 'Tourism In Dubai Is Booming By International Tourist', 
     description: "How I made it without School!", 
     link: "/",
     tags: [
        "Skill",
        "Design",
        "Cyberpunk"
     ] },

];





const populateDontMiss = async () => {
    await DontMiss.deleteMany({});

    await DontMiss.insertMany(dontMiss)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateEntertainment = async () => {
    await Entertainment.deleteMany({});

    await Entertainment.insertMany(entertainment)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateSport = async () => {
    await Sport.deleteMany({});

    await Sport.insertMany(sport)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateLifeStyle = async () => {
    await LifeStyle.deleteMany({});

    await LifeStyle.insertMany(lifeStyle)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateAd = async () => {
    await Ad.deleteMany({});

    await Ad.insertMany(ad)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateVideo = async () => {
    await Video.deleteMany({});

    await Video.insertMany(videos)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

const populateRecent = async () => {
    await Recent.deleteMany({});

    await Recent.insertMany(recent)
        .then(res => console.log(res))
        .catch(err => console.log(err));    
}

populateRecent();
populateVideo();
populateAd();
populateLifeStyle();
populateSport();
populateEntertainment();
populateDontMiss();



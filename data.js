/* ================================================================
   DATA.JS — YOUR PORTFOLIO CONTENT FILE
   ================================================================
   
   ╔══════════════════════════════════════════════════════════════╗
   ║              HOW TO USE THIS FILE — README                  ║
   ╚══════════════════════════════════════════════════════════════╝

   This file controls ALL the content in your portfolio.
   You never need to touch index.html or script.js for content.
   Just edit the values in this file.

   ────────────────────────────────────────────────────────────────
   📝 HOW TO EDIT YOUR PERSONAL INFO
   ────────────────────────────────────────────────────────────────
   → Scroll to PERSONAL_INFO below
   → Change name, title, intro, about text, and stats

   ────────────────────────────────────────────────────────────────
   🔗 HOW TO EDIT SOCIAL / CONTACT LINKS
   ────────────────────────────────────────────────────────────────
   → Scroll to SOCIAL_LINKS below
   → Replace the placeholder URLs/values with your real ones

   ────────────────────────────────────────────────────────────────
   🎨 HOW TO ADD A NEW GRAPHIC DESIGN PROJECT
   ────────────────────────────────────────────────────────────────
   1. Add a new folder: assets/graphic/projectX/
   2. Put your cover image inside: cover.jpg (or .png)
   3. Put gallery images: 1.jpg, 2.jpg, 3.jpg ...
   4. Copy the template below and add it to the PROJECTS array
   5. Set category: "graphic"
   6. Fill in all the fields (title, description, tools, etc.)

   ────────────────────────────────────────────────────────────────
   📊 HOW TO ADD A NEW DATA ANALYSIS PROJECT
   ────────────────────────────────────────────────────────────────
   1. Add a new folder: assets/data/projectX/
   2. Put your dashboard screenshot inside: cover.jpg (or .png)
   3. Put more screenshots: 1.jpg, 2.jpg ...
   4. Copy the template below and add it to the PROJECTS array
   5. Set category: "data"
   6. Fill in all the fields (title, problemStatement, insights, etc.)

   ────────────────────────────────────────────────────────────────
   🖼️ WHERE TO PUT IMAGES
   ────────────────────────────────────────────────────────────────
   Recommended folder structure:
   
   portfolio/
   ├── index.html
   ├── style.css
   ├── data.js
   ├── script.js
   └── assets/
       ├── your-photo.jpg          ← Your personal photo
       ├── graphic/
       │   ├── project1/
       │   │   ├── cover.jpg       ← Card thumbnail image
       │   │   ├── 1.jpg           ← Gallery image
       │   │   └── 2.jpg
       │   └── project2/
       │       └── cover.jpg
       └── data/
           ├── project1/
           │   ├── cover.jpg
           │   └── 1.jpg
           └── project2/
               └── cover.jpg

   ────────────────────────────────────────────────────────────────
   💬 HOW TO CHANGE CONTACT LINKS
   ────────────────────────────────────────────────────────────────
   Scroll to SOCIAL_LINKS below. Change each "url" to your real:
   - Facebook profile URL
   - WhatsApp link (format: https://wa.me/YOUR_PHONE_NUMBER)
   - Instagram profile URL
   - LinkedIn profile URL
   - GitHub profile URL
   - Email address

   ────────────────────────────────────────────────────────────────
   📐 PROJECT TEMPLATE (copy & paste to add new projects)
   ────────────────────────────────────────────────────────────────

   GRAPHIC DESIGN PROJECT TEMPLATE:
   {
     id: "brand-unique-id",        ← Must be unique across all projects
     category: "graphic",
     title: "Project Title",
     shortDescription: "One line summary shown on card",
     fullDescription: "Full paragraph description shown in modal popup",
     tools: ["Photoshop", "Illustrator", "Figma"],
     cover: "assets/graphic/project1/cover.jpg",
     gallery: [
       "assets/graphic/project1/1.jpg",
       "assets/graphic/project1/2.jpg",
     ],
     brandOverview: "What the brand is about and the creative direction",
     colors: ["#000000", "#ffffff", "#ff6b6b"],
     typography: ["Poppins", "Montserrat"],
   },

   DATA ANALYSIS PROJECT TEMPLATE:
   {
     id: "data-unique-id",         ← Must be unique across all projects
     category: "data",
     title: "Project Title",
     shortDescription: "One line summary shown on card",
     fullDescription: "Full paragraph description shown in modal popup",
     tools: ["Excel", "Power BI", "SQL", "Python"],
     cover: "assets/data/project1/cover.jpg",
     gallery: [
       "assets/data/project1/1.jpg",
       "assets/data/project1/2.jpg",
     ],
     problemStatement: "What problem this analysis was trying to solve",
     datasetInfo: "Where the data came from, how many rows, what fields, etc.",
     insights: [
       "Key finding or insight number 1",
       "Key finding or insight number 2",
       "Key finding or insight number 3",
     ],
     results: "What was the final outcome or impact of this analysis",
   },

================================================================ */


/* ================================================================
   SECTION 1: PERSONAL INFORMATION
   → EDIT YOUR NAME, TITLE, AND BIO HERE
================================================================ */
const PERSONAL_INFO = {

  // EDIT YOUR NAME HERE ↓
  name: "Yahia Mohamed",

  // EDIT YOUR INITIALS HERE (shown in navbar logo) ↓
  initials: "Yahia Mohamed — Portfolio ✦",

  // EDIT YOUR PROFESSIONAL TITLE HERE ↓
  title: "Data Analyst & Graphic Designer",

  // EDIT YOUR HERO INTRO TEXT HERE (shown under your name in hero section) ↓
  intro: "Where data meets creative design — Based in Mansoura  Working globally.",

  // EDIT YOUR AVAILABILITY BADGE TEXT HERE ↓
  availabilityText: "Available for work",

  // EDIT YOUR ABOUT SECTION TITLE HERE ↓
  aboutTitle: "Creative Mind, Analytical Thinking.",

  // EDIT YOUR ABOUT PARAGRAPHS HERE ↓
  // Each string becomes a separate paragraph
  aboutParagraphs: [
    "I'm a multidisciplinary professional working at the intersection of data and design. I combine analytical thinking with creative vision to transform complex information into clear insights and impactful visuals.",
"From analyzing datasets and building dashboards to crafting engaging visual designs, I approach every project with precision, creativity, and a strong attention to detail.",
"I believe great results happen when data drives decisions and design brings ideas to life in a way that people can truly understand and connect with."
  ],

  // EDIT YOUR ROLE CARD DESCRIPTIONS HERE ↓
  roleDataDesc: "Transform raw data into meaningful insights that support smarter decisions and uncover opportunities for growth",
  roleDesignDesc: "Crafting impactful visuals that help brands communicate their message and stand out.",

  // EDIT YOUR ABOUT STATS HERE ↓
  stats: [
    { number: "Mansoura",   label: "Location" },
    { number: "22",   label: "AGE" },
    { number: "3",  label: "Years Experience" },
    { number: "20", label: "Projects Done" },
  ],

  // EDIT YOUR CONTACT SECTION HEADING HERE ↓
  contactTitle: "Let's build something together.",
  contactSubtitle: "Whether you need a dashboard, a brand, or both — I'm just a message away.",

  // EDIT YOUR FOOTER COPYRIGHT TEXT HERE ↓
  footerCopy: `© ${new Date().getFullYear()} YM. All rights reserved.`,
};


/* ================================================================
   SECTION 2: SOCIAL MEDIA & CONTACT LINKS
   → EDIT SOCIAL LINKS HERE
   → Replace each placeholder URL with your real profile link
================================================================ */
const SOCIAL_LINKS = [
  {
    platform: "email",
    label: "Email",
    value: "yahiam7md03@gmail.com",          // ← EDIT YOUR EMAIL HERE
    url: "mailto:yahiam7md03@gmail.com",      // ← EDIT YOUR EMAIL HERE
    icon: "ph-envelope",
    color: "#ea4335",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/yahiam7md03",     // ← EDIT YOUR LINKEDIN USERNAME HERE
    url: "https://www.linkedin.com/in/yahiam7md03/", // ← EDIT YOUR LINKEDIN URL HERE
    icon: "ph-linkedin-logo",
    color: "#0077b5",
  },
  {
    platform: "github",
    label: "GitHub",
    value: "github.com/YahiaM7md",          // ← EDIT YOUR GITHUB USERNAME HERE
    url: "https://github.com/YahiaM7md",    // ← EDIT YOUR GITHUB URL HERE
    icon: "ph-github-logo",
    color: "#ffffff",
  },
  {
    platform: "instagram",
    label: "Instagram",
    value: "@Yahia_M7md03",            // ← EDIT YOUR INSTAGRAM HANDLE HERE
    url: "https://instagram.com/Yahia_M7md03", // ← EDIT YOUR INSTAGRAM URL HERE
    icon: "ph-instagram-logo",
    color: "#c13584",
  },
  {
    platform: "facebook",
    label: "Facebook",
    value: "Yahia Mohamed",                    // ← EDIT YOUR FACEBOOK NAME HERE
    url: "https://www.facebook.com/yahia.mohamed.448187/", // ← EDIT YOUR FACEBOOK URL HERE
    icon: "ph-facebook-logo",
    color: "#4267B2",
  },
  {
    platform: "whatsapp",
    label: "WhatsApp",
    value: "+20 1030 580 650",              // ← EDIT YOUR WHATSAPP NUMBER HERE
    url: "https://wa.me/201030580650",      // ← EDIT: replace with your number (no spaces or +)
    icon: "ph-whatsapp-logo",
    color: "#25D366",
  },
];


/* ================================================================
   SECTION 3: SKILLS
   → EDIT YOUR SKILLS HERE
   → level: number from 0–100 (controls the bar fill animation)
================================================================ */
const SKILLS = {
  // EDIT DATA ANALYSIS SKILLS HERE ↓
  data: [
    { name: "Power BI",             level: 95 },
    { name: "Data Visualization",   level: 95 },
    { name: "SQL",                  level: 80 },
    { name: "Python ",              level: 80 },
    { name: "Microsoft Excel",      level: 70 },
    { name: "Statistical Analysis", level: 70 },
    { name: "Tableau",              level: 50 },
  ],

  // EDIT GRAPHIC DESIGN SKILLS HERE ↓
  design: [
    { name: "Adobe Photoshop",      level: 95 },
    { name: "Social Media Design",  level: 95 },
    { name: "Brand Identity",       level: 85 },
    { name: "Adobe Illustrator",    level: 80 },
    { name: "Typography",           level: 85 },
    { name: "Presentation Design",  level: 80 },
    { name: "Figma",                level: 50 },
  ],
};


/* ================================================================
   SECTION 4: SERVICES
   → EDIT YOUR SERVICES HERE
   → icon: any Phosphor icon class name (https://phosphoricons.com)
================================================================ */
const SERVICES = [
  // EDIT SERVICES HERE ↓
  {
    icon: "ph-chart-line-up",
    title: "Data Analysis",
    description: "Turning messy datasets into clean, actionable insights. From raw CSV to full business intelligence reports.",
  },
  {
    icon: "ph-monitor",
    title: "Dashboard Design",
    description: "Building interactive, real-time dashboards in Power BI, Excel, and Tableau that make data easy to understand.",
  },
  {
    icon: "ph-seal",
    title: "Brand Identity",
    description: "Full brand identity packages — logo, color palette, typography, stationery, and brand guidelines.",
  },
  {
    icon: "ph-device-mobile",
    title: "Social Media Design",
    description: "Eye-catching social media visuals, posters, post templates, and content graphics that stop the scroll.",
  },
  {
    icon: "ph-presentation-chart",
    title: "Presentation Design",
    description: "Transforming boring slides into premium, narrative-driven presentations that impress any audience.",
  },
  {
    icon: "ph-pen-nib",
    title: "Graphic Design",
    description: "Print and digital design — brochures, posters, packaging, ads, and all visual communication materials.",
  },
];


/* ================================================================
   SECTION 5: PROJECTS
   → ADD NEW GRAPHIC PROJECT HERE (category: "graphic")
   → ADD NEW DATA PROJECT HERE (category: "data")
   
   IMPORTANT:
   - Each project needs a unique "id" field
   - "cover" should point to your image file path
   - "gallery" is an array of image paths
   - If you don't have images yet, leave them as empty strings ""
     and a placeholder will be shown automatically
================================================================ */
const PROJECTS = [

  /* ──────────────────────────────────────────────────────────────
     GRAPHIC DESIGN PROJECTS
     ADD NEW GRAPHIC PROJECT HERE ↓
  ────────────────────────────────────────────────────────────── */
    {
    id: "Kemit Brand Identity",
    category: "graphic",
    title: "Kemit Brand Identity",
    shortDescription: "Kemit Fragrances is a luxury perfume brand identity project focused on elegant design, visual storytelling, and social media launch content.",
    fullDescription: "Kemit Fragrances is a luxury perfume brand project focused on building a clean and elegant visual identity. The project included logo design, color palette development, and social media promotional content to launch the first fragrance collection while maintaining a modern and premium brand aesthetic.",
    tools: ["Adobe Photoshop","Adobe Illustrator"],
    cover: "assets/graphic/project8/cover.png",
    gallery: ["assets/graphic/project8/1.png", "assets/graphic/project8/2.png", "assets/graphic/project8/3.png", "assets/graphic/project8/4.jpg", "assets/graphic/project8/5.png", "assets/graphic/project8/6.png", "assets/graphic/project8/7.png", "assets/graphic/project8/8.png", "assets/graphic/project8/9.png","assets/graphic/project8/10.png","assets/graphic/project8/11.png","assets/graphic/project8/12.png","assets/graphic/project8/13.png"],
    brandOverview: "Kemit Fragrances is a luxury-inspired perfume brand built around elegance, identity, and modern aesthetics. The brand aims to deliver distinctive scents paired with a clean, premium visual language that reflects confidence and sophistication.",
    colors: ["#99836E","#008080", "#6F7D5C", "#F5F5DC","#5C4A3E","#BDB76B"],
    typography: ["Playfair Display", "Poppins","Montserrat"],
  },

  {
    id: "K&L",
    category: "graphic",
    title: "K&L Store Designs ",
    shortDescription: "",
    fullDescription: "A complete brand identity project designs for K&L , a specialty glasses chain targeting young urban professionals. The brand needed to feel premium, minimal, and sophisticated while remaining approachable. ",
    tools: ["Adobe Illustrator", "Adobe Photoshop","Canva"],

    // PUT PROJECT COVER IMAGE PATH HERE ↓
    // Example: "assets/graphic/luxe-coffee/cover.jpg"
    cover: "assets/graphic/project1/cover.png",

    // PUT PROJECT GALLERY IMAGE PATHS HERE ↓
    // Example: ["assets/graphic/luxe-coffee/1.jpg", "assets/graphic/luxe-coffee/2.jpg"]
    gallery: ["assets/graphic/project1/1.jpg", "assets/graphic/project1/2.jpg", "assets/graphic/project1/3.jpg", "assets/graphic/project1/4.png", "assets/graphic/project1/5.png", "assets/graphic/project1/6.jpg", "assets/graphic/project1/7.jpg", "assets/graphic/project1/8.jpg", "assets/graphic/project1/9.jpg", "assets/graphic/project1/10.jpg", "assets/graphic/project1/11.png", "assets/graphic/project1/12.jpg", "assets/graphic/project1/13.jpg", "assets/graphic/project1/14.png", "assets/graphic/project1/15.png", "assets/graphic/project1/16.png", "assets/graphic/project1/17.png", "assets/graphic/project1/18.jpg","assets/graphic/project1/19.jpg","assets/graphic/project1/20.jpg"],

    // brandOverview: "poster design",
    // Color palette: add HEX codes of colors used in the project
    // colors: ["#1A1208", "#C8A96E", "#F5F0E8", "#2C1810"],

    // Fonts used in the project
    typography: ["Monterest", "Cairo"],
  },

    {
    id: "Spanish Cafe",
    category: "graphic",
    title: "Spanish Cafe Designs",
    // shortDescription: "Instagram & Facebook campaign for a fitness brand",
    fullDescription: "A complete social media design campaign for Pulse Fitness including post templates, story designs, highlight covers, ad creatives, and a content calendar. The system is fully editable and handed off to the in-house team as Figma templates.",
    tools: ["Adobe Photoshop"],
    cover: "assets/graphic/project4/cover.jpg",
    gallery: ["assets/graphic/project4/1.jpg", "assets/graphic/project4/2.jpg", "assets/graphic/project4/3.jpg", "assets/graphic/project4/4.jpg", "assets/graphic/project4/5.jpg", "assets/graphic/project4/6.jpg", "assets/graphic/project4/7.jpg", "assets/graphic/project4/8.jpg", "assets/graphic/project4/9.png", "assets/graphic/project4/10.jpg", "assets/graphic/project4/11.png", "assets/graphic/project4/12.png", "assets/graphic/project4/13.jpg", "assets/graphic/project4/14.jpg", "assets/graphic/project4/15.png"],
    brandOverview: "High energy, bold typography, and dynamic composition. The campaign uses a Green-and-yellow palette with aggressive diagonal layouts to communicate intensity and motivation.",
    // colors: ["#0A0A0A", "#FF4500", "#FFFFFF", "#1C1C1C"],
    // typography: ["Bebas Neue", "DM Sans"],
  },

{
    id: "hamed abdallah",
    category: "graphic",
    title: "Hamed Abdallah Store Designs ",
    shortDescription: "",
    fullDescription: "A complete brand identity project designs for Hamed Abdallah , a specialty glasses chain targeting young urban professionals. The brand needed to feel premium, minimal, and sophisticated while remaining approachable. ",
    tools: ["Adobe Illustrator", "Adobe Photoshop","Canva"],

    // PUT PROJECT COVER IMAGE PATH HERE ↓
    // Example: "assets/graphic/luxe-coffee/cover.jpg"
    cover: "assets/graphic/project2/cover.jpg",

    // PUT PROJECT GALLERY IMAGE PATHS HERE ↓
    // Example: ["assets/graphic/luxe-coffee/1.jpg", "assets/graphic/luxe-coffee/2.jpg"]
    gallery: ["assets/graphic/project2/1.jpg", "assets/graphic/project2/2.jpg", "assets/graphic/project2/3.png", "assets/graphic/project2/4.jpg", "assets/graphic/project2/5.png", "assets/graphic/project2/6.png", "assets/graphic/project2/7.jpg", "assets/graphic/project2/8.jpg", "assets/graphic/project2/9.png","assets/graphic/project2/10.png","assets/graphic/project2/11.png","assets/graphic/project2/12.png", "assets/graphic/project2/13.png","assets/graphic/project2/14.png","assets/graphic/project2/15.png","assets/graphic/project2/16.png","assets/graphic/project2/17.png","assets/graphic/project2/18.png","assets/graphic/project2/19.png","assets/graphic/project2/20.jpg","assets/graphic/project2/21.png","assets/graphic/project2/22.png"],

    // brandOverview: "poster design",
    // Color palette: add HEX codes of colors used in the project
    // colors: ["#1A1208", "#C8A96E", "#F5F0E8", "#2C1810"],

    // Fonts used in the project
    typography: ["Monterest", "Cairo"],
  },

  {
    id: "shelter",
    category: "graphic",
    title: "Shelter Restaurant Designs",
    shortDescription: "designs for a healthy food product line",
    // fullDescription: "Verdure is an organic food brand targeting health-conscious consumers. The packaging design needed to stand out on crowded supermarket shelves while communicating purity, nature, and authenticity. The final system covers 12 SKUs across 3 product lines with a consistent visual language.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    cover: "assets/graphic/project3/cover.png",
    gallery: ["assets/graphic/project3/1.png", "assets/graphic/project3/2.jpg", "assets/graphic/project3/3.jpg", "assets/graphic/project3/4.jpg", "assets/graphic/project3/5.png", "assets/graphic/project3/6.png", "assets/graphic/project3/7.png", "assets/graphic/project3/8.png", "assets/graphic/project3/9.png", "assets/graphic/project3/10.png", "assets/graphic/project3/11.png", "assets/graphic/project3/12.jpg", "assets/graphic/project3/13.png", "assets/graphic/project3/14.png", "assets/graphic/project3/15.jpg", "assets/graphic/project3/16.jpg", "assets/graphic/project3/17.jpg"],
    brandOverview: "Inspired by botanical illustration and editorial minimalism. Each product line has its own accent color within a cohesive system, making the full lineup instantly recognizable as a family.",
    // colors: ["#2D5016", "#8BC34A", "#F9F6F0", "#D4A853"],
    // typography: ["Playfair Display", "Nunito Sans"],
  },

  {
    id: "Asl Elshawerma Restaurant",
    category: "graphic",
    title: "Asl Elshawerma Restaurant Designs",
    // shortDescription: "Instagram & Facebook campaign for a fitness brand",
    // fullDescription: "A complete social media design campaign for Pulse Fitness including post templates, story designs, highlight covers, ad creatives, and a content calendar. The system is fully editable and handed off to the in-house team as Figma templates.",
    tools: ["Adobe Photoshop"],
    cover: "assets/graphic/project5/cover.jpg",
    gallery: ["assets/graphic/project5/1.jpg", "assets/graphic/project5/2.jpg", "assets/graphic/project5/3.png", "assets/graphic/project5/4.jpg", "assets/graphic/project5/5.jpg", "assets/graphic/project5/6.png", "assets/graphic/project5/7.jpg", "assets/graphic/project5/8.png", "assets/graphic/project5/9.png", "assets/graphic/project5/10.jpg", "assets/graphic/project5/11.jpg"],
    // brandOverview: "High energy, bold typography, and dynamic composition. The campaign uses a Green-and-yellow palette with aggressive diagonal layouts to communicate intensity and motivation.",
    // colors: ["#0A0A0A", "#FF4500", "#FFFFFF", "#1C1C1C"],
    // typography: ["Bebas Neue", "DM Sans"],
  },

  {
    id: "El-dar Logo Design",
    category: "graphic",
    title: "El-dar Logo Design",
    shortDescription: "Logo Design for Chicken Company in Saudi Arabia ",
    // fullDescription: "A complete social media design campaign for Pulse Fitness including post templates, story designs, highlight covers, ad creatives, and a content calendar. The system is fully editable and handed off to the in-house team as Figma templates.",
    tools: ["Adobe Photoshop","Adobe Illustrator"],
    cover: "assets/graphic/project6/cover.png",
    gallery: ["assets/graphic/project6/1.png", "assets/graphic/project6/2.jpg", "assets/graphic/project6/3.png", "assets/graphic/project6/4.jpg", "assets/graphic/project6/5.png", "assets/graphic/project6/6.jpg", "assets/graphic/project6/7.png", "assets/graphic/project6/8.png", "assets/graphic/project6/9.png"],
    // brandOverview: "High energy, bold typography, and dynamic composition. The campaign uses a Green-and-yellow palette with aggressive diagonal layouts to communicate intensity and motivation.",
    // colors: ["#0A0A0A", "#FF4500", "#FFFFFF", "#1C1C1C"],
    // typography: ["Bebas Neue", "DM Sans"],
  },

  {
    id: "Luminous Team",
    category: "graphic",
    title: "Luminous Team Designs",
    shortDescription: "Student Activity Team Designs for Mansoura University",
    fullDescription: "A complete social media design campaign for Pulse Fitness including post templates, story designs, highlight covers, ad creatives, and a content calendar. The system is fully editable and handed off to the in-house team as Figma templates.",
    tools: ["Adobe Photoshop","Adobe Illustrator"],
    cover: "assets/graphic/project7/cover.jpg",
    gallery: ["assets/graphic/project7/1.png", "assets/graphic/project7/2.png", "assets/graphic/project7/3.jpg", "assets/graphic/project7/4.jpg", "assets/graphic/project7/5.jpg", "assets/graphic/project7/6.jpg", "assets/graphic/project7/7.png", "assets/graphic/project7/8.png", "assets/graphic/project7/9.png","assets/graphic/project7/10.png","assets/graphic/project7/11.png"],
    // brandOverview: "High energy, bold typography, and dynamic composition. The campaign uses a Green-and-yellow palette with aggressive diagonal layouts to communicate intensity and motivation.",
    // colors: ["#0A0A0A", "#FF4500", "#FFFFFF", "#1C1C1C"],
    // typography: ["Bebas Neue", "DM Sans"],
  },

  /* ──────────────────────────────────────────────────────────────
     DATA ANALYSIS PROJECTS
     ADD NEW DATA PROJECT HERE ↓
  ────────────────────────────────────────────────────────────── */
{
    id: "Uber Analysis",
    category: "data",
    title: "Uber Data Analysis",
    shortDescription: "Cleaned and analyzed Uber trip data and built an interactive dashboard to explore ride patterns, peak demand times, and key trends that can help improve operational decisions.",
    fullDescription: "This project focuses on analyzing Uber ride data to understand ride demand, operational performance, and cancellation behavior.The dataset was cleaned and transformed, then an interactive dashboard was built to visualize key metrics such as total bookings, revenue, ride completion rate, and cancellation patterns.The dashboard provides insights into customer behavior, peak booking times, vehicle performance, and operational efficiency to support better business decisions.",
    tools: ["Power BI"],
    cover: "assets/data/project2/cover.jpg",
    gallery: ["assets/data/project2/0.png","assets/data/project2/1.jpg","assets/data/project2/2.jpg","assets/data/project2/3.jpg","assets/data/project2/4.jpg","assets/data/project2/5.jpg","assets/data/project2/6.jpg","assets/data/project2/7.jpg","assets/data/project2/8.png","assets/data/project2/9.png"],
    problemStatement: "Ride-hailing companies generate large amounts of trip data, but without proper analysis it is difficult to understand demand patterns, cancellations, and operational performance. This project analyzes Uber ride data to identify booking trends and improve service efficiency.",
    datasetInfo: "The dataset contains Uber ride transaction data including booking details, trip information, vehicle types, ride status, and cancellation reasons.Each record represents a ride request with multiple attributes related to the trip, driver, customer, and payment.",
    insights: [
      "1️⃣ Peak Demand: Most bookings occur between 5 PM and 7 PM, showing high evening demand for rides.",
      "2️⃣ Vehicle Preference: Bike rides have the highest booking volume, while Sedan rides generate higher revenue per trip.",
      "3️⃣ Driver Cancellations: Around 72% of cancellations are initiated by drivers, indicating a need to improve driver availability and acceptance.",
      "4️⃣ Customer Waiting Time: The average customer turnaround time (29 min) is much higher than the driver turnaround time (8.46 min), suggesting possible service delays.",
    ],
    results: "The analysis revealed key patterns in ride demand, vehicle performance, and cancellation behavior. These insights can help improve driver allocation, reduce cancellations, and enhance the overall customer experience.",
  },

{
    id: "Spotify Analysis",
    category: "data",
    title: "Spotify Data Analysis",
    shortDescription: "Cleaned and analyzed Sotify music streaming data and built an interactive dashboard to explore listening patterns, peak demand times, and key trends that can help improve operational decisions.",
    fullDescription: "This project analyzes Spotify streaming data using Power BI to explore song popularity, streaming trends, and audio features. I used Python to call a Spotify API to retrieve album images, stored them in Excel, and used HTML to display the images inside the dashboard. The dashboard interface was designed in Photoshop to match a Spotify-style layout.",
    tools: ["Power BI", "photoshop", "HTML", "Python"],
    cover: "assets/data/project3/cover.png",
    gallery: ["assets/data/project3/1.png","assets/data/project3/2.png","assets/data/project3/3.png"],
    problemStatement: "Music streaming platforms generate large amounts of data, but it is difficult to understand what makes songs popular without proper analysis. This project analyzes Spotify data to identify streaming trends and track characteristics.",
    datasetInfo: "The dataset contains Spotify track information including track name, artist, release date, total streams, and audio features such as danceability, energy, liveness, speechiness, and valence.",
    insights: [
      "1️⃣ Top Tracks: Songs like Blinding Lights dominate with billions of streams.",
      "2️⃣ Audio Features: Popular songs often have high energy and good danceability.",
      "3️⃣ Streaming Growth: Popular tracks increased significantly after 2015 with the rise of streaming platforms.",
      "4️⃣ Listener Preference: Balanced energy and positivity (valence) tends to attract more streams.",
    ],
    results: "The dashboard helps explore streaming trends, compare song performance, and understand the characteristics that contribute to successful tracks on Spotify.",
  },

  {
    id: "Sales Analysis",
    category: "data",
    title: "Sales Data Analysis",
    shortDescription: "Cleaned and analyzed Sales data to identify key trends, customer behavior patterns, and opportunities for business growth.",
    fullDescription: "This project was part of a LinkedIn data analysis challenge where a simple sales dataset in Excel was analyzed. I built a Power BI dashboard to explore product performance, regional sales, and daily revenue trends.",
    tools: ["Tableau", "Excel", "Photoshop"],
    cover: "assets/data/project4/cover.png",
    gallery: ["assets/data/project4/1.png","assets/data/project4/2.png","assets/data/project4/3.jpg","assets/data/project4/4.png"],
    problemStatement: "Businesses need to understand which products and regions generate the highest revenue. This project analyzes sales data to identify top-performing products, regional performance, and revenue trends.",
    datasetInfo: "The dataset contains basic sales information including product name, region, and revenue values for multiple transactions.",
    insights: [
      "1️⃣ Top Product: Product D generated the highest total revenue among all products.",
      "2️⃣ Top Region: Jeddah recorded the highest revenue compared to other regions.",
      "3️⃣ Best Selling Products: Products D, B, and A are the top three best-selling products.",
      "4️⃣ Daily Revenue Trend: Daily revenue fluctuates but shows several peak days where sales exceed 17K–19K.",
    ],
    results: "The dashboard highlights the best-performing products, top regions, and daily revenue patterns, helping businesses quickly understand sales performance and trends.",
  },
  
  {
    id: "Pizza Sales-Analysis",
    category: "data",
    title: "Pizza Sales-Analysis",
    shortDescription: "Multi-channel marketing performance analysis using SQL & Power BI cleaned the pizza sales dataset and created a dashboard to visualize sales trends and uncover insights that help improve business decisions.",
    fullDescription: "In this project, the pizza sales dataset was cleaned and analyzed, and an interactive dashboard was created to visualize key metrics and sales patterns. The analysis provides insights into customer preferences, top-selling pizzas, and revenue trends to help support better business decisions.",
    tools: ["SQL", "Power BI", "Google Sheets"],
    cover: "assets/data/project1/cover.png",
    gallery: ["assets/data/project1/1.png","assets/data/project1/2.png","assets/data/project1/3.png"],
    problemStatement: "The main challenge is to transform raw sales data into meaningful insights that help answer key business questions such as: Which pizzas sell the most? What are the peak ordering times? Which categories generate the highest revenue?",
    datasetInfo: "This dataset is used to analyze pizza sales performance, identify best-selling pizzas, understand customer preferences, and evaluate revenue trends across different pizza sizes and categories.",
    insights: [
      "Large and Medium pizzas generate the highest sales.",
      "Orders are higher on weekends, which shows people prefer to eat pizza more during weekends.",
      "The Classic category generated the highest number of orders compared to other pizza categories.",
      "Certain pizzas such as The Classic Deluxe Pizza and The Hawaiian Pizza were among the top-selling items.",
      "Revenue was strongly influenced by popular pizza types and larger pizza sizes.",
      "Sales showed clear peak ordering hours around lunch and evening times, suggesting that customers order pizza mainly during meal hours.",
    ],
    results: "The analysis of the pizza sales dataset revealed several key insights about sales performance, customer preferences, and ordering patterns.",
  },
  {
    id: "HR DATA Analysis",
    category: "data",
    title: "HR Data Analysis",
    shortDescription: "Multi-channel marketing performance analysis using SQL & Power BI cleaned the pizza sales dataset and created a dashboard to visualize sales trends and uncover insights that help improve business decisions.",
    fullDescription: "This project analyzes HR employee data using Excel to understand workforce trends such as employee retention, turnover, and headcount distribution. An interactive dashboard was built to visualize workforce performance across departments, job levels, demographics, and locations.",
    tools: ["SQL", "Excel"],
    cover: "assets/data/project5/cover.png",
    gallery: ["assets/data/project5/1.png","assets/data/project5/2.png","assets/data/project5/3.png"],
    problemStatement: "HR departments need clear insights about employee retention, turnover, and workforce distribution. This project analyzes HR data to identify trends that help organizations improve employee retention and workforce planning.",
    datasetInfo: "The dataset contains employee information including department, job level, salary, age, gender, education, location, and employment status. The data was used to analyze workforce structure and employee retention patterns.",
    insights: [
      "1️⃣ Retention Rate: Employee retention reached 83.62%, indicating a relatively stable workforce.",
      "2️⃣ Turnover Rate : The employee turnover rate is 37.66%, highlighting potential areas where employee satisfaction could be improved.",
      "3️⃣ Department Distribution: The Software department has the highest number of employees, while other departments have smaller workforce sizes.",
      "4️⃣ Work Location: Most employees work remotely compared to on-site, reflecting modern workplace flexibility trends.",
    ],
    results: "The dashboard helps HR teams monitor workforce performance, identify turnover patterns, and better understand employee demographics to support strategic HR decisions.",
  },

  // ← ADD A NEW GRAPHIC PROJECT HERE (copy template from the top of this file)

  // ← ADD A NEW DATA PROJECT HERE (copy template from the top of this file)
];


/* ================================================================
   SECTION 6: EXPERIENCE
   → ADD YOUR WORK EXPERIENCE HERE
   → Each entry appears as a timeline card
================================================================ */
const EXPERIENCE = [
  // EDIT YOUR EXPERIENCE HERE ↓
  // Copy and paste this block to add more entries
  // {
  //   title: "Freelance Graphic Designer",
  //   company: "Self-Employed",
  //   period: "2022 – Present",
  //   type: "work",                         // "work" or "part-time" or "freelance"
  //   description: "Designed brand identities, social media content, and visual assets for clients across food, retail, and lifestyle industries. Delivered 20+ projects including logos, packaging, and marketing materials.",
  //   tags: ["Brand Identity", "Photoshop", "Illustrator", "Social Media"],
  //   icon: "ph-pen-nib",
  // },
  // {
  //   title: "Data Analysis Intern",
  //   company: "Digital Company",
  //   period: "2023",
  //   type: "internship",
  //   description: "Analyzed sales data and built interactive dashboards in Power BI. Cleaned and transformed datasets using Excel and SQL, delivering weekly reports to management.",
  //   tags: ["Power BI", "Excel", "SQL", "Data Visualization"],
  //   icon: "ph-chart-bar",
  // },
];

/* ================================================================
   SECTION 7: TRAINING & COURSES
   → ADD YOUR COURSES AND CERTIFICATIONS HERE
================================================================ */
const TRAINING = [
  // EDIT YOUR TRAINING HERE ↓
  // Copy and paste this block to add more entries
  {
    title: "Business Intelligence Track – Information Technology Institute (ITI)",
    company: "Information Technology Institute (ITI)",
    period: "2025",
    type: "certificate",
    description: "Completed a Business Intelligence training program covering SQL, Power BI, Tableau, Excel, and data warehousing concepts for data analysis and business reporting.",
    tags: ["SQL", "Power BI", "Tableau", "Excel", "Data Warehouse"],
    icon: "ph-certificate",
  },
  {
  title: "AI Training – Huawei",
  company: "Huawei",
  period: "2024",
  type: "certificate",
  description: "Completed training in Artificial Intelligence fundamentals and practical AI applications including core concepts of machine learning and AI technologies.",
  tags: ["Artificial Intelligence", "Machine Learning", "AI Fundamentals"]
  },
  {
    title: "Adobe Photoshop & Illustrator Masterclass",
    company: "Online Platform",
    period: "2022",
    type: "course",
    description: "Advanced training in Adobe Creative Suite — photo manipulation, vector illustration, typography, and brand identity design.",
    tags: ["Photoshop", "Illustrator", "Typography", "Branding"],
    icon: "ph-paint-brush",
  },
  {
    title: "Python for Data Science",
    company: "DataCamp",
    period: "2023",
    type: "certificate",
    description: "Learned Python fundamentals for data science including NumPy, Pandas, Matplotlib, and Seaborn for data wrangling and exploratory data analysis.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    icon: "ph-code",
  },
  {
  title: "Arduino: From Beginner to Advanced",
  company: "Coursera",
  period: "2024",
  type: "Training",
  description: "Covered Arduino programming, working with sensors and microcontrollers, and building hardware-based smart systems and automation projects.",
  tags: ["Arduino", "Embedded Systems", "Sensors", "C++"]
 }
];

/* ================================================================
   DO NOT EDIT BELOW THIS LINE
   These exports make the data available to script.js
================================================================ */

// Make data available globally (no modules needed)
window.PORTFOLIO_DATA = {
  PERSONAL_INFO,
  SOCIAL_LINKS,
  SKILLS,
  SERVICES,
  PROJECTS,
  EXPERIENCE,
  TRAINING,
};

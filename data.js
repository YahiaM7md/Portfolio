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
    icon: "ph-pen-nib",
    title: "Graphic Design",
    description: "Print and digital design — brochures, posters, packaging, ads, and all visual communication materials.",
  },
  {
    icon: "ph-presentation-chart",
    title: "Logo Design",
    description: "Crafting unique and memorable logos that reflect your brand’s identity and leave a strong visual impression.",
  },
   {
    icon: "ph-pen-nib",
    title: "Packaging Design",
    description: "Designing creative and functional product packaging that stands out on shelves and strengthens brand recognition.",
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
    gallery: ["assets/graphic/project1/1.jpg", "assets/graphic/project1/2.jpg", "assets/graphic/project1/3.jpg", "assets/graphic/project1/4.png", "assets/graphic/project1/5.png", "assets/graphic/project1/6.jpg", "assets/graphic/project1/7.jpg", "assets/graphic/project1/8.jpg", "assets/graphic/project1/9.jpg", "assets/graphic/project1/10.jpg", "assets/graphic/project1/11.png", "assets/graphic/project1/12.jpg", "assets/graphic/project1/13.jpg", "assets/graphic/project1/14.png", "assets/graphic/project1/15.png", "assets/graphic/project1/16.jpg", "assets/graphic/project1/17.png", "assets/graphic/project1/18.jpg","assets/graphic/project1/19.jpg","assets/graphic/project1/20.jpg"],
   
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
    gallery: ["assets/graphic/project4/1.jpg", "assets/graphic/project4/2.jpg", "assets/graphic/project4/3.jpg", "assets/graphic/project4/4.jpg", "assets/graphic/project4/5.jpg", "assets/graphic/project4/6.jpg", "assets/graphic/project4/7.jpg", "assets/graphic/project4/8.jpg", "assets/graphic/project4/9.jpg", "assets/graphic/project4/10.jpg", "assets/graphic/project4/11.png", "assets/graphic/project4/12.png", "assets/graphic/project4/13.jpg", "assets/graphic/project4/14.jpg", "assets/graphic/project4/15.png"],
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
    gallery: ["assets/graphic/project2/1.jpg", "assets/graphic/project2/2.jpg", "assets/graphic/project2/3.png", "assets/graphic/project2/4.jpg", "assets/graphic/project2/5.png", "assets/graphic/project2/6.png", "assets/graphic/project2/7.jpg", "assets/graphic/project2/8.jpg", "assets/graphic/project2/9.png","assets/graphic/project2/10.png","assets/graphic/project2/11.png","assets/graphic/project2/12.png", "assets/graphic/project2/13.png","assets/graphic/project2/14.png","assets/graphic/project2/15.png","assets/graphic/project2/16.png","assets/graphic/project2/17.png","assets/graphic/project2/18.png","assets/graphic/project2/19.png","assets/graphic/project2/20(1).jpg","assets/graphic/project2/21.png","assets/graphic/project2/22.png"],

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
    gallery: ["assets/graphic/project3/1.png", "assets/graphic/project3/2.jpg", "assets/graphic/project3/3.jpg", "assets/graphic/project3/4.jpg", "assets/graphic/project3/5.jpg", "assets/graphic/project3/6.jpg", "assets/graphic/project3/7.jpg", "assets/graphic/project3/8.jpg", "assets/graphic/project3/9.png", "assets/graphic/project3/10.jpg", "assets/graphic/project3/11.png", "assets/graphic/project3/12.jpg", "assets/graphic/project3/13.png", "assets/graphic/project3/14.png", "assets/graphic/project3/15.jpg", "assets/graphic/project3/16.jpg", "assets/graphic/project3/17.jpg"],
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
    gallery: ["assets/graphic/project6/1.png", "assets/graphic/project6/2.jpg", "assets/graphic/project6/4.jpg", "assets/graphic/project6/5.png", "assets/graphic/project6/6.jpg", "assets/graphic/project6/7.png", "assets/graphic/project6/8.png", "assets/graphic/project6/9.png"],
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
    gallery: ["assets/graphic/project7/1.png", "assets/graphic/project7/2.png", "assets/graphic/project7/3.jpg", "assets/graphic/project7/4.jpg", "assets/graphic/project7/5.jpg", "assets/graphic/project7/6.jpg", "assets/graphic/project7/7.jpg", "assets/graphic/project7/8.jpg", "assets/graphic/project7/9.png","assets/graphic/project7/10.png","assets/graphic/project7/11.png"],
    // brandOverview: "High energy, bold typography, and dynamic composition. The campaign uses a Green-and-yellow palette with aggressive diagonal layouts to communicate intensity and motivation.",
    // colors: ["#0A0A0A", "#FF4500", "#FFFFFF", "#1C1C1C"],
    // typography: ["Bebas Neue", "DM Sans"],
  },

  /* ──────────────────────────────────────────────────────────────
     DATA ANALYSIS PROJECTS
     ADD NEW DATA PROJECT HERE ↓
  ────────────────────────────────────────────────────────────── */
  {
    id: "sales-dashboard",
    category: "data",
    title: "Sales Dashboard",
    shortDescription: "Interactive Power BI dashboard analyzing $2M+ in annual sales",
    fullDescription: "Built an end-to-end sales analytics solution for a mid-size e-commerce company. The project involved cleaning 3 years of raw transaction data in Excel, building a normalized data model in Power Query, and creating an interactive Power BI report with 8 pages covering revenue, product performance, customer behavior, and regional trends.",
    tools: ["Power BI", "Excel", "Power Query", "DAX"],

    // PUT DASHBOARD SCREENSHOT PATH HERE ↓
    cover: "",

    gallery: ["", ""],
    problemStatement: "The client had no central reporting tool. Their team was manually compiling weekly Excel reports from 4 different systems — a process that took 6 hours every week and was prone to errors.",
    datasetInfo: "3 years of transaction data (2021–2023), ~180,000 rows. Sources: Shopify export, CRM system, inventory management tool, and Google Analytics. Merged and cleaned in Power Query.",
    insights: [
      "Top 20% of customers generated 68% of total revenue — classic Pareto pattern",
      "Q4 drove 41% of annual revenue, with peak 3 weeks before Christmas",
      "Product category 'Home & Kitchen' had the highest margin (34%) but lowest traffic",
      "Mobile conversion rate (1.8%) was 3x lower than desktop (5.4%), indicating UX issues",
      "5 of the top 10 products were consistently out of stock on high-traffic days",
    ],
    results: "The dashboard eliminated the 6-hour manual reporting process. The team now generates real-time reports in seconds. Insights directly informed a product restocking strategy that increased Q4 revenue by 18%.",
  },

  {
    id: "hr-analytics",
    category: "data",
    title: "HR Employee Analysis",
    shortDescription: "Identifying the drivers of employee turnover using Python & Excel",
    fullDescription: "A deep-dive analysis into employee attrition data for a 1,500-person company. The goal was to identify which factors most strongly predicted employee resignation so HR could take proactive action. Analysis was performed in Python (Pandas, Seaborn) with final reporting in Excel and a presentation deck.",
    tools: ["Python", "Pandas", "Seaborn", "Excel"],
    cover: "",
    gallery: ["", ""],
    problemStatement: "The company was experiencing 22% annual turnover — well above the industry average of 15%. HR leadership needed to understand why employees were leaving and which departments and roles were most at risk.",
    datasetInfo: "IBM HR Analytics dataset, 1,470 employee records, 35 features including age, department, job role, salary, overtime, job satisfaction scores, and performance ratings.",
    insights: [
      "Employees in Sales with <2 years at the company had a 47% attrition rate — the highest segment",
      "Overtime workers were 3.4x more likely to resign than non-overtime workers",
      "Job satisfaction score below 2 (on 1–4 scale) predicted resignation with 71% accuracy",
      "Salary had surprisingly low correlation with attrition — work-life balance scored higher",
      "Employees who had not received a promotion in 4+ years left at a 2.8x higher rate",
    ],
    results: "HR used findings to redesign the onboarding process for Sales roles, limit mandatory overtime, and introduce a transparent promotion timeline. Projected attrition reduction: 8 percentage points over 12 months.",
  },

  {
    id: "pizza sales-analysis",
    category: "data",
    title: "pizza sales-analysis",
    shortDescription: "Multi-channel marketing performance analysis using SQL & Excel",
    fullDescription: "Analyzed 12 months of multi-channel digital marketing data for a SaaS company to determine the true ROI of each channel and guide budget reallocation. Channels analyzed: Google Ads, Facebook Ads, Email Marketing, SEO, and Influencer partnerships.",
    tools: ["SQL", "Excel", "Google Sheets"],
    cover: "",
    gallery: [""],
    problemStatement: "The marketing team was spending $40K/month across 5 channels with no clear picture of which was actually driving revenue. Budget was being allocated based on gut feeling rather than data.",
    datasetInfo: "12 months of ad spend data, CRM conversion data, and Google Analytics traffic. Joined across platforms using SQL to build a unified attribution model.",
    insights: [
      "Email marketing had 380% ROI — the highest of all channels with lowest CPL ($4.20)",
      "Google Ads drove 44% of revenue but had CPL of $82, significantly above target",
      "Facebook Ads generated clicks but had <0.3% conversion to paid — lowest of all channels",
      "SEO organic traffic had grown 67% YoY but was completely untracked in existing reports",
      "Influencer spend of $8K/month had zero trackable conversions over the 12-month period",
    ],
    results: "Recommended reallocation: cut Facebook and Influencer budget by 70%, reinvest into email list growth and SEO. Projected annual savings: $96K with maintained or improved revenue targets.",
  },

  // ← ADD A NEW GRAPHIC PROJECT HERE (copy template from the top of this file)

  // ← ADD A NEW DATA PROJECT HERE (copy template from the top of this file)
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
};

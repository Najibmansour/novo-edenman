import importAll from "@/lib/bulk_import";
const images = importAll(require.context("../images/products", true));

// console.table(images[""]);

// PATERNS
import CUSTOM_pattern01 from "../images/colors/CUSTOM_pattern01.jpeg";
import CUSTOM_pattern02 from "../images/colors/CUSTOM_pattern02.jpeg";
import CUSTOM_pattern03 from "../images/colors/CUSTOM_pattern03.jpeg";
import CUSTOM_pattern04 from "../images/colors/CUSTOM_pattern04.jpeg";
import CUSTOM_pattern05 from "../images/colors/CUSTOM_pattern05.jpeg";
import CUSTOM_pattern06 from "../images/colors/CUSTOM_pattern06.jpeg";
import CUSTOM_pattern07 from "../images/colors/CUSTOM_pattern07.jpeg";
import CUSTOM_pattern08 from "../images/colors/CUSTOM_pattern08.jpeg";
import CUSTOM_pattern09 from "../images/colors/CUSTOM_pattern09.jpeg";

// COLOR
import COLOR_custom_black from "../images/colors/CUSTOM_black.jpg";
import COLOR_custom_blue from "../images/colors/CUSTOM_blue.jpg";
import COLOR_custom_gray from "../images/colors/CUSTOM_gray.jpg";
import COLOR_custom_lightblue from "../images/colors/CUSTOM_lightblue.jpg";
import COLOR_custom_white from "../images/colors/CUSTOM_white.jpg";

const products = [
  // {
  //   title: "Dad And Son",
  //   description:
  //     "For small boys, their fathers are their first superheroes and they aspire to act and appear like them. Developing an idea that allows your son to share his role model appearances with you during the day helps deepen the relationship between father and son without getting in the way of clothing regulations at work or school.",
  //   fabric: [
  //     { name: "Cotton", percent: "95" },
  //     { name: "Elastane", percent: "5" },
  //   ],
  //   variants: [],
  //
  //   images: images["DAD SON Boxer Brief"],
  // },
  {
    title: "Sport Brief Boxer",
    description:
      "Your best choice of boxers with feature discreet paneling, stay-put waistbands and ultra-soft fabrics that brings you comfort, our undeniably lightweight cotton gives you the relaxation feeling while working out or in your daily activities.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    variants: [
      { color: CUSTOM_pattern01, title: "Custom" },
      { color: "#000000", title: "Black" },
      { color: "#666666", title: "Dark Gray" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#7777EA", title: "Blue" },
      { color: "#65880f", title: "Olive Green" },
    ],
    images: images["Sports boxers"],
  },
  {
    title: "Sport Pique Boxer",
    description:
      "To feel the comfort, our Pique boxer is your best choice. This product is made of durable cotton covered with a tiny, textured pattern, and it’s easy to clean.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#e4e4bf", title: "Beige" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#7777EA", title: "Blue" },
      { color: "#65880f", title: "Olive Green" },
    ],
    images: images["Sport Pique Boxer"],
  },
  {
    title: "Soft Brief",
    description:
      "Your elegant high-end Brief made of the softest natural Cotton with built-in recovery for fully comfort and 24/7 wear with a comfy elastic waistband, 2-ply pouch and clean seam lines for an ideal fit.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],

    variants: [
      { color: "#000000", title: "Black" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#7777EA", title: "Blue" },
      { color: "#000080", title: "Navy Blue" },
    ],
    images: images["Briefs"],
  },

  {
    title: "Smooth Cotton Trunk",
    description:
      "Your everyday day favorite Trunk, made from super soft natural cotton fabric, with clean seam lines, that provide you with much elasticity, natural feelings and kind to your skin with the smooth elastic waistband.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#7777EA", title: "Blue" },
    ],

    images: images["Trunk"],
  },
  {
    title: "Sport Brief",
    description:
      "High-quality boxer made from micro modal fabric, guaranteeing unparalleled comfort.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
    ],

    images: images["Trunk"],
  },
  {
    title: "Super Soft Boxers",
    description:
      "Your exceptionally super soft Boxer crafted in stretch cotton that keep you comfortable and refreshed all day with the comfy elastic waistband and clean seam lines.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    variants: [
      { color: CUSTOM_pattern01, title: "Pattern 1" },
      { color: CUSTOM_pattern02, title: "Pattern 2" },
      { color: CUSTOM_pattern03, title: "Pattern 3" },
      { color: CUSTOM_pattern04, title: "Pattern 4" },
      { color: CUSTOM_pattern05, title: "Pattern 5" },
      { color: CUSTOM_pattern06, title: "Pattern 6" },
      { color: CUSTOM_pattern08, title: "Pattern 7" },
      { color: CUSTOM_pattern09, title: "Pattern 8" },
      { color: "#7777EA", title: "Blue" },
    ],
    images: images["Boxers"],
  },
  {
    title: "Classic Fresh Tank",
    description:
      "Your elegant high-end Tank is made with our breathable high-stretch cotton rib fabric and designed for any and everyday to provide utmost flexibilty and comfort.",
    variants: [{ color: "#fcfcfc", title: "White" }],
    images: images["Tank"],
  },
  {
    title: "V Neck Sport Undershirt",
    description:
      "Your basic top quality half sleeve undershirt V neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    variants: [
      { color: COLOR_custom_black, title: "Black" },
      { color: COLOR_custom_blue, title: "Blue" },
      { color: COLOR_custom_gray, title: "Gray" },
      { color: COLOR_custom_lightblue, title: "Light Blue" },
      { color: COLOR_custom_white, title: "White" },
    ],
    images: images["Vneck"],
  },

  {
    title: "0 Neck Sport Undershirt",
    description:
      "Your basic top quality sleeveless undershirt O neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#666666", title: "Dark Gray" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#fcfcfc", title: "White" },
    ],
    images: images["Oneck"],
  },

  {
    title: "V-neck Pique undershirt ",
    description:
      "Our Pique Undershirt, crafted from premium fabric, and it blends luxurious softness with timeless style, enjoy the comfort and experience the difference.",
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#666666", title: "Dark Gray" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#fcfcfc", title: "White" },
    ],
    images: images["Vneck"],
  },
];

const getImages = (arr) => {
  const imageArr = [];
  arr.forEach((item, i) => {
    // console.log(item.images);
    imageArr.push(...item.images);
  });

  return imageArr;
};

const productsImages = getImages(products);

export { products, productsImages };

// {
//   title: "Cottony Men Relax Boxer Briefs",
//   description:
//     "Your daily essentiels Boxer Brief with the smooth elastic waistband, made with our undeniably soft and lightweight cotton that gives you a body-hugging fit that allows you to breathe. Detailed with a 2-ply pouch for the support you crave and seam details for a superb fit.",
//   fabric: [
//     { name: "Cotton", percent: "95" },
//     { name: "Elastane", percent: "5" },
//   ],
//   variants: ["High Waist", "Low Waist"],
//
//   images: images["Boxer Brief"],
// },

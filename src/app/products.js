function importAll(r) {
  let images = {};
  // console.log(r.keys());
  r.keys().forEach((item, index) => {
    const productName = item.split("/")[1];

    images[productName] =
      images[productName] === undefined ? [] : images[productName];

    images[productName].push(r(item));
  });
  return images;
}
const images = importAll(require.context("../images/products", true));

// console.table(images[""]);

// COLORS
import COLOR_custom from "../images/colors/custom.jpg";

const products = [
  // {
  //   title: "Dad And Son",
  //   description:
  //     "For small boys, their fathers are their first superheroes and they aspire to act and appear like them. Developing an idea that allows your son to share his role model appearances with you during the day helps deepen the relationship between father and son without getting in the way of clothing regulations at work or school.",
  //   fabric: [
  //     { name: "Cotton", percent: "95" },
  //     { name: "Elastane", percent: "5" },
  //   ],
  //   wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
  //   variants: [],
  //   type: "primary",
  //   images: images["DAD SON Boxer Brief"],
  // },
  {
    title: "Sport Boxers",
    description:
      "Your best choice of boxers with feature discreet paneling, stay-put waistbands and ultra-soft fabrics that brings you comfort, our undeniably lightweight cotton gives you the relaxation feeling while working out or in your daily activities.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [
      { color: COLOR_custom, title: "Custom" },
      { color: "#000000", title: "Black" },
      { color: "#666666", title: "Dark Gray" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#0f0f60", title: "Navy Blue" },
      { color: "#fcfcfc", title: "White" },
    ],
    type: "primary",
    images: images["Sports boxers"],
  },
  {
    title: "Soft Cotton Briefs",
    description:
      "Your elegant high-end Brief made of the softest natural Cotton with built-in recovery for fully comfort and 24/7 wear with a comfy elastic waistband, 2-ply pouch and clean seam lines for an ideal fit.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#fcfcfc", title: "White" },

      { color: "#000080", title: "Navy Blue" },
    ],
    type: "primary",
    images: images["Briefs"],
  },
  // {
  //   title: "Cottony Men Relax Boxer Briefs",
  //   description:
  //     "Your daily essentiels Boxer Brief with the smooth elastic waistband, made with our undeniably soft and lightweight cotton that gives you a body-hugging fit that allows you to breathe. Detailed with a 2-ply pouch for the support you crave and seam details for a superb fit.",
  //   fabric: [
  //     { name: "Cotton", percent: "95" },
  //     { name: "Elastane", percent: "5" },
  //   ],
  //   wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
  //   variants: ["High Waist", "Low Waist"],
  //   type: "primary",
  //   images: images["Boxer Brief"],
  // },
  // {
  //   title: "Smooth Cotton Trunk",
  //   description:
  //     "Your everyday day favorite Trunk, made from super soft natural cotton fabric, with clean seam lines, that provide you with much elasticity, natural feelings and kind to your skin with the smooth elastic waistband.",
  //   fabric: [
  //     { name: "Cotton", percent: "95" },
  //     { name: "Elastane", percent: "5" },
  //   ],
  //   wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
  //   variants: ["High Waist", "Low Waist"],
  //   type: "primary",
  //   images: images["DAD SON Trunk"],
  // },
  {
    title: "Super Soft Boxers",
    description:
      "Your exceptionally super soft Boxer crafted in stretch cotton that keep you comfortable and refreshed all day with the comfy elastic waistband and clean seam lines.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [
      { color: COLOR_custom, title: "Custom" },
      { color: "#000000", title: "Black" },
      { color: "#666666", title: "Dark Gray" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#fcfcfc", title: "White" },
    ],
    type: "primary",
    images: images["Boxers"],
  },
  {
    title: "Cottony undershirt v neck",
    description:
      "Your basic top quality half sleeve undershirt V neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#666666", title: "Dark Gray" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#fcfcfc", title: "White" },
    ],
    type: "primary",
    images: images["Vneck"],
  },
  {
    title: "Cottony undershirt O neck",
    description:
      "Your basic top quality sleeveless undershirt O neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [
      { color: "#000000", title: "Black" },
      { color: "#666666", title: "Dark Gray" },
      { color: "#a0a0a0", title: "Gray" },
      { color: "#000080", title: "Navy Blue" },
      { color: "#fcfcfc", title: "White" },
    ],
    type: "primary",
    images: images["Oneck"],
  },
  {
    title: "Classic Fresh Tank",
    description:
      "Your elegant high-end Tank is made with our breathable high-stretch cotton rib fabric and designed for any and everyday to provide utmost flexibilty and comfort.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: ["#fcfcfc"],
    variants: [{ color: "#fcfcfc", title: "White" }],
    type: "primary",
    images: images["Tank"],
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

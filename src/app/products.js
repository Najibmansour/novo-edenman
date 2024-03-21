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

const images = importAll(require.context("../app/images/products", true));

// console.table(images[""]);

const products = [
  {
    title: "Soft Hand Cotton Briefs",
    description:
      "Your elegant high-end Brief made of the softest natural Cotton with built-in recovery for fully comfort and 24/7 wear with a comfy elastic waistband, 2-ply pouch and clean seam lines for an ideal fit.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [],
    type: "primary",
    images: images["Briefs"],
  },
  {
    title: "Cottony Men Relax Boxer Briefs",
    description:
      "Your daily essentiels Boxer Brief with the smooth elastic waistband, made with our undeniably soft and lightweight cotton that gives you a body-hugging fit that allows you to breathe. Detailed with a 2-ply pouch for the support you crave and seam details for a superb fit.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: ["High Waist", "Low Waist"],
    type: "secondary",
    images: images["Boxer Brief"],
  },
  {
    title: "Smooth Cotton Trunk",
    description:
      "Your everyday day favorite Trunk, made from super soft natural cotton fabric, with clean seam lines, that provide you with much elasticity, natural feelings and kind to your skin with the smooth elastic waistband.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: ["High Waist", "Low Waist"],
    type: "primary",
    images: images["DAD SON Trunk"],
  },
  {
    title: "Super Soft Boxers",
    description:
      "Your exceptionally super soft Boxer crafted in stretch cotton that keep you comfortable and refreshed all day with the comfy elastic waistband and clean seam lines.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [],
    type: "secondary",
    images: images["Boxers"],
  },
  {
    title: "Ultra Stretch Undershirt V neck",
    description:
      "Your basic top quality half sleeve undershirt V neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
    type: "primary",
    images: images[""],
  },
  {
    title: "Ultra Stretch Undershirt O neck",
    description:
      "Your basic top quality sleeveless undershirt O neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
    type: "secondary",
    images: images[""],
  },
  {
    title: "Classic Fresh Tank",
    description:
      "Your elegant high-end Tank is made with our breathable high-stretch cotton rib fabric and designed for any and everyday to provide utmost flexibilty and comfort.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
    type: "primary",
    images: images[""],
  },
];

export default products;

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

const products = [
  {
    title: "Dad And Son",
    description:
      "For small boys, their fathers are their first superheroes and they aspire to act and appear like them. Developing an idea that allows your son to share his role model appearances with you during the day helps deepen the relationship between father and son without getting in the way of clothing regulations at work or school.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [],
    type: "primary",
    images: images["DAD SON Boxer Brief"],
  },
  {
    title: "Sport Boxers",
    description:
      "For comfort where it matters most, our collection of men's underwear and boxers feature discreet paneling, stay-put waistbands and ultra-soft fabrics to reduce uncomfortable bunching under your workout clothes, making them an essential pre-gym step. Just because you're on the move, doesn't mean your boxers should too. Designed to keep you comfortable and secure, our men’s gym underwear features materials that stretch, breathe and support, so you can focus without distraction whether that’s in the gym, work or home. You may work hard, but our boxers work harder.",
    fabric: [
      { name: "Cotton", percent: "95" },
      { name: "Elastane", percent: "5" },
    ],
    wash: ["Machine Wash Cold", "Tumble Dry Low", "Iron Low", "Do Not Bleach"],
    variants: [],
    type: "primary",
    images: images["Sports boxers"],
  },
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
    images: images["Vneck"],
  },
  {
    title: "Ultra Stretch Undershirt O neck",
    description:
      "Your basic top quality sleeveless undershirt O neck, this breathable, is made of 4-way ultra-stretch natural cotton to provide utmost flexibilty and comfort, with moisture-wicking properties, perfect for all day and every day wear.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
    type: "secondary",
    images: images["Oneck"],
  },
  {
    title: "Classic Fresh Tank",
    description:
      "Your elegant high-end Tank is made with our breathable high-stretch cotton rib fabric and designed for any and everyday to provide utmost flexibilty and comfort.",
    fabric: [{ name: "Cotton", percent: "100" }],
    wash: [],
    variants: [],
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

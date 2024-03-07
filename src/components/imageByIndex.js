export const images = ["image1", "image2", "image3", "image4"];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

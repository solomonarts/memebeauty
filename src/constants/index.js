// import '../Assets/images/bg'
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

export const backgrounds = importAll(
  require.context("../Assets/images/bg", false, /\.(png|jpe?g|svg|webp)$/)
);

export const experts = importAll(
  require.context("../Assets/images/experts", false, /\.(png|jpe?g|svg|webp)$/)
);

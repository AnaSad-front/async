// challenge 1
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Something went wrong ${res.status}`);

      return res.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      const country = data.countryName;

      if (!country) throw new Error("Country not found");

      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Something went wrong ${res.status}`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥💥💥`));
};

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// challenge 2

const imgsContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgsContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Couldn't find an image"));
    });
  });
};

let curImg;

createImage("./img/img-1.jpg")
  .then((img) => {
    curImg = img;
    return wait(2);
  })
  .then(() => {
    curImg.style.display = "none";
    return createImage("./img/img-2.jpg");
  })
  .then((img) => {
    curImg = img;
    return wait(2);
  })
  .then(() => {
    curImg.style.display = "none";
    return createImage("./img/img-3.jpg");
  })
  .then((img) => {
    curImg = img;
    return wait(2);
  })
  .then(() => {
    curImg.style.display = "none";
  })
  .catch((err) => console.error(err));

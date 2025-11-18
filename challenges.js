// challenge 1

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

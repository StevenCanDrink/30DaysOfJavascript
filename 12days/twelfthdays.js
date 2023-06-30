const fetchdata = async () => {
  try {
    const resp = await fetch('https://restcountries.com/v2/all');
    const countries = await resp.json();
    console.log(
      countries.map((vl) => {
        return {
          name: vl.name,
          capital: vl.capital,
          population: vl.population,
          languages: vl.languages,
          area: vl.area,
        };
      })
    );
  } catch (err) {
    console.log(err);
  }
};
fetchdata();

var array = [];
const fetchAnimaldata = async () => {
  try {
    const resp = await fetch('https://api.thecatapi.com/v1/breeds');
    const cats = await resp.json();
    var catname = cats.forEach((vl) => array.push(vl.name));
    console.log(array);
  } catch (err) {
    console.log(err);
  }
};
fetchAnimaldata();

console.log(array);

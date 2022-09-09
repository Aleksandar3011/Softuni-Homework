
function cityTaxes(name, population, treasury) {
  const city = {
    name,
    population,
    treasury,
    taxRate: 10,
    applyRecession(percent) {
        this.treasury -= Math.floor(this.treasury * percent / 100)
      },
    applyGrowth(percent) {
        this.population += Math.floor(this.population * percent / 100);
      },
    collectTaxes(population, taxRate) {
        this.treasury += Math.floor(this.population * this.taxRate);
    }
  };
  return city;
}
const city = cityTaxes("Tortuga", 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

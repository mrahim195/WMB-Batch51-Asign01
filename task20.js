var countries = ["United States", "China", "India", "Brazil", "Russia"];
// Print the list of countries
console.log("Countries:");
console.log(countries.map(function (country) { return "\u2022 ".concat(country); }).join('\n'));

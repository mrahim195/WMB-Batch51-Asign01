function describeCity(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describeCity("Karachi", "Pakistan");
  describeCity("New York", "USA");
  describeCity("Tokyo"); 
  
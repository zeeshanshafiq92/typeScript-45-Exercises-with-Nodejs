//  describe a function
function describeCity (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling the function
describeCity("Karachi"); 

describeCity("Lahore");

describeCity("Berlin", "Germany");
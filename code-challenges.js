// ASSESSMENT 2: Coding Practical Questions

// (1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test variables provided:
    var num1 = 15
    // Expected output: "15 is divisible by three"
    var num2 = 0
    // Expected output: "0 is divisible by three"
    var num3 = -7
    // Expected output: "-7 is not divisble by three"

//Psuedo-code: Create a function with an if/else statement using modulo (%3=0) to determine if the argument is divisible by 3. If not, return the number is not divisible by three with string interpolation.
    const div3 = (numb) =>{
      if (numb%3===0){
      return `${numb} is divisible by 3`
    } else {
      return `${numb} is not divisible by 3`
    }
    }
   console.log(div3(num1));
   // console.log(div3(num2));
   // console.log(div3(num3));
   // console.log(div3(355));

// (2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.
    var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//Psuedo-code:Create a function with map to return a new array with additional accessor method to uppercase every value of the original array.
    const uppercase = (array) => {
      let capNouns = array.map(value=> {
//with each value access the first index and capitalize the letter then concatenate the remainder of the word with the substring() method which extracts the characters from a string, between two specified indices, and returns the new sub string.
        return value[0].toUpperCase()+value.substring(1)
    })
// this final return, will return an array but if you want to view in a string you must join the values of the array with .join("") method.
      return capNouns.join(", ")
    }
    console.log(uppercase(randomNouns));


// (3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.
    var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
    // Expected output: [-8, 0, 8, 46, 59, 90, 107]

//pseudo-code: create a function to perform above task. create a variable to hold new array of only numbers and use filter function to draw out numbers from old array and push them into the new array. Use the sort() method to sort the numbers of the array in ascending order. Must include compareFunction parameter -- A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
        //function(a, b){return a-b}
    const onlyNumbs = (array) => {
      let numbArray = array.filter (value => {
        return typeof value==="number"
      })
      return numbArray.sort(function(a,b) {return a-b})
    }
    console.log(onlyNumbs(mixedDataArray))

// (4) Create a function that takes in a string and logs the index of the first vowel.
    var vowelTester1 = "learn"
    // Expected output: 1
    var vowelTester2 = "throw"
    // Expected output: 3
//pseudo-code:




// (5) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]





// (6) Using the toonimals variable, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

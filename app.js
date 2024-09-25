//One Liners
//-------------------------------------------------

// create Arrow Function and console.log the array filtered (take the elements and index, 
//returns if the index of the FIRST element is the same as the one at index itself then its truthy )
const removeDuplicates = (arr) => console.log(arr.filter((element, ind) => arr.indexOf(element) === ind ));
//(index of 4 is [0] same as ind ... again through 0 to 5 ind then at ind 6 the indexOf 4 was given a 0 so its not the same as ind)
removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]);
// Result : [4, 9, 5, 1, 3, 2, 8]

removeDuplicates(["hello", "world", "goodbye", "world"]);
// Result : ['hello', 'world', 'goodbye']

removeDuplicates([true, true, false, true, true, false]);
// Result : [true, false]

//----------------------------------------------------

//Create an arrow function that logs the given string capitalized
//take the char at index o .charAt() and uppercase it then concatenate with the sentence while taking away the first letter 
const capitalize = (str) => console.log((str.charAt(0).toUpperCase() + str.slice(1)))
// b -> B + (belgium - first character)
capitalize("belgium");
// Result : "Belgium"

capitalize("brazil");
// Result : "Brazil"

capitalize("brussels");
// Result : "Brussels"

//-------------------------------------------------------

//getTime of a and b in milliseconds => to get days milliseconds*1000 gives seconds => seconds * 3600 gives an hour and finally 24h give a day
//diff between day a and day b then divide them by (1000 * 3600 * 24) and you get the number of days
const dayDif = (a, b) => console.log( (b.getTime() - a.getTime()) / (1000 * 3600 * 24))


dayDif(new Date("2020-10-21"), new Date("2021-10-22"));
// Result : 366
dayDif(new Date("2020-09-30"),new Date("2021-10-22"));

dayDif(new Date("2021-10-23"), new Date("2021-10-22"));
//----------------------------------------------------------

/*const average = (...numbers) => console.log(...numbers.reduce((element) => (Math.min(element) + Math.max(element)) / 2));//.reduce((accumulator, currentValue) => accumulator + currentValue / 2 (?))

average(1, 2, 3, 4);*/
// Result: 2.5
//-----------------------------------------------------------
//Math.min or max return Nan from an array the spread operator can destructurize the array to help us get the min or max value
const getSmallest = (arr) => console.log(Math.min(...arr));

const arr = [13, 7, 11, 3, 9, 15, 17];
//console.log(typeof(arr[1]))
getSmallest(arr);
// Result: 3

//-----------------------------------------------------------------

const areEqual = (firstArray, secondArray) => console.log(firstArray.length == secondArray.length && firstArray.sort((a, b)=> (a-b)).every((value, index) => value == secondArray.sort((a,b) => (a-b))[index]));
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];
//arr1 and arr2 even if having the same values in them are 2 different objects, it will always give a false
//console.log(arr1.sort((a, b) => ( a - b )))
//console.log(arr2.sort((a, b) => ( a - b )))
//unless we sort them out and loop through it for every element at every indexes (they need to be sorted... this cost me a day)
//console.log((arr1.sort((a, b) => ( a - b ))) == (arr2.sort((a, b) => ( a - b ))) ) //this is giving me a false
console.log(arr1.sort((a,b)=>(a-b)).every((value, index) => value === arr2.sort((a,b)=>(a-b))[index] ));
areEqual(arr1, arr2);
// Result : true

areEqual(arr1, arr3);
// Result : false
//------------------------------------------------------------------
const randomRGB = () => console.log(`rgb(${(Math.floor(Math.random() * 255 ) + 1)}, ${(Math.floor(Math.random() * 255 )+ 1)}, ${(Math.floor(Math.random() * 255 )+ 1)})`)

randomRGB();
// Result : "rgb(232, 115, 164)"
//-------------------------------------------------------------------
//this is what i had before checking around it gives the occurences of the letter in the word as such i.e.: for 'hello' = ['l','l']
//const occurencies = (word, letter) => console.log(word.split('').filter((element) => element === letter));
const occurencies = (word, letter) => console.log(word.split('').filter((element) => element === letter).length);

occurencies("hello", "l");
// Result : 2

occurencies("abracadabra", "a");
// Result : 5

occurencies("oups", "z");
// Result : 0
//----------------------------------------------------------------------
//use the initial value 0 in the reduce method so that an empty string is no longer empty
const onlyPositives = (arr) => console.log(arr.filter((element) => element > 0).reduce((accumulator, current) => accumulator + current, 0));

onlyPositives([1, 6, 2, -3, 5, -12]);
// Result : 14

onlyPositives([-3, -4, -2]);
// Result : 0
//-----------------------------------------------------------------------

//filter the array and return the items with the same object keys as the obj given;
// now for every key of the array return the ones where the elements(array) are similar to the obj given
const scanAndFind = (arr, obj) => console.log(arr.filter(element => Object.keys(obj).every(key => element[key] === obj[key])));
scanAndFind(
    [
      {
        firstName: "Vito",
        lastName: "Corleone",
      },
      {
        firstName: "Jon",
        lastName: "Snow",
      },
      {
        firstName: "Harry",
        lastName: "Potter",
      },
      {
        firstName: "Michal",
        lastName: "Corleone",
      },
    ],
    {
      lastName: "Corleone",
    }
  );
  
  // Result : [{firstName: Vito, lastName: Corleone}, {firstName: Michael, lastName: Corleone}]
  
  scanAndFind(
    [
      { fullName: "Roi Baudoin", id: 49762 },
      { fullName: "Margareth Tatcher", id: 94357 },
      { fullName: "Barack Obama", id: 76458 },
      { fullName: "Emmanuel Macron", id: 10687 },
      { fullName: "Charles de Gaulle", id: 67098 },
      { fullName: "Boris Johnson", id: 16437 },
    ],
    { id: 10687 }
  );
  // Result : [{fullName: "Emmanuel Macron", id: 10687}]

  //-------------------------------------------------------------------------
//to be able to use the given numbers you have to spread the parameters as one ...numbers(1,2,3,4)=>1 2 3 4 each undefined tho but we can still take them one by one 
//use a reduce fct to go through them add them up and divide by number of numbers given
const average = ( ...numbers ) => console.log(numbers.reduce((accumulator, currentIndex) => ((accumulator) + (currentIndex) / numbers.length ), 0))

average(1, 2, 3, 4);
// Result: 2.5
average(2,3,4,5,6,7,8) // 35/7 => 5
average(1,2,3) // 6 / 3 => 2
average(22,56,78,98,101,-1) // 354 / 6 => 59 (getting 58.999999999 but yeah seems legit)
average(-1,-2,-3,-4) // -2.5
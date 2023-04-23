// /Create a stuctured html file linked to a JS file

//1. Create an object that has properties "username" and "password". Fill those values in with strings.

//2. Create an array which contains the object you have made above and name the array "database".

//3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".


  let person = {
  username: "wiza",
    password: "13",
  
  };

            };
let database = [ person ];


let newsfeed = [
    {
        username: "way",
        timeline: "go!"
    },
    {
        username: "left",
        timeline: "right"
    },
    {
        username: "why",
        timeline: "no"
    }
];

//note to myself
//You can access the objects inside the newsfeed array using the index number of the object. In JavaScript, array indexes start at 0.

//So, to access the second object in the newsfeed array (which contains the username "bob_smith"), you can use the index number 1 like this:

////javascript
//Copy code
//let secondObject = newsfeed[1];
//console.log(secondObject.username); // Output: "bob_smith"
//This code creates a variable secondObject and assigns it the value of the second object in the newsfeed array (which has an index of 1). Then, the code logs the username property of that object to the console, which will output "bob_smith".


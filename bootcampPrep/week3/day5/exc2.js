/*1. Write a JavaScript for loop that will go through the variable names.

if the item is not a string, pass.
if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

2. Write a JavaScript for loop that will go through the variable names

if the item is not a string, go out of the loop.
if the item is a string, display it.*/



/*let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i in names) {
  if (isNaN(names[i])) {
    if (names[i][0] !== names[i][0].toUpperCase()) {
      names[i] = names[i][0].toUpperCase() + names[i].slice(1, names[i].length);
    }
  } else {
    console.log(names[i]);
  }
} */


let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i in names) {
    if (isNaN(names[i])) {
        let arr= names[i].split('');  // im spliting each name into an array
 console.log(arr);
 if(arr[0] !== arr[0].toUpperCase());
 console.log(arr.join(''));
 
    }
    else{ console.log(names[i])};
}

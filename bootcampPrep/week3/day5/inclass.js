// write a Js code to deelete all occurrence of elemente in given array
//let arr= [23,56,4,78,5,63,45,210,56]
//delete all elementes that equal 56



//   let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
//const arr_len = arr.length;
//let elm = 56;
//for (let index = 0; index < arr_len; index++) {
  //  if (arr[index] === elm) {
    //    arr.splice(index, 1);
    //}
//}
//console.log(arr);

 //write a js code to find the power of a number using js code

 //let num = 4;
 //let pow = 3;
// let res = 1; // return for power 0

 //for (let i = 0; i < pow ; i ++ ) { res= res * num; }

 //console.log (res)


 // NESTED LOOP

 //for (let i = 0; i < 5; i++)
 //{ for (let j=0; j < 3; j++) { console.log (j,1);
//}
//}

//write a js code to print a pattern using for loop and nested loop
// 1 -  1 2 - 123- 1234 -12345-123456-- till 8

//let range = 8;

/*for(let i = 1; i <= range; i++){ 
    let string = '';
    for (let j=1; j <= i; j++) { 
   string= string + j + '';}
   
   console.log (string);
}*/

//for in loop: can looks through objects and a rraysand starts from 0 and ends on the end
/* let arr= [2,4,5,7,8,9];
let obj= {
    a: '1',
    b: 'John',
    c: {a:9},
}
for(i in obj ){console.log(i, obj[i]);
}
*/


//for of loop- the for of the value is not and index, you dont have access to it, but it is the value itself-
/*let arr= [2,4,5,7,8,9];
let obj= {
    a: '1',
    b: 'John',
    c: {a:9},
}
for(i of arr ){console.log(i);
}
*/
// use loop to console log all the data of the array of objects
/*const users = [

{ user_id: 1,
name: 'Leanne Graham',
username: 'Bret',
contact: {
email: 'sincere@april.biz',
phone:'+974567873'
}
},
{
    user_id: 2,
name: 'Ervin Howell',
username: 'Antonette',
contact: {
email: 'shanna@melisa.tv',
phone:'+974567874'


}
},
{ user_id: 3,
    name: 'clementine bauch',
    username: 'samantha',
    contact: {
    email: 'nathan@yesenia.net',
    phone:'+974567872'


}

}

] */

//for ( i in users){console.log(i, users [i])};  this will show everythign

/*for(x in users){
    console.log(users[x].user_id);
    console.log(users[x].name);
    console.log(users[x].username);
    console.log(users[x].contact.email);
    console.log(users[x].contact.phone);

}

//this will show only the data i can also do it with for loop like this:
*/
//for(let x=0; x < users.length; x++){
    /*console.log(users[x].user_id);
    console.log(users[x].name);
    console.log(users[x].username);
    console.log(users[x].contact.email);
    console.log(users[x].contact.phone);*/

//}

// while loop is exactly the same as for loop
// but with different syntaxx
/*
let i=0;
while( i < 5) {console.log (i); i++;}*/


//Do...while loop

 /*let i = 5;
 do {console.log(i); i++;}
 while (i < 5)*/

 // if for example i wanna go out of the loop
 //when 5 shows up i do like this

 /*let arr= [2,5,6,7,8]
 for (let i=0; i< arr.length; i++){
    if (arr[i]===5) {break;}
    console.log(arr[i]);
 }*/

 //if i wanna skip 5 for example i use continue
 /*let arr= [2,5,6,7,8]
 for (let i=0; i< arr.length; i++){
    if (arr[i]===5) {continue;}
    console.log(arr[i]);
 }
 ATTENTION IN FILE LOOPS OTHER LOOPS THERE IS AMISTAKE
 Object.keys, objects.value, and object.entries are Not
 loops they just convert , example below*/

/* let user = { 
    name: 'blabla',
    username: 'blablabla',
    email: 'bla@gmail.com'
 }
// if i wanta to iterate i do for in but if i want another 
 //loop i can convert user into another array ( for each_ )

    let keys= Object.keys(user);
     console.log (keys); 
*/

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
  let currentItem = names[i];

  // If the item is not a string, pass
  if (typeof currentItem !== 'string') {
    continue;
  }

  console.log(currentItem); 
  if (currentItem[0] !== currentItem[0].toUpperCase()) {
    currentItem = currentItem[0].toUpperCase() + currentItem.slice(1);
  }

  // Display the name
  console.log(currentItem);
}

/*Create a variable called sentence. The value of the variable should be a string that contains the words
 “not” and “bad”.
For example, “The movie is not that bad, I like it”.

Create a variable called wordNot where it’s value is the first appearance (ie. the position) of
 the substring “not” (from the sentence variable).

Create a variable called wordBad where it’s value is the first appearance (ie. the position) of 
the substring “bad” (from the sentence variable).

If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with 
“good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence, console.log 
the original sentence.*/



const sentence = 'The movie is not that bad, I like it'
const wordNot = sentence.search('not')
const wordBad = sentence.search('bad')

if (wordNot < wordBad) {
const le = sentence.slice (0, wordNot);
const se= sentence.slice (wordBad + 3);

console.log(le + 'good' + se);
}
else { console.log (sentence)};


/*if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence);
}
In this code, we first define the sentence variable as a string that contains the words "not" and "bad". We then use the indexOf() method to find the position of the substring "not" and "bad" in the sentence and assign them to wordNot and wordBad variables.

Next, we use an if statement to check if both "not" and "bad" are present in the sentence and that "bad" appears after "not". If these conditions are true, we create a new sentence by replacing the "not...bad" substring with "good" using the slice() method. Otherwise, we simply log the original sentence to the console.

If we run this code, the output will be:

vbnet
Copy code
The movie is good, I like it
since "bad" comes after "not" in the sentence.





Regenerate response


let sentence= 'learning programming is not that bad, said no one, ever';
let wordnot= sentence.indexOf ('not');
let wordbad= sentence.indexof ('bad');*/
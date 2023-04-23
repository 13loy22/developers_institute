const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable to store the length of the array
const myWatchedSeriesLength = myWatchedSeries.length;

// Create a sentence using the array and the .join() method
const myWatchedSeriesSentence = myWatchedSeries.join(", ");

// Console.log the final sentence using both variables
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}.`);


let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Change "the big bang theory" to "friends" using the index
myWatchedSeries[2] = "friends";

// Add another series at the end of the array
myWatchedSeries.push("stranger things");

// Add your favorite series at the beginning of the array
myWatchedSeries.unshift("breaking bad");

// Remove "black mirror" from the array using the index
myWatchedSeries.splice(1, 1);

// Get the third letter of "money heist"
const thirdLetter = myWatchedSeries[1][2];

// Console.log the modified array and the third letter of "money heist"
console.log(`Third letter of "money heist": ${thirdLetter}`);
console.log(`All the series I've watched: ${myWatchedSeries}`);
Th
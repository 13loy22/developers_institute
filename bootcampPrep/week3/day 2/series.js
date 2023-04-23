const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const mywatchedserieslength=  myWatchedSeries.length;
//console.log ("mywatchedserieslength", mywatchedserieslength);


const mywatchedseriesSentence= myWatchedSeries[0] + ", " + myWatchedSeries[1] 
+ " and " + myWatchedSeries[2]
//console.log (mywatchedseriesSentence)
// can also be done with the dollar sign as the previous excersisce- thisis personal note--


//const mywatchedseriesSentence= myWatchedSeries.join(); (we could also use this one- writting down for personal note)

const sentence= `I watched ${mywatchedserieslength} series: ${mywatchedseriesSentence} `
//console.log(sentence);
 

myWatchedSeries.push("Gilmore Girls");

myWatchedSeries.unshift("Everwood");

myWatchedSeries.splice(1, 1);

myWatchedSeries[2]= "friends";

const moneyheist= myWatchedSeries[1]
//console.log(moneyheist[2]);
console.log(myWatchedSeries)


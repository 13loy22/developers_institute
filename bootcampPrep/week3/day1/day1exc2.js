let pets = ['cat','dog','fish','rabbit','cow'];
console.log(pets[1]);

pets.push('horse');
console.log(pets);

pets.splice (3,1);// starting from the 3rd element- deletes only 1 ( rabbit)
console.log(pets);
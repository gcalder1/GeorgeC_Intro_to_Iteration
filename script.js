//+++Exercise 1+++//

const dmvQueue = ["billy", "john", "george", "vanessa", "kylo", "mary"];

console.log(dmvQueue);

for(let person = 0; person < 5; person++){
    console.log(dmvQueue[person]);
    if (person === 2){
        console.log(`Calling ${dmvQueue[person]} for nys id renewal`)
        break
    };
};

//+++Exercise 2+++//

let triangleHash = 0;

while (triangleHash < 7) {
    console.log("#".repeat(triangleHash + 1)); //.repeat loops this but adds another of the triangle hash to it
    triangleHash++; //increases till the next loop until it reaches anything less than 7
    
};

console.log("finished!")

//+++Exercise 3++//

let doubleUp = 2;

console.log("Welcome to Double Up! Input a number that is not less than 1")

if (doubleUp >= 1) {
do {
    doubleUp = doubleUp * 2;
    console.log(`Current: ${doubleUp}`)

} while (doubleUp <= 100) {
    console.log(`Uh oh, ${doubleUp} is greater than 100`);
};

console.log("Game Over!");
}

else {
    console.log("Are you trying to break me?")
}
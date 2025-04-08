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


// // Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// // const drivers2 = ["George", "Erick", "Brian", "Edwin", "Tom"]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function returnFirstTwoDrivers(array){
    let newArray = []
    newArray = array.slice(0, 2) 
    return newArray;   
}
console.log(returnFirstTwoDrivers(drivers));



function returnLastTwoDrivers(array){
    let newArray = []
    newArray = array.slice(-2)  
    return newArray;   
}
console.log(returnLastTwoDrivers(drivers));



function selectingDrivers(){
    return [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)]
} 

console.log(selectingDrivers());
console.log(selectingDrivers()[0]);

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

console.log(createFareMultiplier(2)(10));

function fareDoubler(fare){
    const doubles = createFareMultiplier(2);
    return doubles(fare);
}  

console.log(fareDoubler(10));

function fareTripler(fare){
    const triples = createFareMultiplier(3);
    return triples(fare);
}

console.log(fareTripler(10));


function selectDifferentDrivers(array, arrayFunction) {
    return arrayFunction(array);
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers()));
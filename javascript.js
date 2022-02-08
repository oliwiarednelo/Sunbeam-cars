const output = document.getElementById("output");
const rentalStart = document.getElementById("start");
const rentalEnd = document.getElementById("end");

let template = "";

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const people = urlParams.get('people');
console.log(people);
const suitcases = urlParams.get('suitcases');
console.log(suitcases);

for (const car of carlist) {
    if (people != undefined && suitcases != undefined) {
        if (people <= car.persons && suitcases <= car.suitcases) {
            template = `
    <div class="carcard">
    <img src="${car.image}" alt="Suzuki" class="carimg">
    <h2 class="h2">${car.name}</h2>
    <p class="text"> Category: ${car.category} <br> Persons: ${car.persons} <br>  Suitcases: ${car.suitcases} suitcases <br> ${car.comfort}</p>
    <div class="book">
    <h3 id="price">DKK</h3>
    <button class="button">Book now</button>
    </div>
   </div>`
        }
    }
    else {
        template = `
        <div class="carcard">
        <img src="${car.image}" alt="Suzuki" class="carimg">
        <h2 class="h2">${car.name}</h2>
        <p class="text"> Category: ${car.category} <br> Persons: ${car.persons} <br>  Suitcases: ${car.suitcases} suitcases <br> ${car.comfort}</p>
        <div class="book">
        <h3 id="price">DKK</h3>
        <button class="button">Book now</button>
        </div>
       </div>`
    }
    output.insertAdjacentHTML("beforeend", template)
}

// const queryString = window.location.search;
// console.log(queryString);

// const urlParams = new URLSearchParams(queryString);

// const people = urlParams.get('people');
// console.log(people);
// const suitcases = urlParams.get('suitcases')[0];
// console.log(suitcases);



//const insuranceCost = 495;
//const standard = 60;
//const minivan = 105;

//const rentalPrice = pricePerDay * days + insuranceCost +  

//if (car.category === "Standard") {
   // const rentalPrice = pricePerDay * days + insuranceCost + standard;
//} 
//output.insertAdjacentHTML("beforeend", )

/*function validDates(rentalStartdate, rentalEnddate){
    const rentalStart = new Date(rentalStartdate);
    const rentalEnd = new Date(rentalEnddate);
    if (rentalStart > rentalEnd){
        return false;
    } else {
        return true;
    }
}

function calculateDays(rentalStartdate, rentalEnddate) {
    const rentalStart = new Date(rentalStartdate);
    const rentalEnd = new Date(rentalEnddate);
    const timediff = rentalEnd.getTime() - rentalStart.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays
}

function calcRentalDays(days){
    const pricePerDay = 100;
    const totalPrice = pricePerDay * days;
    return totalPrice;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const datesValid = validDates(rentalStart.value, rentalEnd.value);
    if (datesValid){
        const days = calculateDays(rentalStart.value, rentalEnd.value);
        const price = calcRentalDays(days);
        console.log(price);
    }
})*/
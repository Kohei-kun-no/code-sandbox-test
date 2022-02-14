/////////////////////////
//map
/////////////////////////

var numbers = [1, 2, 3];

var doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

var doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

///////////////////////////

var cars = [
  { type: "AUDI", price: "low" },
  { type: "BENTZ", price: "high" }
];

var prices = cars.map(function (car) {
  return car.price;
});

console.log(prices);

////////////////////////////

var images = [
  { height: "34px", width: "39px" },
  { height: "54px", width: "19px" },
  { height: "83px", width: "75px" }
];

var heights = images.map(function (image) {
  return image.height;
});

//////////////////////////////

console.log(heights);

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});

console.log(speeds);

/////////////////////////////////////
//every some
/////////////////////////////////////

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function (user) {
  return user.admin;
});

console.log(admin);

/////////////////////////////////////////

var computers = [
  { name: "Apple", ram: 24 },
  { name: "Compad", ram: 4 },
  { name: "Acer", ram: 32 }
];

var allComputersCanRun = true;

var someComputersCanRun = false;

// for(var i = 0; i < computers.length; i ++) {
//   var computer = computers[i];

//   if(computer.ram < 16) {
//     allComputersCanRun = false;
//   } else {
//     someComputersCanRun = true;
//   }
// }

// console.log(allComputersCanRun);
// console.log(someComputersCanRun);

var result = computers.every(function (computer) {
  return computer.ram > 16;
});

console.log(result);

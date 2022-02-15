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

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRun = false;
  } else {
    someComputersCanRun = true;
  }
}

console.log(allComputersCanRun);
console.log(someComputersCanRun);

var result = computers.every(function (computer) {
  return computer.ram > 16;
});

console.log(result);

var names = ["けん", "はなこ", "そういちろう"];

var eve = names.every(function (name) {
  return name.length >= 3;
});

var so = names.some(function (name) {
  return name.length >= 3;
});

console.log(eve);
console.log(so);

///////////////////////////////////

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new Field("my_usename");
var password = new Field("my_password");
var birthday = new Field("my_birthday");

var fields = [username, password, birthday];

fields.every(function (field) {
  return field.validate();
});

var formIsValid = fields.every(function (field) {
  return field.validate();
});

if (formIsValid) {
  console.log("いいね");
} else {
  console.log("だめね");
}

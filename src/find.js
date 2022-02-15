/////////////////////////////
//find
/////////////////////////////

// var users = [{ name: "Minoda" }, { name: "Kohei" }, { name: "MinodaKohei" }];

// var user;

// for (var i = 0; i < users.length; i++) {
//   if (users[i].name === "Kohei") {
//     user = users[i];
//     break;
//   }
// }

// var secondUser = users.find(function(user) {
//   return user.name === "MinodaKohei"
// });

// console.log(user);

// console.log(secondUser);

////////////////////////////////

// function Car(model) {
//   this.model = model;
// }

// var cars = [
//   new Car('Audi'),
//   new Car('Bentz'),
//   new Car('LEXUS'),
// ]

// var favoriteCar = cars.find(function(car) {
//   return car.model === "Bentz";
// });

// console.log(favoriteCar);

////////////////////////////////

// var posts = [
//   { id: 1, title: "oldArticle" },
//   { id: 2, title: "newArticle" }
// ];

// var comment = [{ postId: 2, content: "good" }];

// function postForComment(posts, comment) {
//   return posts.find(function (post) {
//     return post.id === comment.postId;
//   });
// }

// console.log(postForComment(posts, comment));

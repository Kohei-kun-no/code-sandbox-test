//////////////////////////
//forEach
//////////////////////////

var colors = ["red", "blue", "green"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color) {
  console.log(color);
});

//このfunctionがコールバック関数

//////////////////////////////////

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

numbers.forEach(function (number) {
  sum += number;
});

console.log(sum);

//同じ意味 ↑は匿名関数

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

console.log(sum);

/////////////////////////////////

// function handlePosts(){
//   var posts = [
//     {id: 23, title: 'Kohei'},
//     {id: 38, title: 'Minoda'},
//     {id: 99, title: 'KoheiMinoda'}
//   ];

//   for (var i = 0; i < posts.length; i ++) {
//     console.log(posts[i]);
//   }
// }

// handlePosts();

function handlePosts() {
  var posts = [
    { id: 23, title: "Kohei" },
    { id: 38, title: "Minoda" },
    { id: 99, title: "KoheiMinoda" }
  ];

  posts.forEach(function (post) {
    console.log(post);
  });
}

handlePosts();

////////////////////////
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [
  images.forEach(function (image) {
    var area = image.height * image.width;
    console.log(area);
  })
];

console.log(areas);

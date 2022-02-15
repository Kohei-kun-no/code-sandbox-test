/////////////////////////
//filter
/////////////////////////

var products = [
  { name: "きゅうり", type: "野菜", quantity: 4, price: 10 },
  { name: "バナナ", type: "フルーツ", quantity: 1, price: 20 },
  { name: "セロリ", type: "野菜", quantity: 5, price: 30 },
  { name: "オレンジ", type: "フルーツ", quantity: 6, price: 40 }
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "フルーツ") {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

products.filter(function (product) {
  return product.type === "フルーツ";
});

//種類が野菜で、量が0個より多くて、値段が２０より大きい

products.filter(function (product) {
  return product.type === "野菜" && product.quantity > 0 && product.price > 20;
});

////////////////////////

var post = { id: 4, title: "初めての投稿" };
var comments = [
  { postId: 4, content: "いい記事ですね" },
  { postId: 3, content: "勉強になりました" },
  { postId: 4, content: "なるほど" }
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

// ////////////////////////////

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});

console.log(filteredNumbers);

////////////////////////////////////////
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true }
];

var filteredUsers = users.filter(function (user) {
  return user.admin;
});

console.log(filteredUsers);

/////////////////////////////////////////////

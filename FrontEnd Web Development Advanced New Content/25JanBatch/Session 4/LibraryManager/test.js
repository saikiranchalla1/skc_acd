var Category;
(function (Category) {
    Category[Category["Biography"] = 1] = "Biography";
    Category[Category["Poetry"] = 2] = "Poetry";
    Category[Category["Programming"] = 3] = "Programming";
})(Category || (Category = {}));
;
var favoriteCategory = Category.Programming;
console.log(favoriteCategory);

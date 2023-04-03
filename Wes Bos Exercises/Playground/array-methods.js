const toppings = [
    "Mushrooms ",
    "Tomatoes",
    "Eggs",
    "Chili",
    "Lettuce",
    "Avocado",
    "Chiles",
    "Bacon",
    "Pickles",
    "Onions",
    "Cheese",
];

const buns = ["egg", "wonder", "brioche"];

const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};

const prices = {
    hotDog: 453,
    burger: 765,
    sausage: 634,
    corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
    { comment: "Love the burgs", rating: 4 },
    { comment: "Horrible Service", rating: 2 },
    { comment: "Smoothies are great, liked the burger too", rating: 5 },
    { comment: "Ambiance needs work", rating: 3 },
    { comment: "I DONT LIKE BURGERS", rating: 1 },
];

/*
    Static Methods
  */

const wes = Array.of(..."wes");
// console.log(wes);

// Make a function that creates a range from x to y with Array.from();
function createRange(start, end) {
    const range = Array.from({ length: end - start + 1 }, function (item, index) {
        return index + start;
    });
    return range;
}

const myRange = createRange(1, 10);

// Check if the last array you created is really an array with Array.isArray();
// console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
Object.entries(meats);
Object.keys(meats);
Object.values(meats);

/*
    Instance Methods
  */

// Display all bun types with " or " - use join()
const bunOptions = buns.join(" or ");
// console.log(bunOptions);

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
// console.log(bunOptions.split(","));

// take the last item off toppings with pop()
const lastItem = toppings.pop();

// add it back with push()
toppings.push(lastItem);

// take the first item off toppings with shift()
toppings.shift();

// add it back in with unshift()
toppings.unshift(lastItem);

// Do the last four,but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 4);
newToppings = [...newToppings, toppings[toppings.length - 1]];

// Make a copy of the toppings array with slice()
const toppingsCopy = toppings.slice();
// console.log(toppingsCopy);

// Make a copy of the toppings array with a spread
const newerToppings = [...toppings];
// console.log(newToppings);

// take out items 3 to 5 of your new toppings array with splice()
toppingsCopy.splice(3, 5);

// find the index of Avocado with indexOf() / lastIndexOf()
const avoIndex = toppings.indexOf("Avocado");
// console.log(avoIndex);

// Check if hot sauce is in the toppings with includes()
// add it if it's not
// console.log(toppings.includes("hot sauce"));
toppings.push("Hot Sauce");

// flip those toppings around with reverse()
toppings.reverse();
// console.log(toppings);

/*
    Callback Methods
  */

function findByWord(word) {
    return function (singleFeedback) {
        return singleFeedback.comment.includes(word);
    };
}

// const findBurgRating = (singleFeedback) =>
//   singleFeedback.comment.includes("burg");

// find the first rating that talks about a burger with find()

const burgRating = feedback.find(findByWord("burg"));
const smoothieRating = feedback.find(findByWord("Smoothie"));

// console.log(burgRating);
// console.log(smoothieRating);

// find all ratings that are above 2 with filter()
function findByRating(rating) {
    return function (singleFeedback) {
        return singleFeedback.rating > rating;
    };
}

const goodReviews = feedback.filter(findByRating(2));

// console.log(goodReviews);

// find all ratings that talk about a burger with filter()

const burgerRatings = feedback.filter(findByWord("burg"));
// console.log(burgerRatings);

// console.log(burgRatings);

// Remove the one star rating however you like!
function removeStarRating(rating) {
    return function (singleFeedback) {
        return singleFeedback.rating !== rating;
    };
}

const noOneStars = feedback.filter(removeStarRating(1));
// console.table(noOneStars);

// or

const legitRatings = feedback.filter(
    (singleFeedback) => singleFeedback.rating !== 1
);
// console.table(legitRatings);

// check if there is at least 5 of one type of meat with some()
const hasEnoughOfOneMeat = Object.values(meats).some(
    (meatValue) => meatValue >= 5
);
// console.log(hasEnoughOfOneMeat);

// make sure we have at least 3 of every meat with every()
const hasEnoughtOfEveryMeat = Object.values(meats).every(
    (meatValue) => meatValue >= 3
);
// console.log(hasEnoughtOfEveryMeat);

// sort the toppings alphabetically with sort()
const sortedToppings = toppings.sort();
console.log(sortedToppings);

// sort the order totals from most expensive to least with .sort()
const sortedOrderTotals = orderTotals.sort((a, b) => b - a);
console.log(sortedOrderTotals);

// Sort the prices with sort()
const sortedPrices = Object.entries(prices).sort((a, b) => a[1] - b[1]);
console.table(Object.fromEntries(sortedPrices));

/*
    Looping Methods (next)
  */

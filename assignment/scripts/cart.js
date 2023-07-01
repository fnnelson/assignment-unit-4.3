console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Stretch: Add a global const named maxItems and set it to 5. ✅

const maxItems = 5;

//Create a global variable named basket and set it to an empty array. ✅

let basket = [];

console.log(basket);

console.log(`Basket is currently ${basket}`);

//Stretch: Create a function called isFull(). It should:
// return false if the basket contains less than max number of items ✅
// return true otherwise (equal or more than maxItems) ✅

function isFull(container) {
    if (container.length < maxItems) {
        return false;
    } else if (container.length >= maxItems) {
        return true;
    }
    return container;
}

//Create a function called addItem. It should:
// take an input parameter for a string item ✅
// add the new item to the global array basket. ✅
// return true indicating the item was added ✅ 

//Stretch: Update the required addItem function to:
// Use the isFull function to prevent more than maxItems from being added to the basket. ✅
// If an item was added to the array, return true ✅
// If there was no room and the item could not be added return false ✅

function addItem(item) {
    if (isFull(basket) === false) {
        basket.push(item);
        return true;
    } else {
        console.log(`The basket is already full! Cannot add ${item}!`);
        return false;
    }
}

console.log('Adding apples (expect true):', addItem('apples'));
console.log('Adding cherries (expect true):', addItem('cherries'));
console.log('Adding cheese (expect true):', addItem('cheese'));
console.log('Adding crackers (expect true):', addItem('crackers'));


console.log(basket);

//Create a function called listItems. It should:
// loop over the items in the basket array ✅
// console.log each individual item on a new line ✅

function listItems(container) {
    for (let thing in container) {
        console.log(container[thing]);
    }
    return container;
}

// function listItems(container) {
//     for (let i = 0; i < container.length; i++) {
//         console.log(container[i]);
//     }
//     return container;
// }
//I think both of these loop methods work here?

listItems(basket);
console.log(`Basket items are: ${basket}`);

//Create a function called empty. It should:
// reset the basket to an empty array ✅

function empty(container) {
    while (container.length > 0) {
        console.log('Taking out:', container.pop());
    }
    return container;
}

console.log('After removing every item... basket is now:', empty(basket));



console.log('Adding pita chips (expect true):', addItem('pita chips'));
console.log('Adding hummus (expect true):', addItem('hummus'));
console.log('Adding olives (expect true):', addItem('olives'));
console.log('Adding beer (expect true):', addItem('beer'));
console.log('Adding tzatziki (expect true):', addItem('tzatziki'));
console.log('Adding moussaka (expect false):', addItem('moussaka'));

console.log(`Basket is now: ${basket}.`);

//Stretch: Create a function called removeItem. It should:
// Take an input parameter for a string item ✅
// Use Array.indexOf to find the index of the first matching item in the basket. ✅
// Use Array.splice to remove the first matching item from the basket. ✅
// Return the item removed or null if the item was not found ✅

function removeItem(item) {
    if (basket.includes(item)) {
        basket.splice(basket.indexOf(item), 1);
        console.log(`Removed ${item}.`)
        return item;
    } else {
        return null;
    }

}

console.log('Removing beer from basket:', removeItem('beer'));
console.log('Removing tzatziki from basket:', removeItem('tzatziki'));
console.log('Removing moussaka from basket:', removeItem('moussaka'));



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}

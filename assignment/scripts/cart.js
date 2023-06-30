console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;

//Create a global variable named basket and set it to an empty array. ✅

let basket = [];

console.log(basket);

console.log(`Basket is currently ${basket}`);

function isFull(container) {
    if (maxItems > container.length) {
        return false;
    } else if (maxItems <= container.length) {
        return true;
    } else {
        return "not an array!";
    }
}

//Create a function called addItem. It should:
// take an input parameter for a string item ✅
// add the new item to the global array basket. ✅
// return true indicating the item was added ✅ (the tester doesn't like this one anymore now that I updated addItem for the Stretch Goals)


function addItem(item) {
    if (isFull(basket) == false) {
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

function listItems(container) {
    for (thing in container) {
        console.log(container[thing]);
    }
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

function empty(container) {
    while (container.length > 0) {
        console.log('Taking out:', container.pop());
    }
    return "empty";
}

console.log('After removing everything... basket is:', empty(basket));
console.log('Basket is now:', basket);


console.log('Adding pita chips (expect true):', addItem('pita chips'));
console.log('Adding hummus (expect true):', addItem('hummus'));
console.log('Adding olives (expect true):', addItem('olives'));
console.log('Adding beer (expect true):', addItem('beer'));
console.log('Adding tzatziki (expect true):', addItem('tzatziki'));
console.log('Adding moussaka (expect false):', addItem('moussaka'));

console.log(`Basket is now: ${basket}.`);

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

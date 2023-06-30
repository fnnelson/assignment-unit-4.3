console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

console.log(basket);

console.log(`Basket is currently ${basket}`);

function addItem(item) {
    basket.push(item);
    return true;
}

console.log('Adding apples (expect true):', addItem('apples'));
console.log('Adding cherries (expect true):', addItem('cherries'));
console.log('Adding cheese (expect true):', addItem('cheese'));
console.log('Adding crackers (expect true):', addItem('crackers'));


console.log(basket);

console.log(`Basket is now ${basket}`);

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

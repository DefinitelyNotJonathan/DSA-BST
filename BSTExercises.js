const BinarySearchTree = require('./BST');

function main() {
    let bst = new BinarySearchTree;
    bst.insert("3", 3);
    bst.insert("1", 1);
    bst.insert("4", 4);
    bst.insert("6", 6);
    bst.insert("9", 9);
    bst.insert("2", 2);
    bst.insert("5", 5);
    bst.insert("7", 7);
    console.log(bst);
}
main();

function anotherMain() {
    let bst = new BinarySearchTree;
    bst.insert("E", "E");
    bst.insert("A", "A");
    bst.insert("S", "S");
    bst.insert("Y", "Y");
    bst.insert("Q", "Q");
    bst.insert("U", "U");
    bst.insert("E", "E");
    bst.insert("S", "S");
    bst.insert("T", "T");
    bst.insert("I", "I");
    bst.insert("O", "O");
    bst.insert("N", "N");

    console.log(bst);
}
anotherMain();

// function isBST(t) {
//     if (t > isBST(t.right) || t < isBST(t.left)) {
//         return false
//     }
//     else {
//         return true
//     }
// }

// //this is almost there. How does one look at a second level of a bst (t.right.right)?
// //other wise, how does one return to the previous node? (if on t.right, how to go back up a level)?
// function thirdLargest(t) {
//     if (!t.right) {
//         return t.left.value
//     }
//     return thirdLargest(t.right)

// }


// //its almost like we need two simultaneous functions in this from the get go?
// //we have to check for a left for every right we make when we check the right side
// //we also have to check for a right for every left we make when we check the left side

// function isBalanced(t) {
//     if (!t.parent) {

//     }
// }

// function isSame(t) {
    
// }
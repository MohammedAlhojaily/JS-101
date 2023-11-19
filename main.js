let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
];

function bookInfo(bookId) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === bookId) {
            console.log("Book ID: " + books[i][0]);
            console.log("Title: " + books[i][1]);
            console.log("Author: " + books[i][2]);
            console.log("Price: $" + books[i][3]);
            console.log("Quantity: " + books[i][4]);
            return;
        }
    }
    console.log("Book not found.");
}

function sellBook(bookTitle, quantity, customerBalance) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][1] === bookTitle && books[i][4] >= quantity) {
            let totalCost = books[i][3] * quantity;
            if (customerBalance >= totalCost) {
                books[i][4] -= quantity; 
                console.log("Invoice:");
                console.log("Book: " + bookTitle);
                console.log("Quantity: " + quantity);
                console.log("Total Cost: $" + totalCost);
                console.log("Remaining Balance: $" + (customerBalance - totalCost));
            } else {
                console.log("Not enough balance to complete the purchase.");
            }
            return;
        }
    }
    console.log("Book not available.");
}

bookInfo(4); 
sellBook("Zero to One", 2, 100); 

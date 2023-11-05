function order_sandwich(...items: string[]): void {
    console.log("You have ordered a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Calling the function with different numbers of arguments
order_sandwich("Bread", "Ham", "Cheese", "Lettuce");
order_sandwich("Bread", "Turkey", "Tomato");
order_sandwich("Bread", "Peanut Butter", "Jelly");

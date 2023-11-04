let current_users: string[] = ["Izzah", "Ali", "Ayesha", "Waheeb", "John"];
let new_users: string[] = ["Ali", "Sarah", "Ayesha", "Emma", "Ella"];

for (let new_username of new_users) {
    let isUsernameTaken = current_users.some(username => username.toLowerCase() === new_username.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}

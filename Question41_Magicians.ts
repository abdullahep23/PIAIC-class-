function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];

show_magicians(magicianNames);

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}

let magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller"];

let greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);

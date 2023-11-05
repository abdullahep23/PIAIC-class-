interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

// Creating three different albums
let album1 = make_album("Artist1", "Album Title 1");
let album2 = make_album("Artist2", "Album Title 2", 10);
let album3 = make_album("Artist3", "Album Title 3", 15);

console.log(album1);
console.log(album2);
console.log(album3);

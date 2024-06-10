// define the makeAlbum function
function makeAlbum(artistName, albumTitles, tracks) {
    var album = {
        artist: artistName,
        title: albumTitles,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function and creating 3 variables with different values
var album1 = makeAlbum("Hamza", "Album tittle 1");
var album2 = makeAlbum("Usman", "Album tittle 2");
var album3 = makeAlbum("Ali", "Album tittle 3", 10);
// print values of our objects created my function
console.log(album1);
console.log(album2);
console.log(album3);

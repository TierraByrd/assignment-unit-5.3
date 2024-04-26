console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];
console.log('My collection: ', myCollection);

function addToCollection(collection, title, artist, yearPublished) {
  const newNew = {
    title: title, 
    artist: artist, 
    yearPublished: yearPublished
   };
  

  collection.push(newNew);
  return newNew;
  }
addToCollection(myCollection, 'Purple Rain', 'Prince', 1984);
addToCollection(myCollection, 'Never Broke Again', 'NBA YoungBoy', 2018 );
addToCollection(myCollection, 'The Emancipation of Mimi', 'Mariah Carey', 2005);
addToCollection(myCollection, 'As I Am', 'Alicia Keys', 2007);
addToCollection(myCollection, 'Ambition', 'Wale', 2011);
addToCollection(myCollection, 'Hood Hottest Princess', 'Sexy Red', 2023);
console.log('My Collection is now', myCollection);



function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    const album = collection[i];
    console.log( album.title + ' by ' + album.artist +  ' published in ' + album.yearPublished);
  }
}
showCollection(myCollection);










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}

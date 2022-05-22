// regular expression syntax
// /pattern/modifiers;

// /Bangladesh/i;

// normal search without regular expression
const note = "I love Bangladesh";
console.log(note.search("Bangladesh"));

// with regular expression
const myNote = "I love my Country";
console.log(myNote.search(/country/i));

// replace with regular expression
const myNote2 = "I love my CITY. My city name is Mymensingh";
console.log(myNote2.replace(/city/ig, "District"));
const lyrics = 'tmi bondhu kala Pakhi ami jeno ki bosonto kale tumy bolte pari ni, sada sada kala';

const searchString = 'PaKhi'
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())
console.log(doesExist);
console.log(doesExistOneLine);

/----------------------------------------------/

//index of

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tmi'));

if(lyrics.indexOf('sada') !== -1){
    console.log('aita ace');
}
else{
    console.log('aita nai');
}

//startsWith
console.log(lyrics.startsWith('tmi'));

//endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.paf');
console.log(fileName);
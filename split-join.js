const lyrics = 'tmi bondhu kala Pakhi. ami jeno ki. bosonto kale tumy bolte pari ni. sada sada kala';
const parts = lyrics.split( ' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('')
console.log(chars);

const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 =lyrics.substring(5, 8);
console.log(partial2);

const lines = [
    'tmi bondhu kala Pakhi',
    'ami jeno ki',
    'bosonto kale tumy bolte pari ni',
    'Sada sada kala'
    
  ];

  const newSong = lines.join('. ');
  console.log(newSong);
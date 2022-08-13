function reverseWord(spech){
    const words = spech.split(' ');
    const result = [];
    // [ 'i', 'am', 'a', 'good', 'boy' ]
    for ( let i = words.length-1; i >=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'i am a good boy';
 const herString = reverseWord(myString);
 console.log(herString);
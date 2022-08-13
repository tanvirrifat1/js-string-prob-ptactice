function maxArrayOf(number){
    let largest = number[0];
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 265];
const tollest = maxArrayOf(heights);
console.log('tollest person',tollest);

//homework : write a function to get the lowest number in an array

function minArrayOf(number){
    let smallest = number[0];
    for(let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}

const heights2 = [167, 190, 120, 165, 137, 265];
const tollest2 = minArrayOf(heights2);
console.log('tollest person',tollest2);
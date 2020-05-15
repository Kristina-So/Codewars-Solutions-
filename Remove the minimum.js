//https://www.codewars.com/kata/563cf89eb4747c5fb100001b
// Remove the minimum


function removeSmallest(numbers) {
    const arr = [];
    let min = Math.min(...numbers);
    let index = numbers.indexOf(min);
    for( let i = 0; i < numbers.length; i++){
        if(i !== index)
            arr.push(numbers[i]);
    }
    return arr;
}
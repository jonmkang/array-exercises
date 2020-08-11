let maxSubArray = function(arr) {
    let maxEndingHere = 0;
    let maxSoFar = 0;
    for (let i=0; i<arr.length; i++) {
        let item = arr[i];
        maxEndingHere = Math.max(0, maxEndingHere + item);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        console.log(item, maxEndingHere, maxSoFar);
    }
    return maxSoFar;
};

console.log(maxSubArray([4,6,-3,5,-2,1]))
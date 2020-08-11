
function filter(arr){
    let filtered = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 5){
            filtered.push(arr[i])
        }
    }
    return filtered
}

console.log(filter([4, 6, -3, 5, -2, 1]))
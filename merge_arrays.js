function merge(arr1, arr2){
    let idx1 = 0;
    let idx2 = 0;
    let merged = [];

    while(idx1 < arr1.length && idx2 < arr2.length){
        if(arr1[idx1] < arr2[idx2]){
            merged.push(arr1[idx1]);
            idx1++;
        }else{
            merged.push(arr2[idx2]);
            idx2++;
        }
    }

    if(idx1 >= arr1.length){
        while(idx2 < arr2.length){
            merged.push(arr2[idx2])
            idx2++;
        }
    }else{
        while(idx1 < arr1.length){
            merged.push(arr1[idx1])
            idx1++;
        }
    }
    console.log(merged)
    return merged;
}

merge([1, 3, 6, 8, 11, 15, 15, 15, 16, 17, 18], [2, 3, 5, 8, 9, 10, 12, 13, 14, 15, 16])
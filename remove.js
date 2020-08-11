function remove(string, toRemove){
    let new_string = '';

    for (let c of string){
        let count = 0;
        for(let b of toRemove){
            if(c === b){
                count++;
            }
        }
        if(count === 0)
            new_string += c;
    }
    console.log(new_string)
    
    return new_string;
}

remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')
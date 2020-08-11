function urlify(string){
    let url = ''
    for (let c of string){
        if(c === ' '){
            url += '%20'
        }else{
            url += c
        }
    }
    console.log(url)
    return url
}

urlify("www.thinkful.com /tauh ida parv een")
urlify("tauhida parveen")
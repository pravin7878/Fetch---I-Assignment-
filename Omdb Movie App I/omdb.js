let inp = document.getElementById('search-inp')
let btn = document.getElementById('search-btn')
let container = document.getElementById('container')
// console.log(inp,btn)
btn.addEventListener('click',()=>{
    console.log(inp.value)
    fetch( 'http://www.omdbapi.com/?i=tt3896198&apikey=34d3d837')
    .then((res)=>{
        res.json().then((data)=>{
            console.log(data)
            if(inp.value == data.Title ){
                console.log('hello')
                displaydata(data)
            }
            else{
                container.innerText = `data not found 
                search right movie titel`
            }
           



        //     console.log(data.Title)
        //    console.log(data.Actors);

        // let output=``
        // output+=`
        // <img src="${data.Poster}" alt="">
        // <h2>${data.Title}</h2>
        // <h4>${data.Actors}</h4>
        // `
        // container.innerHTML = output
        })
    })
      
})

function fetchdata(){
    // fetch( 'http://www.omdbapi.com/?i=tt3896198&apikey=34d3d837')
    // .then((res)=>{
    //     res.json().then((data)=>{
    //         console.log(data)
    //     //     console.log(data.Title)
    //     //    console.log(data.Actors);

    //     // let output=``
    //     // output+=`
    //     // <img src="${data.Poster}" alt="">
    //     // <h2>${data.Title}</h2>
    //     // <h4>${data.Actors}</h4>
    //     // `
    //     // container.innerHTML = output
    //     })
    // })
}

function displaydata (data){
    let output=``
    output+=`
    <img src="${data.Poster}" alt="">
    <h2>${data.Title}</h2>
    <h4>Actor:- ${data.Actors}</h4>
    <p>Writer:- ${data.Writer}</p>
    <p>Year:-${data.Year}</p>
    `
    container.innerHTML = output
}
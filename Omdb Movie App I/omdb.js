let inp = document.getElementById('search-inp')
let btn = document.getElementById('search-btn')
let container = document.getElementById('container')

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
        })
    })
    .catch((err)=>{
        container.innerText = 'server down'
    })
      
})



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
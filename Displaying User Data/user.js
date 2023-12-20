let fetchbtn = document.querySelector('button')
let div = document.querySelector('div')

fetchbtn.addEventListener('click', function () {
    fetch('https://reqres.in/api/users')
        .then(function (res) {
            res.json().then((info) => {
             
                let result = ''
                info.data.forEach(ele => {
                    console.log(ele)
                   
                    result += `
                    <div>
                     <img src="${ele.avatar}" alt="" class="userimg">
                     <h3 id="name">${ele.first_name} ${ele.last_name}</h3>
                     <p id="email">${ele.email}</p>
                    </div>
                    `
                });

                div.innerHTML = result
                
            })
        })
        .catch(function(err){
            console.log('some err in the server')
        })
})


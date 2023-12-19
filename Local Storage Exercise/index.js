let myform = document.querySelector('form')
// console.log(myform)
// let input = document.querySelectorAll('input')
// console.log(input)
let username = document.getElementById('name')
let userage = document.getElementById('age')
let useremail = document.getElementById('email')
let usermobnumber = document.getElementById('mobile')
// let submit = document.querySelector('input')
let div = document.querySelector('.showbtn')
let showbtn = document.createElement('button')

myform.addEventListener('submit', function (e) {
    e.preventDefault()
    let arr = JSON.parse(localStorage.getItem('data')) || [];
    //     let email = e.target.email.value
    //    let mobnumber = e.target.mabile.value
    let data = {}
    data.name = username.value
    data.age = userage.value
    data.email = useremail.value
    data.mobnumber = usermobnumber.value
    arr.push(data)
    // console.log(arr)
    localStorage.setItem('data', JSON.stringify(arr))
    // let div = document.querySelector('.showbtn')
    // let showbtn = document.createElement('button')
    showbtn.innerText = 'Show Data'
    div.append(showbtn)
    showbtn.addEventListener('click', function () {
        showdata(arr)
        let th1 = document.querySelector('#th1')
        th1.innerText = 'Name'
        let th2 = document.querySelector('#th2')
        th2.innerText = 'Age'
        let th3 = document.querySelector('#th3')
        th3.innerText = 'Email'
        let th4 = document.querySelector('#th4')
        th4.innerText = 'Mob.NO.'
    })

})


function showdata(arr) {
    let tbody = document.querySelector('tbody')
    //   tbody.innerHTML ==null;
    let x = ``;
    arr.map((ele, ind) => {
        x += `
     <tr>
         <td>${ele.name}</td>
         <td>${ele.age}</td>
         <td>${ele.email}</td>
         <td>${ele.mobnumber}</td>
   </tr>
     `
    })

    console.log(x)
    tbody.innerHTML = x


};



console.log('hello world')



const tax = 40
const vat = 40

// let total = vat / tax

// console.log(total)

let total = 197
let firstTimeUser = true

let canIhaveDiscount = total == 200 || firstTimeUser
console.log(canIhaveDiscount)

let isEqual = total === 197

let provideDiscount = firstTimeUser != true



let firstname = "Ruben"
let surname = "Baron"
console.log(firstname + surname)

//output = Ruben Baron

function calculate(num1, num2) {
    let sum = num1 + num2
    let mul = num1 * num2
    let sub = num1 - num2
    let div = num1 / num2

    return sum + mul + sub + div
}

console.log(calculate(10,20))
console.log(calculate(55,65))

let names = ["Ruben"]

window.addEventListener('load', (event)=>{
    const h1=document.getElementById("unique")
    h1.innerHTML = "changed using js"


    const button = document.querySelector("btn")

button.addEventListener('click', (event) => {
    h1.innerHTML = "new text"
    h1.style.colour = "blue"
    setTimeout(() => {
        h1.innerHTML = "Changed using js"
    }, 2000);

})

const button2 = document.getElementById("new-element")

button.addEventListener('click', (event)=>{
    const NewElement= document.createElement("a")
    NewElement=innerHTML = "New link"
    document.body.appendChild("NewElement")

})

const form = document.getElementById("contact-form")

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    const formdata= new formdata(form)

    const data = object.fromEntries(fromdata.entries())
    console.log("data")

    console.log("formdata")


})



})



window.addEventListener('load', (event) =>{
    const form = document.querySelector("#todo-form")

    const list = document.querySelector("#list-items")

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        const li = document.createElement("li")
        li.innerHTML = data.todo
        list.appendChild(li)
    }) 

    const counter = document.querySelector("#counter")

    const Number = document.querySelector("#list-numbers")

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const counterData = new counterData(counter)
        const data = Object.fromEntries(counterData.entries())

        const li = document.createElement("li")
        li.innerHTML = data.Number
        list.appendChild(li)
    }) 
})

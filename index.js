

const output = document.querySelector(".output")
const users = []

const btnClicked =() =>{
    alert("Detete Cliecked")
}

fetch("http://localhost:3000/users")
.then(response =>{
    return response.json()
})
.then(data=>{
  data.forEach(element => {
    output.innerHTML += `<tr>
            <td>${element.id}</td>
            <td><img  src="https://i.ibb.co/f0hFV68/myPic.jpg" alt=""></td>
            <td>${element.surname}</td>
            <td>${element.lastname}</td>
            <td>${element.email}</td>
            <td>${element.age}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="">Delete </button>
                <button class="btn btn-success btn-sm">Edit </button>
            </td>
        </tr>`
  });
})


document.querySelector("#delBtn").addEventListener("click", btnClicked()) 


document.querySelector("#addBtn").addEventListener("click", (e) =>{
    e.preventDefault()
    const surname = document.querySelector("#surname").value
    const lastname = document.querySelector("#lastname").value
    const email = document.querySelector("#email").value
    const age = document.querySelector("#age").value

    const data = {

        "surname":surname,
        "lastname":lastname,
        "email":email,
        "profileImage":"https://i.ibb.co/f0hFV68/myPic.jpg",
        "age":age
    }

    fetch("http://localhost:3000/users", data)
    .then(response =>{
        return response.json()
    }).then(data =>{
        console.log(data);
    }).catch(error =>{
        console.log(error);
    })
})
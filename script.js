let users_list = document.getElementById("users")
let posts_list = document.getElementById("posts")

function getAllUsers(){

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            for (user of users) {
                users_list.innerHTML += `<div class="user_bloc" id="user_${user.id}" onclick="userClicked(${user.id}, this)">
                    <h3 class="user_name">${user.name}</h3> 
                    <p class="user_email">${user.email}</p>
                </div>` 
            
            }
        })

}
getAllUsers()

function getPostsByUser(userId) {

    fetch('https://jsonplaceholder.typicode.com/posts?userId='+userId)
        .then((response) => response.json())
        .then((posts) => {
            posts_list.innerHTML = ""

            for (post of posts) {
            posts_list.innerHTML += `<div class="post_bloc" id="${post.id}">
                <h3 class="post_title"> ${post.title} </h3>
                <p class="post_body"> ${post.body} </p>
             </div>`  
            }
        })
}

getPostsByUser(1)

function userClicked(id, elm){
    getPostsByUser(id)

    let users_selected = document.getElementsByClassName("active")

    for(element of users_selected){
        element.classList.remove("active")
    }
    elm.classList.add("active")
}


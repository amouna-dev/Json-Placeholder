let users_list = document.getElementById("users")
let posts_list = document.getElementById("posts")
let names = Array()

function getAllUsers(){
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function(){

        if(request.status >= 200 && request.status < 300){
            let users = request.response
            
            for (user of users) {
                users_list.innerHTML += `<div class="user_bloc" id="user_${user.id}" onclick="userClicked(${user.id}, this)">
                    <h3 class="user_name">${user.name}</h3> 
                    <p class="user_email">${user.email}</p>
                </div>` 
             
            }
        }else
            alert("Error")
        
    }
}
getAllUsers()

function getPostsByUser(userId) {
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId)
    request.responseType = "json"
    request.send()
    request.onload = function(){

        if(request.status >= 200 && request.status < 300){
            let posts = request.response
            posts_list.innerHTML = ""

            for (post of posts) {
            posts_list.innerHTML += `<div class="post_bloc" id="${post.id}">
                <h3 class="post_title"> ${post.title} </h3>
                <p class="post_body"> ${post.body} </p>
             </div>`  
            }

        }else
            alert("Error")
        
    }
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
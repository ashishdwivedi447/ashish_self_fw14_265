// Write All Home  Page Script Here
document.querySelector("form").addEventListener("submit",submit);
let data=[];
function submit(event){
event.preventDefault();

let movie_name=document.querySelector("#name").value;
let actor_name=document.querySelector("#mainActor").value;
let des=document.querySelector("#desc").value;
let date=document.querySelector("#release").value;
let category=document.querySelector("#category").value;
let price=document.querySelector("#price").value;
//console.log(movie_name,actor_name,des,date,category,price);

let movie={
    movie_name:movie_name,
    actor_name:actor_name,
    des:des,
    date:date,
    category:category,
    price:price,
}

data.push(movie);
console.log(data);
localStorage.setItem("movie-list" ,JSON.stringify(data));

}
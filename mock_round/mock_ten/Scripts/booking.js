// Write All `All Movies`  Page Script Here

let movie_data=JSON.parse(localStorage.getItem("movie-list"))||[];

let buy=[];


let total_movie=movie_data.length;


displaytable(movie_data);

function displaytable(){

    document.querySelector("tbody").innerHTML="";
    movie_data.map((item,index)=>{
       // console.log(item)
    
        let tr=document.createElement("tr");
        let name=document.createElement("td");
        name.innerText=item.movie_name;
        let actor=document.createElement("td");
        actor.innerText=item.actor_name;
        let des=document.createElement("td");
        des.innerText=item.des;
        let date=document.createElement("td");
        date.innerText=item.date;
        let category=document.createElement("td");
        category.innerText=item.category;
    
        let price=document.createElement("td");
        price.innerText=item.price;
        let buy=document.createElement("td");
        let button=document.createElement("button");
        button.innerText="Buy";
        button.id="buy"
        button.addEventListener("click",()=>{
    deleterow(item,index);
        })
    
        buy.append(button);
        

        tr.append(name,actor,des,date,category,price,buy);
        document.querySelector("tbody").append(tr);
        
    })
    document.querySelector("#movie-count").innerText=total_movie;
}

function deleterow(item,index){

    buy.push(item);
    localStorage.setItem("buy-list" ,JSON.stringify(buy));
    movie_data.splice(index,1);
    localStorage.setItem("movie-list" ,JSON.stringify(movie_data));
    displaytable(movie_data);
}


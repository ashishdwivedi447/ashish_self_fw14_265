// Write All `My Movies`  Page Script Here


let purchased=JSON.parse(localStorage.getItem("buy-list"));

displaytable(purchased);

function displaytable(purchased){

    purchased.map((item)=>{
        console.log(item);

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

        tr.append(name,actor,des,date,category,price,);

        document.querySelector("tbody").append(tr);
    })
}
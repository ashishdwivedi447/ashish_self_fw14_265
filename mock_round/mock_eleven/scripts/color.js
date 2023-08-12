function getAll(){
    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:css&order=desc&sort=stargazers_count`)
    .then((res)=>res.json())
    .then((data)=>{
       
        displayData(data.items);
    })
}

getAll();

function displayData(data){
console.log(data);

data.map((item)=>{
    let maindiv=document.createElement("div");
    maindiv.id="card";
    maindiv.addEventListener("click" ,()=>{
        personalrepo(item);
    })
    let image=document.createElement("img");
    image.src=item.owner.avatar_url;
    image.id="image"
    let namelanguagediv=document.createElement("div");
    namelanguagediv.id="namelanguagediv";

    let name=document.createElement("p");
    name.innerText=item.name;
    name.id='name'
    let language=document.createElement("p")
    language.innerText=item.language;
    language.id="language"
    namelanguagediv.append(name,language);
    let starforkdiv=document.createElement("div");
    starforkdiv.id="starforkdiv"

    let star=document.createElement("div");
   star.innerText=item.stargazers_count+" "+"star";

   let fork=document.createElement("div");
   fork.innerText=item.forks_count+" "+"forks";

   starforkdiv.append(star,fork);
   maindiv.append(image,namelanguagediv,starforkdiv);
   document.querySelector("#appenddata").append(maindiv);
})
}

function personalrepo(item){
    window.open(item.html_url);
}
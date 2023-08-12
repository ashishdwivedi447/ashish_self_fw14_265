
let globaldata=[];
function getcarData(){
    fetch("https://sixthmock.herokuapp.com/cars")
    .then((res)=>res.json())
    .then((data)=>{
        //console.log(data);
        globaldata=data;
        displayData(globaldata)
    })
}

getcarData();

 let appendcont=document.querySelector("#appendData");
function displayData(globaldata){
    //console.log(globaldata);
      appendcont.innerHTML=null;
    globaldata.map((item)=>{
       console.log(item);

       let maindiv=document.createElement("div");
       maindiv.id="boxcontainer"
       let image=document.createElement("img");
       image.src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/106257/venue-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75";
       image.id="image";
       let brandyeardiv=document.createElement("div");
       brandyeardiv.id="brand_year";
       let brand=document.createElement("div");
       brand.innerText=item.brand;
       let year=document.createElement("div");
       year.innerText=item.year;
       brandyeardiv.append(brand,year);

       let type=document.createElement("div");
       type.innerText=item.type;

       let des=document.createElement("div");
       des.innerText=item.Description;

       let kmpricediv=document.createElement("div");
       kmpricediv.id="kmprice";
       let km=document.createElement("div");
       km.innerText= "KM:"+""+item.kms;
       let price=document.createElement("div");
       price.innerText="PRICE:"+" "+item.Price;
       kmpricediv.append(km,price);

       let buttonsdiv=document.createElement("div");
       buttonsdiv.id='buttonsdiv'

       let deletediv=document.createElement("div");
       let deletebutton=document.createElement("button");
       deletebutton.addEventListener("click",()=>{
        deleteData(item.id);
       })
       deletebutton.innerText="Delete";
       deletediv.append(deletebutton);

       let editdiv=document.createElement("div");
       let editbutton=document.createElement("button");
       editbutton.innerText='EDIT'
       editbutton.addEventListener("click",()=>{
        editprice(item.id);
       })
       editdiv.append(editbutton);

       let wishdiv=document.createElement("div");
       let wishbutton=document.createElement("button");
       wishbutton.innerText="WISH"
       wishbutton.addEventListener("click",()=>{
        wishlist(item);
       })
       wishdiv.append(wishbutton);

       buttonsdiv.append(deletediv,editdiv,wishdiv);

       maindiv.append(image,brandyeardiv,type,des,kmpricediv,buttonsdiv)

       appendcont.append(maindiv);

       
    })
}


function deleteData(id){
    fetch(`https://sixthmock.herokuapp.com/cars/${id}`,{
        method:'DELETE'
    })
    .then(()=>getcarData());
}


function editprice(id){
    localStorage.setItem("carid" ,JSON.stringify(id));

   // console.log(id);


   window.location.href="edit.html"
}

const sortprice= async(value)=>{
   // console.log(value,"Iam Value")
    let res = await fetch('https://sixthmock.herokuapp.com/cars')
    data = await res.json()
   // console.log("Filter",data)

   // console.log(value);

    if('high'==value){
       data.sort((a,b)=>Number(b.Price) - Number(a.Price))
    }
    else{
       data.sort((a,b)=>Number(a.price) - Number(b.price))
    }
    displayData(data)

  }

  const sortkm= async(value)=>{
    // console.log(value,"Iam Value")
     let res = await fetch('https://sixthmock.herokuapp.com/cars')
     data = await res.json()
    // console.log("Filter",data)
 
    // console.log(value);
 
     if('high'==value){
        data.sort((a,b)=>Number(b.kms) - Number(a.kms))
     }
     else{
        data.sort((a,b)=>Number(a.kms) - Number(b.kms))
     }
     displayData(data)
 
   }

   const filter= async(value)=>{
    // console.log(value,"Iam Value")
    let res = await fetch('https://sixthmock.herokuapp.com/cars')
    data = await res.json()
    console.log("Filter",data)

    let arr=[]
    data.map((el)=>{
        if(el.brand == value){
            arr.push(el)
        }
    })
    displayData(arr)
  }


  function wishlist(item){
    fetch("https://sixthmock.herokuapp.com/wishlisted_cars",{
        method: "POST",
    
        body: JSON.stringify(item),
    
        headers: {
            "Content-type": "application/json"
        }
       })
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data)
       })
    }

  
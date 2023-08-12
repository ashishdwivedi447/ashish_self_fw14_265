function getwishData(){
    fetch("https://sixthmock.herokuapp.com/wishlisted_cars")
    .then((res)=>res.json())
    .then((data)=>{
        //console.log(data);
      
        displaywishData(data)
    })
}

getwishData();

let appendcont=document.querySelector("#wishlistcont");

function displaywishData(data){
    data.map((item)=>{
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
        
       maindiv.append(image,brandyeardiv,type,des,kmpricediv)

       appendcont.append(maindiv);
}
    )
}
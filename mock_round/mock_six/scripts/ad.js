
function postData(){


    setTimeout(()=>{
     document.querySelector(".otp_container").style.display="block";

    },2000)
   
    let brand=document.querySelector("#brand").value;
    let type=document.querySelector("#type").value;
    let year=document.querySelector("#year").value;
    let kms=document.querySelector("#kms").value;
    let description=document.querySelector("#description").value;
    let price=document.querySelector("#price").value;

   // console.log(brand,type,year,kms,description,price);
   fetch("https://sixthmock.herokuapp.com/cars",{
    method: "POST",

    body: JSON.stringify({
       "brand":brand,
       "year":year,
       "type":type,
       
       "kms":kms,
       "Description":description,
       "Price":price,
    }),

    headers: {
        "Content-type": "application/json"
    }
   })
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data)
   })
}

function closeotpbutton(){
    document.querySelector(".otp_container").style.display="none";
}
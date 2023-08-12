
  let id = JSON.parse(localStorage.getItem('carid'))

  function editData(){
    let val = document.getElementById("editprice").value;
    console.log(id,val)
  


fetch(`https://sixthmock.herokuapp.com/cars/${id}`,{

method: "PATCH",
body: JSON.stringify({
    "Price":val
}),
headers: {
"Content-type": "application/json"
}
})
.then((res)=>
res.json()
)
.then((data)=>{
console.log(data);
alert("Successfully Updated")
window.location.href='car.html'
})
.catch((error)=>console.log(error))
}
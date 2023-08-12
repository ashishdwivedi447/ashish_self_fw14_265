function Product(name,brand,price,description,sold=false) {
  // Complete the constructor function
  this.name=name;
  this.brand=brand;
  this.price=price;
  this.description=description;
  this.sold=sold;
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus
Product.prototype.changePrice=function(value){
this.price=value;
}

Product.prototype.toggleStatus=function(){
  this.sold=!this.sold;
}

// Do not change this
export default Product;

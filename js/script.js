function Order(flavour, toppings, size, crust, pieces) {
  this.flavour = flavour;
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.pieces = pieces;
}

Order.prototype.cost = function () {
  if (this.size === "large") {
    let price = 1200;
  } else if (this.size === "medium") {
    let price = 900;
  } else if(this.size === "small"){
    let price = 700;
  }

  if(this.toppings=== "olives"){
      let toppingsPrice = 120;
    
  }
  else if(this.toppings === "mushroom"){
      let toppingsPrice = 150;
  }
  else if (this.toppings === "pineapple"){
      let toppingsPrice = 180;
  }
  else if(this.toppings === "tomato"){
      let toppingsPrice = 160;
  }
  else if(this.toppings === "veggie-salad"){
      let toppingsPrice = 170;
  }
 
  if(this.crust === "gluten-free"){
      let crustPrice = 50;
  }
  else if (this.crust === "crispy"){
      let crustPrice = 80;
  }
 else if (this.crust === "stuffed"){
     let crustPrice =  70;
 }
 return (price + toppingsPrice + crustPrice )* this.pieces;
};

$("#order-form").submit(function(event){
    event.preventDefault();
    let flavour = $("#flavour").val();
    let toppings = $("#toppings").val();
    let size = $("#sizee").val();
    let crust = $("#crust").val();

   
})

// price();
console.log(price)

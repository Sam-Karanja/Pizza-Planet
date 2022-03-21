function Order(flavour, toppings, size, crust, pieces) {
  this.flavour = flavour;
  this.toppings = toppings;
  this.size = size;
  this.crust = crust;
  this.pieces = pieces;
}

Order.prototype.cost = function () {
  if (this.size === "large") {
    var sizePrice = 1200;
  } else if (this.size === "medium") {
    var sizePrice = 900;
  } else if(this.size === "small"){
    var sizePrice = 700;
  }

  if(this.toppings=== "olives"){
      var toppingsPrice = 120;
    
  }
  else if(this.toppings === "mushroom"){
      var toppingsPrice = 150;
  }
  else if (this.toppings === "pineapple"){
      var toppingsPrice = 180;
  }
  else if(this.toppings === "tomato"){
      var toppingsPrice = 160;
  }
  else if(this.toppings === "veggie-salad"){
      var toppingsPrice = 170;
  }
 
  if(this.crust === "gluten-free"){
      var crustPrice = 50;
  }
  else if (this.crust === "crispy"){
      var crustPrice = 80;
  }
 else if (this.crust === "stuffed"){
     var crustPrice =  70;
 }
 return (sizePrice + toppingsPrice + crustPrice )* this.pieces;
};

$("#order-form").submit(function(event){
    event.preventDefault();
    var flavour = $("#flavour").val();
    var toppings = $("#toppings").val();
    var size = $("#sizee").val();
    var crust = $("#crust").val();
    var pieces = parseInt($('#pieces').val());
    

    var pizzaOrder = new Order(flavour, toppings, size, crust, pieces);
    alert(pizzaOrder.cost());
    $(".deliver").show();


    $("#deliver").click(function(){
        $(".location").show();
        $(".deliver").hide();
        // alert(pizzaOrder.cost()+ 200);
    })

    $("#pick").click(function(){
        alert("Your order will be ready for pickup in 30 mins")
    })

    $("#enter").click(function(){
        alert(pizzaOrder.cost()+ 200);
        $(".location").hide()
       
    })

    var flavour = $("#flavour").val(" ");
    var toppings = $("#toppings").val(" ");
    var size = $("#sizee").val(" ");
    var crust = $("#crust").val(" ");
    var pieces = parseInt($('#pieces').val(" "));
     
})


function calculate(size, crust, toppings, amount, price){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.amount = amount;
    this.price = price;
}
calculate.prototype.cost = function(){ 

    if(this.size === "Large"){
        var cost = 1200;
    }else if(this.size === "Medium"){
        var cost = 900;
    }else if(this.size ==="Small"){
        var cost = 700;
    }

    if(this.crust === "stuffed"){
        var crustPrice = 200;
    }else if (this.crust === "gluten-free"){
        var crustPrice = 150;
    }else if (this.crust === "crispy"){
        var crustPrice = 250;
    }

alert("You have selected + this.pieces ")

    // let checkboxes = $('input[name="toppings"]:checked').length;
    // if (checkboxes<= 4){
    //     if(this.size === "Large"){
    //         var toppingsPrice = checkboxes * 150;
    //     }else if(this.size === "Medium"){
    //         var toppingsPrice = checkboxes * 100;
    //     }else if(this.size ==="Small"){
    //         var toppingsPrice = checkboxes * 50;
    //     }
    //     return (sizePrice + crustPrice + toppingsPrice)* this.amount;
    // }else{
        
    //     alert("You've selected more than 4 toppings!!");
        
    // }  
}

calculate.prototype.name =function(){
    let pizzaName =`${this.amount} ${this.size} ${this.crust} ${'crusted pizza, with'} ${this.toppings} ${"for the topping."}`;
    console.log(pizzaName);
}


$("#button1").click(function(){
    alert("Your message has been received. Thank you for reaching out to us")
})

$("#checkout").click(function(){
    document.write("i love coding")
})
function PizzaOrder(size,crust,topping,quantity,delivery){
  this.crust=crust;
  this.size=size;
  this.topping=topping;
  this.quantity=quantity;
  this.delivery=delivery;
}

PizzaOrder.prototype.totalCost=function(){ 
  return (this.crust +this.size+this.topping+this.delivery)*this.quantity 
};

$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();

    var selectedSize= parseFloat($(this).find("select.pizza-size").val());
    var selectedCrust=parseFloat($(this).find("select.pizza-crust").val());
    var selectedToppings=parseFloat($(this).find("select.pizza-toppings").val());
    var inputtedQuantity=parseFloat($("input#quantity").val());
    var customerPizzaDelivery=parseFloat($(this).find("select.pizza-delivery").val());

    var newPizzaOrder=new PizzaOrder(selectedSize,selectedCrust,selectedToppings,inputtedQuantity,customerPizzaDelivery);
    if(selectedSize!==""&&selectedCrust!==""&&selectedToppings!==""&&inputtedQuantity!==""&&customerPizzaDelivery=="150"){
      prompt("Please enter your location");

      $("#summary-topping").append(newPizzaOrder.topping)
      $("#summary-crust").append(newPizzaOrder.crust)
      $("#summary-size").append(newPizzaOrder.size)
      $("#summary-quantity").append(newPizzaOrder.quantity)
      $("#summary-delivery").append(customerPizzaDelivery)
      $("#summary-cost").append(newPizzaOrder.totalCost())


      alert("Delivery cost will be added")

    }
    else if(selectedSize!==""&&selectedCrust!==""&&selectedToppings!==""&&inputtedQuantity!==""&&customerPizzaDelivery=="0"){
      $("#summary-topping").append(newPizzaOrder.topping)
      $("#summary-crust").append(newPizzaOrder.crust)
      $("#summary-size").append(newPizzaOrder.size)
      $("#summary-quantity").append(newPizzaOrder.quantity)
      $("#summary-delivery").append(customerPizzaDelivery)
      $("#summary-cost").append(newPizzaOrder.totalCost())

    }
    else{
      alert("All fields required!")
    }

    $("form").trigger("reset");

  });
});
$(document).ready(function(){
  $("form#user").submit(function(event) {
    event.preventDefault();

    var userName=$("#name").val();
    var email=$("#email").val();
    var comment=$("#comment").val();
    if(userName&&email&&comment){
      alert("Hi "+userName +". We have received your message. Thank you for reaching out to us.");
    
    }
    else{
      alert("All fields required");
    }
    $("form").trigger("reset");
  });
});
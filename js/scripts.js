function PizzaOrder(size,crust,topping,quantity,delivery){
  this.crust=crust;
  this.size=size;
  this.topping=topping;
  this.quantity=quantity;
  this.delivery=delivery;
}
$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();

    var selectedSize= parseFloat($(this).find("select.pizza-size").val());
    var selectedCrust=parseFloat($(this).find("select.pizza-crust").val());
    var selectedToppings=parseFloat($(this).find("select.pizza-toppings").val());
    var inputtedQuantity=parseFloat($("input#quantity").val());
    var customerPizzaDelivery=parseFloat($(this).find("select.pizza-delivery").val());

    var newPizzaOrder=new PizzaOrder(selectedSize,selectedCrust,selectedToppings,inputtedQuantity,customerPizzaDelivery);



  });
});